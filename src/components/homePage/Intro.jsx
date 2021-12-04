import React from "react";
import Button from "../Button";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="Intro">
      <h2 className="thin-heading">Based on the Northern Beaches</h2>
      <h2 className="script-heading">
        over 15 years experience in bookkeeping
      </h2>
      <p className="intro-description">
        providing businesses with accurate records of their transactions and
        sales revenue whilst running their payrolls in an efficient and timely
        manner
      </p>
      <Button text="view packages" to="./Packages" whiteBackground={true} />
    </div>
  );
}
