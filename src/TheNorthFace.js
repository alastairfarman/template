import HoverInfo from "./HoverInfo";

const copy = {
    headline1: "The North Face",
    headline2: "Dr Martens",
    title:
      "Styled, photographed and retouched banner for The North Face Purple Label x Dr Martens collaboration.",
  };

export default function TheNorthFace() {
  return (
    <section className="wh" id="thenorthface">
      <img src="../img/1.jpg" alt=""></img>
      <HoverInfo id={1} info={copy} />
    </section>
  );
}
