import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Sidebar = ({ isOpen }) => {

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
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
