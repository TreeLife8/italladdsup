import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./images/logos/LOGO-full-blue.png";
import logotype from "./images/logos/LOGO-type-white.png";
import Arrow from "./images/oceanArrow.png";

export default function Footer() {
  return (
    <footer>
      <img
        src={Arrow}
        alt="arrow shape divider with ocean texture design element"
        className="img-fluid arrow"
      />
      <div className="row container-fluid pb-3">
        <div className="col-sm contact-details">
          <h2 className="subheading details">Contact</h2>
          <div className="details">
            <a
              className="title-group"
              href="mailto: jane@italladdsup.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              jane@italladdsup.com.au
            </a>
          </div>
          <div className="details">0407 235 772</div>
          <div className="details">PO. Box 494 Avalon Beach NSW 2107</div>
        </div>
        <div className="col-sm d-flex social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/italladdsupbookkeeping"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/it-all-adds-up-bookkeeping-&-secretarial-services/about/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="col-sm">
          <Link to="/">
            <img className="logo" src={logo} alt="It all adds up logo" />
          </Link>
        </div>
      </div>
      <div className="band">
        <Link to="/">
          <img
            className="logotype img-fluid"
            src={logotype}
            alt="it all adds up logotype"
          />
        </Link>
      </div>
      <div className="Github-link mt-3 mb-3">
        Crafted by Regina Maher and is opened source on{" "}
        <a
          href="https://github.com/regina-maher/italladdsup"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </div>
    </footer>
  );
}
