import InfoOpen from "./InfoOpen";

export default function HoverInfo(props) {
    
  return (
    <>
      <div className="plus" id={props.id} onClick={(e) => InfoOpen(props.id)}>
        <span onClick={InfoOpen}>
          <svg
          onClick={InfoOpen}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            overflow="visible"
            stroke="#a1a1a1"
            strokeOpacity="1"
            strokeWidth="10"
            strokeLinecap="flat"
          >
            <line x2="50" y2="50" />
            <line x1="50" y2="50" />
          </svg>
        </span>
        <div className="ls-info">
        <h1 className="headline-1-i">{props.info.headline1}</h1>
          <p>{props.info.title}
          </p>
          <h1 className="headline-2-i">{props.info.headline2}</h1>
        </div>
      </div>
    </>
  );
}
