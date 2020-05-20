import React from "react";
import "./card-style.css";
const Cards = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="iamge 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eaque voluptate iure tempore aliquid facere deleniti voluptatem dicta,
          libero eius.
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywear
        </a>
      </div>
    </div>
  );
};
export default Cards;
