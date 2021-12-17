import React from "react";
import Button from "../Button";
import "./Intro.css";
import logo from "../images/logos/LOGO-type-blue.png";
import folders from "../images/folders.jpeg";

export default function Intro() {
  return (
    <div className="Intro row">
      <div className="col-sm-7 left-text">
        <img
          src={logo}
          className="img-fluid logo"
          alt="it all adds up logo type"
        />
        <h2 className="thin-heading">Based on the Northern Beaches</h2>
        <h2 className="script-heading">...with over 15 years experience</h2>
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
