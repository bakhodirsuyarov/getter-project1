import React from "react";
import "./MiddleTop.css";

export default function MiddleTop() {
  return (
    <div className="middletop">
      <div className="middletop-wrapper">
        <div className="middletop-content">
          <h2 className="middletop-title">10 reasons </h2>
          <h3 className="middletop-text">why you should choose us</h3>
        </div>
        <div className="middletop-list_wrapper">
          <span className="middletop-span span1"></span>
          <ul className="middletop-list list1">
            <li className="list1-item item">Recommends a lender</li>
            <li className="list1-item item">Negotiates price</li>
            <li className="list1-item item">
              Communicates with the seller’s agent
            </li>
            <li className="list1-item item bottom-item item-star1">
              Helps you get to closing
            </li>
          </ul>
          <ul className="middletop-list list2">
            <li className="list2-item item">Prepares a solid offer</li>
            <li className="list2-item item">Real estate connections</li>
            <li className="list2-item item bottom-item item-star2">
              Negotiates repairs
            </li>
          </ul>
          <span className="middletop-span span2"></span>
          <span className="middletop-span span3"></span>
          <span className="middletop-span span4"></span>
          <ul className="middletop-list list3">
            <li className="list3-item item">
              Uses tools to find the right property
            </li>
            <li className="list3-item item">
              Attends inspection on your behalf
            </li>
            <li className="list3-item item bottom-item">
              Communicates with the lender
            </li>
          </ul>
          <span className="middletop-span2"></span>
        </div>
      </div>
    </div>
  );
}
