import React from "react";
import "./ProvideCard.css";
import { icons } from "../../utilits/icons";

export default function ProvideCard() {
  return (
    <div className="provide-card">
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
            Beautifully designed, furnished private rooms, apartments, cottages
            and villas with flexible prices.
          </p>
        </li>
        <li className="provide-item item3">
          <div className="provide-icon">{icons.icon1}</div>
          <p className="provide-text">
            We will find a customer and housing right during the construction of
            the facility.
          </p>
        </li>
      </ul>
    </div>
  );
}
