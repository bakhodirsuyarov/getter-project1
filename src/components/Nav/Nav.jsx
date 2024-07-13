import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <a className="nav-logo_link" href="!#">
            Get_it
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Blog
            </a>
          </li>
        </ul>
        <div className="nav-btn">
          <a className="nav-tel" href="tel:+990000000">
            +(99) 000 00 00
          </a>
        </div>
      </div>
    </div>
  );
}
