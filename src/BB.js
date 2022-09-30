import HoverInfo from "./HoverInfo";

const copy = {
  title:
    "'100%' Be@rbrick figures (7cm) shot and retouched for super hi-res launch materials and product images.",
};

export default function BB() {
  return (
    <section className="wh" id="bearbrick">
      <img id="big-bear" src="../img/bb1.png" alt=""></img>
      {/* <img id="bb2" src="../img/bb2.png" alt=""></img> */}
      <div id="bb-hover">
        <img className="small-bear" src="../img/bb1.png" alt=""></img>
        <img className="small-bear" src="../img/bb2.png" alt=""></img>
        <img className="small-bear" src="../img/bb3.png" alt=""></img>
        <img className="small-bear" src="../img/bb4.png" alt=""></img>
        <img className="small-bear" src="../img/bb5.png" alt=""></img>
        <img className="small-bear" src="../img/bb6.png" alt=""></img>
      </div>
      <h3 className="center-text">Be@rbrick x Dr Martens</h3>
      <HoverInfo id={3} info={copy} />
    </section>
  );
}
