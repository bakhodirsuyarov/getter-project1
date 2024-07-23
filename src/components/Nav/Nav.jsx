import React, { useState } from "react";
import "./Nav.css";
import hamburgerBtn from "../../assets/img/hamburger-btn.svg";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <a className="nav-logo_link" href="#!">
            Get_it
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Blog
            </a>
          </li>
        </ul>
        <Button />
        <button type="button" onClick={handleOpen} className="hamburger-btn">
          <img src={hamburgerBtn} alt="menu" />
        </button>
        <Modal isOpen={open} onClose={handleClose}></Modal>
      </div>
    </div>
  );
}
