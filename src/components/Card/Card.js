import React from "react";
import "./Card.css";

//pass the image into each card so all 12 images are rendered
const Card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Card;