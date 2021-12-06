import React from "react";
import "./FeaturesSection.css";
import Reliable from "../images/icons/reliable.png";
import uptodate from "../images/icons/upToDate.png";
import integration from "../images/icons/integration.png";
import local from "../images/icons/local.png";
import accurate from "../images/icons/accurate.png";
import covidadvice from "../images/icons/covidAdvice.png";
import efficient from "../images/icons/efficient.png";
import cloudbased from "../images/icons/cloudbased.png";

export default function FeaturesSection() {
  let features = [];
  function Features(name, description, icon, alt) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.alt = alt;
    features.push({
      name: this.name,
      description: this.description,
      icon: this.icon,
      alt: this.alt,
    });
  }
  new Features(
    "Reliable",
    "fully certified & insured over 15 years of experience",
    `${Reliable}`,
    "Certificate with badge"
  );
  new Features(
    "Up-to-date",
    "with new laws, regulations & technology",
    `${uptodate}`,
    "Calander with time tick"
  );
  new Features(
    "Integration",
    "with leading financial softwares such as MYOB and XERO",
    `${integration}`,
    "puzzles fitting together"
  );
  new Features(
    "Local",
    "Based in Sydney, Northern Beaches",
    `${local}`,
    "pin drop on map"
  );
  new Features(
    "Accurate",
    "reports & predictions for business growth",
    `${accurate}`,
    "target on-point"
  );
  new Features(
    "COVID advice",
    "on relevant government subsidies",
    `${covidadvice}`,
    "pulse image"
  );
  new Features(
    "Fast & efficient",
    "timely reporting & lodging to remain compliant",
    `${efficient}`,
    "stop watch"
  );
  new Features(
    "Cloud based",
    "live access to information and progress tracking",
    `${cloudbased}`,
    "cloud-based technology"
  );
  return (
    <div className="FeaturesSection">
      <div className="banner row  d-flex justify-content-start">
        <div className="left-column">
          <div className="col-sm-4">
            <hr className="element" />
            <h2 className="heading">Trusted service</h2>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row">
            {features.map(function (feature, index) {
              return (
                <div key={index} className="col-sm">
                  <div className="card">
                    <img
                      src={feature.icon}
                      className="card-img-top pb-1"
                      alt={feature.alt}
                    />
                    <hr className="element" />
                    <div className="card-body">
                      <h5 className="card-title">{feature.name}</h5>
                      <p className="card-text">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-4 right-column">
          <hr className="element" />
          <h2 className="heading">Trusted service</h2>
        </div>
      </div>
    </div>
  );
}
