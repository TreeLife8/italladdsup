import React from "react";
import Button from "../Button";
import "./ConsultationCatch.css";

export default function ConsultationCatch() {
  return (
    <div className="ConsultationCatch pt-5">
      <hr className="element" />
      <h4 className="thin-heading">Sick of feeling taxed?</h4>
      <h2 className="heading">Get a FREE consultation</h2>
      <h4 className="thin-heading">
        ...with your LOCAL, trustworthy and friendly bookkeeper.
      </h4>
      <div className="text-center">
        <Button
          text="book a consultation"
          to="../Contact"
          whiteBackground={true}
        />
      </div>
    </div>
  );
}
