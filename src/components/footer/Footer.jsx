import React from "react";
import "./styles.css";
import tn from "../../imgs/TN.webp";

const Footer = () => {
    return (
        <div className="footer-back">
            <div className="footer-content">
                <div className="footer-top">
                    <img src={ tn } alt="logoTN" className="footer-logo" />
                    © 1996 - 2024, Artear
                </div>
                <div className="redirects-content">
                    <div className="redirects-sections">
                        Secciones
                    </div>
                    <div className="redirects-sitioA">
                        Sitio amigos
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;