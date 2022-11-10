import React from "react";
import "./Card.css";
function Card(props) {
  const Classes = "Card " + props.className;
  return <div className={Classes}>{props.children}</div>;
}
export default Card;
