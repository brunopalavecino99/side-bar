import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import tn from "../../imgs/TN.webp";

const Sidebar = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-content">
          <img src={tn} alt="logoTN" className="logo-tn" />
        </div>
        <button className="close-button" onClick={handleClose}>X</button>
      </div>
      <h2 className="text-h2">Secciones</h2>
      <div className="blue-line-sidebar"></div>
      <ul>
        <li>
          <Link to="/">Ultimas noticias</Link>
        </li>
        <li>
          <Link to="/about">Deportivo</Link>
        </li>
        <li>
          <Link to="/contact">Shows</Link>
        </li>
        <li>
          <Link to="/products">Campo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
