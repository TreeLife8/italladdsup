import React from "react";
import "./Packages.css";
import XERO from "../images/XeroDevices.png";
import ShapeDivider from "./ShapeDivider";
import ConsultationCatch from "./ConsultationCatch";
import TestimonialBanner from "./TestimonialBanner";
import Navbar from "../Navbar";
import PackageCards from "./PackageCards";

export default function Packages(props) {
  return (
    <div className="Packages">
      <Navbar toggleNavbar={props.toggleNavbar} state={props.state} />
      <div className="hero container-fluid">
        <h1 className="title">Packages</h1>
        <ShapeDivider />
      </div>
      <PackageCards />
      <div className="row container-fluid">
        <div className="col-sm-7">
          <img
            className="xero-img img-fluid"
            src={XERO}
            alt="a computer, phone and tablet all displaying the xero software"
          />
        </div>
        <div className="col-sm-5">
          <div className="quote">
            <h2 className="thin-heading">
              Free software installation & setup upon request
            </h2>
            <ul className="d-flex softwares">
              <li className="software">XERO</li>
              <li className="software">DEXT</li>
              <li className="software">MYOB</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dark-banner pb-3">
        <TestimonialBanner />
      </div>
      <ConsultationCatch />
    </div>
  );
}
