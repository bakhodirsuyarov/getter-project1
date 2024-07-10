import React from "react";
import "./Hero.css";
import { icons } from "../../utilits/icons";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1 className="hero-title">Find Your Confort in Tashkent</h1>
        <h2 className="hero-description">buy and sell real estate</h2>
        <div className="hero-btn_box">
          <button className="hero-btn">with Murod</button>
        </div>
        <p className="hero-text">
          Whether you are looking to buy or sell, we know great homes in
          Tashkent and we know how to sell them.
        </p>

        <h3 className="hero-provide">
          We Provide <br />
          the Best Property for You
        </h3>

        <ul className="provide-list">
          <li className="provide-item item1">
            <div className="provide-icon">{icons.icon1}</div>
            <p className="provide-text">
              Commercial and residensial objects including all services.
            </p>
          </li>
          <li className="provide-item item2">
            <div className="provide-icon">{icons.icon1}</div>
            <p className="provide-text">
              Beautifully designed, furnished private rooms, apartments,
              cottages and villas with flexible prices.
            </p>
          </li>
          <li className="provide-item item3">
            <div className="provide-icon">{icons.icon1}</div>
            <p className="provide-text">
              We will find a customer and housing right during the construction
              of the facility.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
