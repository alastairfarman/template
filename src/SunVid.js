import HoverInfo from "./HoverInfo";

const copy = {
  title: "",
};

export default function SunVid() {
  return (
    <section className="wh" id="sunvid">
      <video muted autoPlay loop id="drive">
        <source src="./img/4.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
