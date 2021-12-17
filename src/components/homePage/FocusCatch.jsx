import React from "react";
import Button from "../Button";
import "./FocusCatch.css";
import bizcard from "../images/bizcard.jpeg";

export default function FocusCatch() {
  return (
    <div className="FocusCatch">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={bizcard}
            alt="keyboard and pen"
            className="img-fluid keyboard"
          />
        </div>
        <div className="col-sm-6 catch-column">
          <hr className="element mb-4" />
          <h3 className="heading">Get a FREE consultation</h3>
          <h5 className="info">
            Do you want your work/life balance back?
            <div className="script">Look no further!</div>
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
