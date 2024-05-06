import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const Sidebar = ({ isOpen, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={handleClose}>Cerrar</button>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Acerca de</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;