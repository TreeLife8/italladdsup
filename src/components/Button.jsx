import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  return (
    <div className="Button">
      <Link to={props.to}>
        <button className={props.whiteBackground ? "btn white" : "btn"}>
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default Button;
