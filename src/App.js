import React, { useState } from "react";
import "./App.css";
import HackneyMarshes from "./HackneyMarshes";
import TheNorthFace from "./TheNorthFace";
import Drive from "./Drive";
import BB from "./BB";
import Sun from "./Sun";
import SunVid from "./SunVid";

function App() {
  //scroll bhvr//
  window.onscroll = () => {
    let pos = window.scrollY;

    // portrait view title 1 movement
    let arr1 = [...document.getElementsByClassName("headline-1")];
    for (let i = 0; i < arr1.length; i++) {
      let offset =
        arr1[i].getBoundingClientRect().top +
        arr1[i].ownerDocument.defaultView.pageYOffset;
      arr1[i].style.letterSpacing = `${(offset - pos) / 10}px`;
      arr1[i].style.left = `${(offset - pos) / 10 + 16}px`;
    }
    // portrait view title 2 movement
    let arr2 = [...document.getElementsByClassName("headline-2")];
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

    //bearbricks movement
    let big = document.getElementById("big-bear");
    let bb2 = document.getElementById("bb2");
    let offset =
      big.getBoundingClientRect().top +
      big.ownerDocument.defaultView.pageYOffset;
    let num = (pos - offset) / 20 + 20;

    big.style.transform = `rotate(${num / 2}deg)`;
    bb2.style.transform = `rotate(${(num * -1) / 2}deg)`;
    big.style.scale = 1 + num / 100 / 2;
    bb2.style.scale = 1 + num / 100 / 2;
    big.style.translate = `${-50 + num / 10}%`;
    bb2.style.translate = `${50 - num / 10}%`;

    //sunglasses scroll rotate - commented out to use slider instead

    //   let sunglasses = document.getElementById("sunglasses");
    //   let sunOffset =
    //     sunglasses.getBoundingClientRect().top +
    //     sunglasses.ownerDocument.defaultView.pageYOffset;

    //   if (Math.round((pos - sunOffset + 600) / 19) < 1) {
    //   } else if (Math.round((pos - sunOffset + 600) / 19) < 32) {
    //     setImageNum(Math.round((pos - sunOffset + 600) / 19));
    //   }
  };



  return (
    <>
      <header id="name">
        <h1>Alastair Farman</h1>
      </header>
      <TheNorthFace />
      <Sun />
      <SunVid />
      <BB />
      <section className="bk"></section>
      <HackneyMarshes />
      <Drive />
    </>
  );
}

export default App;
