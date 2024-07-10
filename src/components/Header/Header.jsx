import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <Hero />
    </div>
  );
}
