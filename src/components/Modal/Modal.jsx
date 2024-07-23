import React from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">
          <CloseIcon />
        </button>
        <ul className="modal-list">
          <li className="modal-item">
            <a className="modal-link" href="!#">
              Home
            </a>
          </li>
          <li className="modal-item">
            <a className="modal-link" href="!#">
              Featured
            </a>
          </li>
          <li className="modal-item">
            <a className="modal-link" href="!#">
              Services
            </a>
          </li>
          <li className="modal-item modal-last_item">
            <a className="modal-link" href="!#">
              Blog
            </a>
          </li>
          <li className="modal-item">
            <a className="tel" href="tel:+990000000">
              +(99) 000 00 00
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
