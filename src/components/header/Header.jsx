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
import image10 from "../../assets/img/figma.png";
import image11 from "../../assets/img/react.png";
import image12 from "../../assets/img/next.jpg";
import image13 from "../../assets/img/tail.jpg";
import image14 from "../../assets/img/redux.jpg";
import image15 from "../../assets/img/merak.png";
import image16 from "../../assets/img/gamers.png";
import image17 from "../../assets/img/mine.png";
import image18 from "../../assets/img/gal.jpg";
import image19 from "../../assets/img/Word.png";

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
  <div className="about-section">
  <h1 className="about-title">Acerca de mí</h1>
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
  experiencia y tecnologias{" "}
</h2>
<p className="component-description">
  Me especializo en el diseño de interfaces de usuario intuitivas y atractivas para aplicaciones web y sitios web. Mi enfoque
  principal se centra en la edición de código HTML y CSS para lograr una estructura sólida y estilos visuales impactantes. A lo largo de mi
  carrera, he trabajado en diversos proyectos en los que he utilizado JavaScript como lenguaje principal, especialmente con los frameworks
  React y Next.js. Estas herramientas me han permitido crear aplicaciones web dinámicas y de alto rendimiento, brindando a los
  usuarios una experiencia interactiva y fluida.
</p>

        <div className="image-container">
          <div className="image-wrapper">
            <img src={image7} alt="Imagen 1" className="small-image" />
            <div className="image-text" data-text="HTML5"></div>
          </div>
          <div className="image-wrapper">
            <img src={image8} alt="Imagen 2" className="small-image" />

            <div className="image-text" data-text="CSS3"></div>
          </div>
          <div className="image-wrapper">
            <img src={image9} alt="Imagen 3" className="small-image" />

            <div className="image-text" data-text="Java.S"></div>
          </div>
          
          <div className="image-wrapper">
            <img src={image10} alt="Imagen 4" className="small-image" />

            <div className="image-text" data-text="Figma"></div>
          </div>
          <div className="image-wrapper">
            <img src={image11} alt="Imagen 5" className="small-image" />

            <div className="image-text" data-text="React"></div>
          </div>
          <div className="image-wrapper">
            <img src={image12} alt="Imagen 6" className="small-image" />

            <div className="image-text" data-text="Next.js"></div>
          </div>
          <div className="image-wrapper">
            <img src={image13} alt="Imagen 7" className="small-image" />

            <div className="image-text" data-text="Tailwind"></div>
          </div>
          <div className="image-wrapper">
            <img src={image14} alt="Imagen 8" className="small-image" />

            <div className="image-text" data-text="Redux"></div>
          </div>
          <div className="image-wrapper">
            <img src={image19} alt="Imagen 19" className="small-image" />

            <div className="image-text" data-text="Wordpress"></div>
          </div>
          
        </div>
      </div>
      
      

      <div className="certificates">
        <h2 className="certificates-title">Certificados</h2>
            <p className="component-description">
        estos son mis certificados otorgados por la academia freecodecamp para el  diseño web responsivo y 
          el manejo de datos y estructuras en javascript.
        </p>
        <div className="certificate-images">
          <img src={certificateImg1} alt="Certificado 1" />
          <img src={certificateImg2} alt="Certificado 2" />
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
              href="https://music-web-93fd8.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image2} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de pagina web galería de musica{" "}
              </h3>
              <p className="image-description">#html #Sass #css #JavaScript</p>
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
              href="https://gamersz-efeed.web.app/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image16} alt="Imagen 2" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de pagina web Blog de juegos.{" "}
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
