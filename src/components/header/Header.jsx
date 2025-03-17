import React, { useState } from "react";

import "./Header.css";
import Navbar from "./Navbar"; // Asegúrate de que la ruta sea correcta
import ImageCarousel from "./ImageCarousel";
import Buttons from "../Buttons/Buttons";
import imgPerfil from "../../assets/img/mclovin4.jpg";
import certificateImg1 from "../../assets/img/certificate1.jpg";
import certificateImg2 from "../../assets/img/certificate2.jpg";
import image1 from "../../assets/img/oli.png";
import image2 from "../../assets/img/bili.jpg";
import image3 from "../../assets/img/pc.png";
import image4 from "../../assets/img/trello.png";
import image5 from "../../assets/img/emoji.png";
import image6 from "../../assets/img/music.png";
import image7 from "../../assets/img/html.png";
import image8 from "../../assets/img/css.png";
import image9 from "../../assets/img/js.jpg";
import image10 from "../../assets/img/framer.png";
import image11 from "../../assets/img/react.png";
import image12 from "../../assets/img/next.jpg";
import image13 from "../../assets/img/figma.png";
import image14 from "../../assets/img/shopi.png";
import image15 from "../../assets/img/merak.png";
import image16 from "../../assets/img/gamers.png";
import image17 from "../../assets/img/mine.png";
import image18 from "../../assets/img/gal.jpg";
import image19 from "../../assets/img/Word.png";
import image20 from "../../assets/img/ecom.png";
import image21 from "../../assets/img/resta.png";
import image22 from "../../assets/img/hogar.png";
import image23 from "../../assets/img/gafi.jpg";
import image24 from "../../assets/img/elementor.png";
import image25 from "../../assets/img/vite.png";
import image26 from "../../assets/img/firebase.png";
import image27 from "../../assets/img/html2.png";
import image28 from "../../assets/img/css2.png";
import image29 from "../../assets/img/js2.png";
import image30 from "../../assets/img/nextp.png";
import image31 from "../../assets/img/fig.png";



import portfolioImage from "../../assets/img/adri.png";



export default function Header() {
  const [toggleState, setToggleState] = useState(true);

  const change = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <Navbar />

      <div id="info" className="info-container">
        <div className="logo">
          <div
            className={`hover-show ${toggleState ? "active" : ""}`}
            onClick={change}
          >
            <span
              className="circle"
              style={{ backgroundImage: `url(${image7})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image8})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image9})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image10})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image11})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image12})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image13})` }}
            ></span>
            <span
              className="circle"
              style={{ backgroundImage: `url(${image14})` }}
            ></span>
          </div>
          <img src={imgPerfil} alt="imagen"  />

        </div>

        <div className="contain">
                     <div style={{ fontSize: '35px', fontFamily: 'Arial, sans-serif' }}>


  </div>
  <div id="abo" className="about-section">
  <h1  className="about-title">Acerca de mí</h1>
  <div className="about-content">
    <p>
      ¡Hola! Soy Adrian González, un apasionado del diseño UI/UX 
      y desarrollo web. Mi enfoque principal se centra en el frontend, donde me 
      especializo en la creación de experiencias digitales cautivadoras y funcionales.
    </p>
    <p>
      Desde el concepto hasta la implementación, utilizo una amplia 
      variedad de herramientas, desde Adobe hasta Figma, para dar vida a mis ideas. Además, me sumerjo en la codificación con HTML,
      CSS y JavaScript para asegurar que mis diseños se conviertan en sitios web interactivos y atractivos.
    </p>
  </div>

          </div>

          <Buttons />
    <span className="poder">
   
    </span>
        </div>

      </div>
      <div className="component-container">
      <h2 id="expe" className="component-title">
  Experiencia y Tecnologias{" "}
</h2>
<p className="component-description">
Me especializo en el diseño y desarrollo de interfaces de usuario intuitivas y atractivas para aplicaciones web y sitios en línea, optimizando código para lograr estructuras sólidas y estilos visuales impactantes. A lo largo de mi trayectoria, he trabajado en diversos proyectos utilizando tecnologías modernas para crear experiencias digitales dinámicas y de alto rendimiento.

Frameworks y herramientas de desarrollo web: HTML, CSS, JavaScript, React, Next.js, Vite, WordPress, Elementor, Framer, Figma, Shopify.
</p>

<div className="carousel-containerr">
  <div className="image-containerr">
    <div className="carousel-trackr">
      {/* Primera ronda de imágenes */}
      <div className="image-wrapper">
        <img src={image27} alt="Imagen 1" className="small-image" />
        <div className="image-text" data-text="HTML5"></div>
      </div>
      <div className="image-wrapper">
        <img src={image28} alt="Imagen 2" className="small-image" />
        <div className="image-text" data-text="CSS3"></div>
      </div>
      <div className="image-wrapper">
        <img src={image29} alt="Imagen 3" className="small-image" />
        <div className="image-text" data-text="Java.S"></div>
      </div>
      <div className="image-wrapper">
        <img src={image10} alt="Imagen 4" className="small-image" />
        <div className="image-text" data-text="Framer"></div>
      </div>
      <div className="image-wrapper">
        <img src={image11} alt="Imagen 5" className="small-image" />
        <div className="image-text" data-text="React"></div>
      </div>
      <div className="image-wrapper">
        <img src={image30} alt="Imagen 6" className="small-image" />
        <div className="image-text" data-text="Next.js"></div>
      </div>
      <div className="image-wrapper">
        <img src={image31} alt="Imagen 7" className="small-image" />
        <div className="image-text" data-text="Figma.js"></div>
      </div>
      <div className="image-wrapper">
        <img src={image24} alt="Imagen 8" className="small-image" />
        <div className="image-text" data-text="Elementor"></div>
      </div>
      <div className="image-wrapper">
        <img src={image14} alt="Imagen 9" className="small-image" />
        <div className="image-text" data-text="Shopify"></div>
      </div>
      <div className="image-wrapper">
        <img src={image26} alt="Imagen 10" className="small-image" />
        <div className="image-text" data-text="Firebase"></div>
      </div>
      <div className="image-wrapper">
        <img src={image19} alt="Imagen 11" className="small-image" />
        <div className="image-text" data-text="Wordpress"></div>
      </div>
      <div className="image-wrapper">
        <img src={image25} alt="Imagen 11" className="small-image" />
        <div className="image-text" data-text="Vite"></div>
      </div>
      {/* Segunda ronda de imágenes (Duplicadas para el bucle infinito) */}
      <div className="image-wrapper">
        <img src={image27} alt="Imagen 1" className="small-image" />
        <div className="image-text" data-text="HTML5"></div>
      </div>
      <div className="image-wrapper">
        <img src={image28} alt="Imagen 2" className="small-image" />
        <div className="image-text" data-text="CSS3"></div>
      </div>
      <div className="image-wrapper">
        <img src={image29} alt="Imagen 3" className="small-image" />
        <div className="image-text" data-text="Java.S"></div>
      </div>
      <div className="image-wrapper">
        <img src={image10} alt="Imagen 4" className="small-image" />
        <div className="image-text" data-text="Framer"></div>
      </div>
      <div className="image-wrapper">
        <img src={image11} alt="Imagen 5" className="small-image" />
        <div className="image-text" data-text="React"></div>
      </div>
      <div className="image-wrapper">
        <img src={image30} alt="Imagen 6" className="small-image" />
        <div className="image-text" data-text="Next.js"></div>
      </div>
      <div className="image-wrapper">
        <img src={image31} alt="Imagen 7" className="small-image" />
        <div className="image-text" data-text="Figma.js"></div>
      </div>
      <div className="image-wrapper">
        <img src={image24} alt="Imagen 8" className="small-image" />
        <div className="image-text" data-text="Elementor"></div>
      </div>
      <div className="image-wrapper">
        <img src={image14} alt="Imagen 9" className="small-image" />
        <div className="image-text" data-text="Shopify"></div>
      </div>
      <div className="image-wrapper">
        <img src={image26} alt="Imagen 10" className="small-image" />
        <div className="image-text" data-text="Firebase"></div>
      </div>
      <div className="image-wrapper">
        <img src={image19} alt="Imagen 11" className="small-image" />
        <div className="image-text" data-text="Wordpress"></div>
      </div>
      <div className="image-wrapper">
        <img src={image25} alt="Imagen 11" className="small-image" />
        <div className="image-text" data-text="Vite"></div>
      </div>
    </div>
  </div>
  </div></div>

      
      

  <div className="certificates">
  <h2 className="certificates-title">Certificados</h2>
  <p className="component-description">
    Estos son mis certificados otorgados por la academia FreeCodeCamp para el 
    diseño web responsivo y el manejo de datos y estructuras en JavaScript.
  </p>
  <div className="certificate-images">
    <div className="certificate-item">
      <img src={certificateImg1} alt="Certificado 1" />
    </div>
    <div className="certificate-item">
      <img src={certificateImg2} alt="Certificado 2" />
    </div>
  </div>
</div>



      
      <div>
        <h2 id="carro" className="gal-title pt-20">
          Diseños Ux/UI
        </h2>
      </div>
      <ImageCarousel />

      <div className="gallery">
        <h2 id="galeria" className="gal-tit">
          Mis proyectos Web
        </h2>
        <div className="gallery-images">
          <div className="gallery-item">
            <a
              href="https://e-commerce-kappa-olive.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image1} alt="Imagen 15" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo web ecommerce
              </h3>
              <p className="image-description">
                #html #Bootstrap #css #JavaScript
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://hogar-8bc1e.web.app/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image22} alt="Imagen 15" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo web remodelacion de hogares
              </h3>
              <p className="image-description">
                #html #Bootstrap #css #JavaScript
              </p>
            </div>
          </div>

          <div className="gallery-item">
            <a
              href="https://car-rebrand.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image2} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de app web de Transacción vehicular traspaso de vehículos{" "}
              </h3>
              <p className="image-description">#html #Sass #css #JavaScript #Vite #Firebase</p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://e-commerce-2-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image20} alt="Imagen 15" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo web ecommerce shop
              </h3>
              <p className="image-description">
                #html #Bootstrap #css #JavaScript
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://merak-us.web.app/#home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image15} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de pagina web landing page MerakUs{" "}
              </h3>
              <p className="image-description">
                #html #Bootstrap #Sass #css #JavaScript
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://travelsworld.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image16} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de pagina destinos de viajes.{" "}
              </h3>
              <p className="image-description">
                #html #Sass #Bootstrap #css #JavaScript
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://restaurante-e233b.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image17} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">modelo pagina de restaurante </h3>
              <p className="image-description">
                #html #Bootstrap #Sass #css #JavaScript
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://ux-ui-designer-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image18} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de pagina web informativa ux/ui{" "}
              </h3>
              <p className="image-description">
                #html #Sass #Bootstrap #css #JavaScript
              </p>
            </div>
          </div>

          <div className="gallery-item">
            <a
              href="https://gamers-bdcb9.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image3} alt="Imagen 3" />
            </a>
            <div className="image-info">
              <h3 className="image-title">modelo de pagina web setup gamers</h3>
              <p className="image-description">
                #html #Bootstrap #Sass #css #JavaScript
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://trello-app-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image4} alt="Imagen 4" />
            </a>
            <div className="image-info">
              <h3 className="image-title">aplicacion web clon de trello</h3>
              <p className="image-description">
                #React #next.js #css #Tailwind{" "}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://food-design-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image21} alt="Imagen 15" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
             aplicacion web para platillos
              </h3>
              <p className="image-description">
              #React #next.js #css #Tailwind #angular
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://finance-henna-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image23} alt="Imagen 15" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
             aplicacion web app de finanzas.
              </h3>
              <p className="image-description">
              #React #next.js #css #Tailwind #vite
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://emoji-app-coral.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image5} alt="Imagen 5" />
            </a>
            <div className="image-info">
              <h3 className="image-title">aplicacion web de emojis</h3>
              <p className="image-description">
                #React #next.js #css #Tailwind{" "}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <a
              href="https://music-prototype-dg21bz27x-adriangca22.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image6} alt="Imagen 6" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                aplicacion web reproductor de musica
              </h3>
              <p className="image-description">
                #React #next.js #css #Tailwind{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
