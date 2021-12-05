import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="white-banner"></div>
      <h1 className="title">Get in touch</h1>
      <div className="contact-box">
        <h5 className="script-heading">Contact Jane</h5>
        <h4 className="contact">0407 235 772</h4>
        <a
          className="title-group"
          href="mailto: jane@italladdsup.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="contact">jane@italladdsup.com.au</h4>
        </a>
      </div>
    </div>
  );
}
