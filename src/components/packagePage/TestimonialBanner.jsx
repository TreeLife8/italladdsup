import React from "react";
import "./TestimonialBanner.css";
import officePlant from "../images/officePlant.jpg";
import Carousel from "../Carousel";

export default function TestimonialBanner() {
  return (
    <div className="TestimonialBanner row">
      <div className="col-sm-8">
        <Carousel />
      </div>
      <div className="col-sm-4">
        <img
          src={officePlant}
          alt="workdesk with pen, keyboard, mouse and notebook"
          className="img-fluid img"
        />
      </div>
    </div>
  );
}
