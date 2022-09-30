import { useState } from "react";
import HoverInfo from "./HoverInfo";

const copy = {
  title:
    "'100%' Be@rbrick figures (7cm) shot and retouched for super hi-res launch materials and product images.",
};

export default function BB() {
  const [activeBear, setActiveBear] = useState("2");

  return (
    <section className="wh" id="bearbrick">
      <img id="big-bear" src={`../img/bb${activeBear}.png`} alt=""></img>
      <img id="big-bear2" src={`../img/bb${activeBear}.png`} alt=""></img>

      <div id="bb-hover">
        <img
          className="small-bear"
          src="../img/bb1.png"
          data-key="1"
          alt=""
          onClick={(e) => setActiveBear(e.target.dataset.key)}
        ></img>

        <img
          className="small-bear"
          src="../img/bb2.png"
          data-key="2"
          alt=""
          onClick={(e) => setActiveBear(e.target.dataset.key)}
        ></img>

        <img
          className="small-bear"
          src="../img/bb3.png"
          data-key="3"
          alt=""
          onClick={(e) => setActiveBear(e.target.dataset.key)}
        ></img>

        <img
          className="small-bear"
          src="../img/bb4.png"
          data-key="4"
          alt=""
          onClick={(e) => setActiveBear(e.target.dataset.key)}
        ></img>

        <img
          className="small-bear"
          src="../img/bb5.png"
          data-key="5"
          alt=""
          onClick={(e) => setActiveBear(e.target.dataset.key)}
        ></img>

        <img
          className="small-bear"
          src="../img/bb6.png"
          data-key="6"
          alt=""
          onClick={(e) => setActiveBear(e.target.dataset.key)}
        ></img>
      </div>
      <div className="brand-container">
      <img src="./img/dm.png" alt=""></img>
      <img src="./img/bb.png" alt=""></img>
      </div>
      <HoverInfo id={3} info={copy} />
    </section>
  );
}
