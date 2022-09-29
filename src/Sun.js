import HoverInfo from "./HoverInfo";
import { useState } from "react";

const copy = {
  title:
    "An exploration of 3D product images and integration to page with JavaScript. Model, materials and lighting in Blender.",
};

export default function Sun(props) {
  // change sunglasses color//
  const [sunNum, setSunNum] = useState(1);
  const imgURL = `./img/sun/${sunNum}/${props.imageNum}.png`;

  const changeColor = () => {
    if (sunNum !== 3) {
      setSunNum(sunNum + 1);
    } else setSunNum(1);
  };

  return (
    <section className="wh" id="sun">
      <img id="sunglasses" src={imgURL} alt=""></img>
      <div className="changecol" onClick={changeColor}>
        Change colour
      </div>
      <HoverInfo id={4} info={copy} />
    </section>
  );
}
