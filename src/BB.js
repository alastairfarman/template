import { useState } from "react";
import HoverInfo from "./HoverInfo";

const copy = {
  title:
    "'100%' Be@rbrick figures (7cm) shot and retouched for super hi-res launch materials and product images.",
};

export default function BB() {
  const [activeBear, setActiveBear] = useState("2");

  function changeBear(e) {
    setActiveBear(e.target.dataset.key);
    let newColor = document.querySelector(".brand-container");
    console.log(e.target.dataset.key);

    switch (e.target.dataset.key) {
      case "1":
        newColor.style.backgroundColor = "rgba(0,198,140,0.8)";
        break;
      case "2":
        newColor.style.backgroundColor = "rgba(0,130,240,0.8)";
        break;
      case "3":
        newColor.style.backgroundColor = "rgba(235,190,255,0.8)";
        break;
      case "4":
        newColor.style.backgroundColor = "rgba(255,239,0,0.8)";
        break;
      case "5":
        newColor.style.backgroundColor = "rgba(220,0,30,0.8)";
        break;
      case "6":
        newColor.style.backgroundColor = "rgba(130,0,220,0.8)";
        break;
      default:
    }
  }

  return (
    <section className="wh" id="bearbrick">
      <img id="big-bear" src={`./img/bb${activeBear}.png`} alt=""></img>
      <img id="bear-move1" src={`./img/bb${activeBear}.png`} alt=""></img>
      <img id="bear-move2" src={`./img/bb${activeBear}.png`} alt=""></img>
      <img id="bear-move3" src={`./img/bb${activeBear}.png`} alt=""></img>

      <div id="bb-hover">
        <img
          className="small-bear"
          src="./img/bb1.png"
          data-key="1"
          alt=""
          onClick={changeBear}
        ></img>

        <img
          className="small-bear"
          src="./img/bb2.png"
          data-key="2"
          alt=""
          onClick={changeBear}
        ></img>

        <img
          className="small-bear"
          src="./img/bb3.png"
          data-key="3"
          alt=""
          onClick={changeBear}
        ></img>

        <img
          className="small-bear"
          src="./img/bb4.png"
          data-key="4"
          alt=""
          onClick={changeBear}
        ></img>

        <img
          className="small-bear"
          src="./img/bb5.png"
          data-key="5"
          alt=""
          onClick={changeBear}
        ></img>

        <img
          className="small-bear"
          src="./img/bb6.png"
          data-key="6"
          alt=""
          onClick={changeBear}
        ></img>
      </div>
      <div className="empty"></div>
      <div className="brand-container">
        <div className="brands">
          <img src="./img/dm.png" alt=""></img>
          <img src="./img/bb.png" alt=""></img>
        </div>
        <h1 className="bb-headline">Celebrating 6 decades of Dr Martens</h1>
      </div>
      <HoverInfo id={3} info={copy} />
    </section>
  );
}
