import React from "react";
import "./styles.css";
import tn from "../../imgs/TN.webp";
import AppStore from "../../assets/icons/Appstore.jsx";
import PlayStore from "../../assets/icons/Playstore.jsx";

const Footer = () => {
  return (
    <div className="footer-back">
      <div className="footer-content">
        <div className="footer-top">
          <img src={ tn } alt="logoTN" className="footer-logo" />© 1996 - 2024,
          Artear
        </div>
        <div className="redirects-content">
          <div className="redirects-sections">
            Secciones
            <div className="blue-line"></div>
            <ul className="content-ul ul-top">

              <li><a href="">Ultimas noticias</a></li>
              <li><a href="">Deportivo</a></li>
              <li><a href="">Show</a></li>
              <li><a href="">Economia</a></li>
              <li><a href="">Internacional</a></li>
              <li><a href="">Opinion</a></li>
            </ul>
          </div>
          <div className="redirects-sitioA">
            Sitio amigos
            <div className="blue-line"></div>
            <ul className="content-ul ul-top">
              <li><a href="">Grupo clarin</a></li>
              <li><a href="">Artear</a></li>
              <li><a href="">eltrece</a></li>
              <li><a href="">Ciudad Magazine</a></li>
              <li><a href="">el Doce</a></li>
              <li><a href="">Cucinare</a></li>
              <li><a href="">Canal (a)</a></li>
              <li><a href="">Clarin</a></li>
              <li><a href="">Ole</a></li>
            </ul>
          </div>
        </div>
        <div className="app-footer">Descargate la app de TN
          <div className="content-svgs">
            <AppStore width={ 30 } height={ 30 } className='icons-footer' />
            <PlayStore width={ 30 } height={ 30 } className='icons-footer' />
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="content-ul ul-bottom">
            <li><a href="">Mapa del sitio</a></li>
            <li><a href="">Terminos y Condiciones</a></li>
            <li><a href="">Politicas de privacidad</a></li>
            <li><a href="">Media Kit</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
