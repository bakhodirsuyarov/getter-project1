import React from "react";
import "./Hero.css";
import { icons } from "../../utilits/icons";
import ProvideCard from "../ProvideCard/ProvideCard";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1 className="hero-title">Find Your Confort in Tashkent</h1>
        <h2 className="hero-description">buy and sell real estate</h2>
        <div className="hero-btn_box">
          <h2 className="hero-btn">with ------</h2>
        </div>
        <p className="hero-text">
          Whether you are looking to buy or sell, we know great homes in
          Tashkent and we know how to sell them.
        </p>

        <h3 className="hero-provide">
          We Provide <br />
          the Best Property for You
        </h3>
      </div>
    </div>
  );
}
