import React from "react";
import Button from "../Button";
import "./Intro.css";
import logo from "../images/logos/LOGO-type-blue-cut.png";
import folders from "../images/folders.png";

export default function Intro() {
  return (
    <div className="Intro row">
      <div className="col-sm-7 left-text">
        <img
          src={logo}
          className="img-fluid logo"
          aboutlt="it all adds up logo type"
        />
        <h2 className="thin-heading">Based on the Northern Beaches</h2>
        <h2 className="script-heading">...with over 15 years experience</h2>
        {/* <p className="intro-description">
          providing businesses with accurate records of their transactions and
          sales revenue whilst running their payrolls in an efficient and timely
          manner
        </p> */}
        <Button text="view packages" to="./Packages" whiteBackground={true} />
      </div>
      <div className="col-sm-5">
        <img
          src={folders}
          alt="pile of blue and white office folders"
          className="img-fluid folders"
        />
      </div>
    </div>
  );
}
