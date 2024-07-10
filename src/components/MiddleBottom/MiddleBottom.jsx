import React from "react";
import "./MiddleBottom.css";
import ManImg from "../../assets/img/man.png";

export default function MiddleBottom() {
  return (
    <div className="middlebottom">
      <div className="middlebottom-wrapper">
        <div className="middlebottom-context">
          <h2 className="middlebottom-title">
            We Have over 4 years of experience in the real estate industry
          </h2>
          <h3 className="middlebottom-description">
            more then 500 satisfied customers
          </h3>
          <p className="middlebottom-text">
            We are a dominant in the market of uzbekistan and we have almosta
            million followers on the instagram blog, where we provide
            spectacular reportsof our brilliant work.
          </p>
        </div>
        <div>
          <img className="middlebottom-img" src={ManImg} alt="man" />
        </div>
      </div>
    </div>
  );
}
