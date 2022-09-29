import HoverInfo from "./HoverInfo";

const copy = {
  title:
    "An experiment with Blender, exploring animation, paralax, lighting and ambience. Porsche model modified from BlenderKit",
};

export default function Drive() {
  return (
    <section className="wh" id="drive">
      <video muted autoPlay loop id="drive">
        <source src="../img/3.mp4" type="video/mp4" />
      </video>
      <HoverInfo id={2} info={copy} />
    </section>
  );
}
