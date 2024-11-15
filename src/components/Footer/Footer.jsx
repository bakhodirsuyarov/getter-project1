import React from "react";
import "./Footer.css";
import { icons } from "../../utilits/icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-home">{icons.home}</div>
            <div className="footer-content_wrapper">
              <h3 className="footer-title">
                invest in your calm future and find your dream house without any
                difficulties
              </h3>
            </div>
            <ul className="footer-top_list">
              <li className="footer-top_item">
                <a href="!#">HOME</a>
              </li>
              <li className="footer-top_item">
                <a href="!#">FEATURED</a>
              </li>
              <li className="footer-top_item">
                <a href="!#">SERVICES</a>
              </li>
              <li className="footer-top_item">
                <a href="!#">ABOUT US</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="footer-text">
              <span>&copy;</span>2022 Real Estate Murod. All Rights Reserved.
              Build by MeiLiHua
            </p>
            <ul className="footer-bottom_list">
              <li className="footer-bottom_item">
                <a className="footer-bottom_link" href="!#">
                  {icons.instagram}
                </a>
              </li>
              <li className="footer-bottom_item">
                <a className="footer-bottom_link" href="!#">
                  {icons.telegram}
                </a>
              </li>
              <li className="footer-bottom_item">
                <a className="footer-bottom_link" href="!#">
                  {icons.facebook}
                </a>
              </li>
              <li className="footer-bottom_item">
                <a className="footer-bottom_link" href="!#">
                  {icons.youtube}
                </a>
              </li>
              <li className="footer-bottom_item">
                <a className="footer-bottom_link" href="!#">
                  {icons.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
