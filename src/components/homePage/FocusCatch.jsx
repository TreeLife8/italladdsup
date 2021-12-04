import React from "react";
import Button from "../Button";
import "./FocusCatch.css";
import keyboard from "../images/keyboardTransparentCut.png";

export default function FocusCatch() {
  return (
    <div className="FocusCatch">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={keyboard}
            alt="keyboard and pen"
            className="img-fluid keyboard"
          />
        </div>
        <div className="col-sm-6 catch-column">
          <hr className="element mb-4" />
          <h3 className="heading">Get a FREE consultation</h3>
          <h5 className="info">
            Do you want your work/life balance back?
            <br /> Then look no further!
          </h5>
          <Button
            text="book a consultation"
            to="./Contact"
            whiteBackground={false}
          />
        </div>
      </div>
    </div>
  );
}
