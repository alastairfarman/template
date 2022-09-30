import React, { useEffect, useState } from "react";
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
    let offset =
      big.getBoundingClientRect().top +
      big.ownerDocument.defaultView.pageYOffset;
    let num = (pos - offset) / 20 + 20;

    big.style.transform = `rotate(${num / 2}deg)`;
    big.style.scale = 1 + num / 100 / 2;
    big.style.translate = `${-50 + num / 10}%`;
  };

  //activate BB selector

  useEffect(() => {
    const dock = document.getElementById("bb-hover");
    const bears = document.querySelectorAll(".small-bear");
   
    bears.forEach((li) => {
      li.addEventListener("mousemove", (e) => {
        let item = e.target;
        let itemRect = item.getBoundingClientRect();
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;

        let prev = item.previousElementSibling || null;
        let next = item.nextElementSibling || null;

        let scale = 0.8;

        resetScale();

        if (prev) {
          prev.style.setProperty("--scale", 1 + scale * Math.abs(offset - 1));
        }

        item.style.setProperty("--scale", 1 + scale);

        if (next) {
          next.style.setProperty("--scale", 1 + scale * offset);
        }
      });
    });

    dock.addEventListener("mouseleave", (e) => {
      resetScale();
    });

    function resetScale() {
      bears.forEach((li) => {
        li.style.setProperty("--scale", 1);
      });
    }
  });

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
