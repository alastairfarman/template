import HoverInfo from "./HoverInfo";
import { useState } from "react";

const copy = {
  title:
    "An exploration of 3D product images and integration to page with JavaScript. Model, materials and lighting in Blender.",
};

export default function Sun(props) {
  // change sunglasses color//
  const [sunNum, setSunNum] = useState(1);
  const [imageNum, setImageNum] = useState(1);
  const imgURL = `./img/sun/${sunNum}/${imageNum}.png`;
  const changeImageRotation = () => {
    let rangeSlider = document.getElementById("sliderRange");
    setImageNum(rangeSlider.value);
  };

  const changeColor = () => {
    if (sunNum !== 3) {
      setSunNum(sunNum + 1);
    } else setSunNum(1);
  };


  return (
    <section className="wh" id="sun">
      <img id="sunglasses" src={imgURL} alt=""></img>
      <div className="interaction-container">
        <div className="rangeslide">
          <input
            type="range"
            min="1"
            max="32"
            defaultValue="1"
            className="slider"
            id="sliderRange"
            onChange={changeImageRotation}
          />
        </div>
        <div className="changecol" onClick={changeColor}>
          Change colour
        </div>
      </div>
      <HoverInfo id={4} info={copy} />
    </section>
  );
}
