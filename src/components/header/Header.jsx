import React from "react";
import "./styles.css";
import SvgComponent from "../icons/icon.jsx";

const Header = ({ onMenuClick }) => {
    return (
        <header className="header-back">
            <SvgComponent width={24} className="icon-menu" onClick={onMenuClick} />
            <div className="header-text">
                My Side Bar
            </div>
        </header>
    )
}

export default Header
