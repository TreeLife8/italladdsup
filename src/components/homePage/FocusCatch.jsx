import React from "react";
import Button from "../Button";
import "./FocusCatch.css";

export default function FocusCatch() {
  return (
    <div className="FocusCatch">
      <div className="row">
        <div className="col-6">
          <hr className="element mb-4" />
          <h3 className="heading">...so you can focus.</h3>
          <h5 className="info">
            Get peace of mind with clear reports and reliable advice, so you can
            focus on what really matters
          </h5>
        </div>
        <div className="col-6">
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
