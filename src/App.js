import React from "react";
import "./App.css";
import HoverInfo from "./HoverInfo";

function App() {
  const northface = {
    headline1: "The Northface Purple Label",
    headline2: "Dr Martens",
    title: "",
  };

  const drive = {};

  //scroll bhvr//
  window.onscroll = () => {
    let pos = window.scrollY;
    let arr1 = [...document.getElementsByClassName("headline-1")];
    let arr2 = [...document.getElementsByClassName("headline-2")];

    for (let i = 0; i < arr1.length; i++) {
      let offset =
        arr1[i].getBoundingClientRect().top +
        arr1[i].ownerDocument.defaultView.pageYOffset;
      arr1[i].style.letterSpacing = `${(offset - pos) / 10}px`;
      arr1[i].style.left = `${(offset - pos) / 10 + 16}px`;
    }

    for (let i = 0; i < arr2.length; i++) {
      let offset =
        arr2[i].getBoundingClientRect().top +
        arr2[i].ownerDocument.defaultView.pageYOffset;
      arr2[i].style.letterSpacing = `${
        (offset - pos - window.innerHeight / 1.5) / 20
      }px`;
      arr2[i].style.right = `${
        (offset - pos - window.innerHeight / 1.5) / 15
      }px`;
    }

    let bb1 = document.getElementById("bb1");
    let bb2 = document.getElementById("bb2");
    let offset =
      bb1.getBoundingClientRect().top +
      bb1.ownerDocument.defaultView.pageYOffset;
    let num = ((pos - offset) / 20 + 20)
    
    bb1.style.transform = `rotate(${num / 2}deg)`;
    bb2.style.transform = `rotate(${(num * -1) / 2}deg)`;
    bb1.style.scale = 1 + ((num/100) / 2)
    bb2.style.scale = 1 + ((num/100) / 2)
    bb1.style.translate = `${-50 + (num / 10)}%`
    bb2.style.translate = `${50 - (num / 10)}%`
  }


  return (
    <>
      <header id="name"></header>
      <section className="bk" id="hackneymarshes">
        <div className="info">
          <h1 className="headline-1">Hackney</h1>
          <p>
            Grassroots <b>football</b>, shot the Sunday prior to the first
            national lockdown due to the <em>Covid-19</em> pandemic.<br></br>
          </p>
          <h1 className="headline-2">Marshes</h1>
        </div>
        <div className="img-container">
          <img src="../img/2.jpg" alt=""></img>
        </div>
      </section>
      <section className="wh" id="thenorthface">
        <img src="../img/1.jpg" alt=""></img>
        <HoverInfo id={1} info={northface} />
      </section>
      <section className="wh" id="drive">
        <video muted autoPlay loop id="drive">
          <source src="../img/3.mp4" type="video/mp4" />
        </video>
        <HoverInfo id={2} info={drive} />
      </section>
      <section className="wh" id="bearbrick">
        <img id="bb1" src="../img/bb1.png" alt=""></img>
        <img id="bb2" src="../img/bb2.png" alt=""></img>
        <h3 className="center-text">BE@RBRICK x Dr Martens</h3>
      </section>
      <section className="bk"></section>
    </>
  );
}

export default App;
