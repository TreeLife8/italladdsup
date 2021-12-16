import React from "react";
import "./Qualifications.css";
import TaxBoard from "../images/qualifications/TAX.jpg";
import Myob from "../images/qualifications/MYOB.jpg";
import Xero from "../images/qualifications/XERO.jpg";
import ICB from "../images/qualifications/ICB.jpg";

export default function Qualifications() {
  let qualifications = [
    {
      icon: `${TaxBoard}`,
      alt: "Tax Practitioner symbol for Australia",
      class: "cert-symbol img-fluid",
    },
    {
      icon: `${Myob}`,
      alt: "Silver Parter for Myob logo",
      class: "cert-symbol myob img-fluid",
    },
    {
      icon: `${Xero}`,
      alt: "Bronze partner for Xero logo",
      class: "cert-symbol img-fluid",
    },
    {
      icon: `${ICB}`,
      alt: "The instatute of certified bookkeepers crest",
      class: "cert-symbol img-fluid",
    },
  ];
  return (
    <div className="Qualifications">
      <div className="container">
        <div className="row">
          {qualifications.map(function (qualify, index) {
            return (
              <div key={index} className="col">
                <img
                  data-aos="fade-zoom-up"
                  className={qualify.class}
                  src={qualify.icon}
                  alt={qualify.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
