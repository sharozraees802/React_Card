import React, { Component } from "react";
import image1 from "../assets/Adventure-Travel.jpg";
import image2 from "../assets/download.jpg";
import image3 from "../assets/gold-chess-chess-board-game-business-metaphor-leadership-concept_1150-19579.jpg";
import Card from "./CardUI";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={image1} title="Adventure" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={image2} title="Playground" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={image3} title="Chess" />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
