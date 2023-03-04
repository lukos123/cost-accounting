import CrossSVG from "./cross-circle-svgrepo-com.svg";
import "./Crross.scss";
function Cross(props) {
  //props.children
  return (
    <div onClick={props.onClick} className={`react-cross ${props.className}`}>
      <img src={CrossSVG} alt="cross" />
    </div>
  );
}

export default Cross;
