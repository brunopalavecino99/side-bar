import React from "react";
import "./styles.css";
import SvgComponent from "../icons/icon.jsx";
import tn from "../../imgs/TN.webp";

const Header = ({ onMenuClick }) => {
    return (
        <header className="header-back">
            <div className="header-content">
                <img src={ tn } alt="logoTN" className="logo-tn" />
            </div>
            <SvgComponent width={ 24 } className="icon-menu" onClick={ onMenuClick } />
        </header>
    )
}

export default Header
