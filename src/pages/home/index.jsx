import React from "react";
import './styles.css';
import img from "./asd.avif";
import { FaFacebook } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import img2 from "./asdddd.avif";
import img3 from "./img3.avif";

const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
}

const Home = () => {
    return (
        <article>
            <div className="first-content">
                <h1 className="text-h1">El barrio mas cool ya no es Palermo: segun el NY times el trono paso de manos</h1>
                <h3 className="text-h3">No solo por los negocios gastronomicos, la arquitectura y otros detalles lo convierten en "peculiar"</h3>
                <ul>
                    <li key={"fecha"}>08 de mayo 2024, 23:27hs</li>
                </ul>
            </div>
            <img src={img} alt="Imagen" className="image" />
            <div className="icons-content">
                <a href="https://facebook.com"><FaFacebook className="icons blue" /> </a>
                <a onClick={copyLink}><IoIosLink className="icons black" /></a>
                <a href="https://whatsapp.com"><FaWhatsapp className="icons green" /> </a>
            </div>
            <div className="second-content">
                <p>Si le preguntamos a la inteligencia artificial cuál es el barrio más cool de Buenos Aires seguramente nos dará una información desactualizada. Los tiempos están cambiando rápidamente para la ciudad, <b>Palermo ya no es el destino más buscado</b> por los turistas y las guías extranjeras comienzan a destacar otras zonas que dejan a este barrio en un lugar relegado.</p>
                <p><b>Lee Tambien:</b> <a href="about"><em>Las canas están de moda, pero ¿quedan cool o avejentan?</em></a></p>
                <p>Es el caso del New York Times, que esta vez visitó CABA y <b>destacó un nuevo barrio: Chacarita.</b> Los proyectos gastronómicos fueron los primeros en mudarse de un saturado Palermo con alquileres muy costosos y una pérdida de atención en las redes sociales por parte de los influencers que ya sienten que el barrio quedó muy “popular”.</p>
                <img src={img2} alt="Imagen2" className="image2" />
                <figcaption>Chacarita le pareció al autor totalmente transitable y un lugar magnífico para ir de compras, comer y simplemente pasear durante unos días. (Foto: Sarah Pabst para The New York Times)</figcaption>
                <p>Los que lideraron el cambio fueron los baristas. Una serie de nuevos cafés de especialidad florecieron por el barrio antes conocido como ser la zona cercana al cementerio más grande de la ciudad. Luego siguieron los chefs colocando nuevos y pequeños restaurantes con mucha impronta instagramera. De hecho, ya creció tanto la zona que los precios de los alquileres comenzaron a volar y ya se está pensando en un nuevo barrio a atacar. ¿Será el momento de Villa Crespo?</p>
                <p>Volviendo a Chacarita, la vedette del momento, según el diario estadounidense, el barrio tiene muchas peculiaridades además de ser ideal para ser fotografiado en redes sociales. En el reporte se menciona: “Hay un café que también es un museo de fotografía y también funciona como club de jazz. Dos enormes locales de pizza, misteriosamente indistinguibles, ambos inaugurados en 1947, están uno al lado del otro cerca de una parada de metro y sirven rebanadas gruesas cubiertas con mozzarella y cebolla.</p>
                <img src={img3} alt="Imagen3" className="image3" />
                <figcaption>La mejor comida que tuvieron el autor y su sobrino fue en Lardito. (Foto: Sarah Pabst para The New York Times)</figcaption>
            </div>
        </article>



    )
}
export default Home;
