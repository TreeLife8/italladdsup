import React from "react";
import Carousel from "../Carousel";
import officePlant from "../images/officePlant.jpg";
import "./Testimonials.css";
import quotation from "../images/quotation.png";

export default function Testimonials() {
  return (
    <div className="Testimonials row">
      <div className="col-sm-6">
        <img
          src={officePlant}
          alt="image of a white office with a chair and plants"
          className="img-fluid img-tile"
        />
      </div>
      <div className="col-sm-6 quotes">
        <Carousel />
        <img
          className="quote img-fluid"
          src={quotation}
          alt="quotation marks"
        />
      </div>
    </div>
  );
}
