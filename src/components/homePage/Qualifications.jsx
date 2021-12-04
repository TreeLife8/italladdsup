import React from "react";
import "./Qualifications.css";
import TaxBoard from "../images/qualifications/TAX.jpg";
import Myob from "../images/qualifications/MYOB.png";
import Xero from "../images/qualifications/XERO.jpg";
import ICB from "../images/qualifications/ICB.jpg";

export default function Qualifications() {
  let qualifications = [
    {
      icon: `${TaxBoard}`,
      alt: "Tax Practitioner symbol for Australia",
    },
    {
      icon: `${Myob}`,
      alt: "Silver Parter for Myob logo",
    },
    {
      icon: `${Xero}`,
      alt: "Bronze partner for Xero logo",
    },
    {
      icon: `${ICB}`,
      alt: "The instatute of certified bookkeepers crest",
    },
  ];
  return (
    <div className="Qualifications">
      <div className="container">
        <div className="row">
          {qualifications.map(function (qualify, index) {
            return (
              <div key={index} className="col-sm">
                <img
                  data-aos="fade-zoom-up"
                  className="cert-symbol img-fluid"
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
