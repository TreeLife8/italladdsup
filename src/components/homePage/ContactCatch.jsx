import React from "react";
import Button from "../Button";
import "./ContactCatch.css";

export default function ContactCatch() {
  return (
    <div className="ContactCatch">
      <hr className="element" />
      <h2 className="heading">Contact me to discuss your needs</h2>
      <h5 className="catch-phrase">
        Get peace of mind with clear reports and reliable advice, so you can
        focus on what really matters
      </h5>
      <Button
        text="book a consultation"
        to="./Contact"
        whiteBackground={true}
      />
    </div>
  );
}
