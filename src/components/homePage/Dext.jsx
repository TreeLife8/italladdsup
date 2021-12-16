import React from "react";
import Button from "../Button";
import dextLogo from "../images/DEXT-logo.png";
import dextScreen from "../images/DEXT-screen.png";
import "./Dext.css";

export default function Dext() {
  return (
    <div className="Dext">
      <div className="row container-fluid pt-5">
        <div className="section-heading col-sm-5">
          <h2 className="thin-heading">
            Say goodbye to the shoeboxes as DEXT takes you to a
          </h2>
          <h2 className="script-heading">paperless 21st century</h2>
          <div className="pt-5">
            <Button
              text="view packages"
              to="./Packages"
              whiteBackground={true}
            />
          </div>
        </div>
        <div className="dext-images col-sm-7">
          <img src={dextLogo} alt="DEXT logo" className="img-fluid logo" />
          <img
            src={dextScreen}
            alt="laptop and phone screen showing the dext app taking photos of recipts"
            className="img-fluid computer"
          />
        </div>
      </div>
    </div>
  );
}
