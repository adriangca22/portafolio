import React, { useState } from "react";
import "./Header.css";

import Buttons from "../Buttons/Buttons";
import imgPerfil from "../../assets/img/mclovin.jpg";
import certificateImg1 from "../../assets/img/certificate1.jpg";
import certificateImg2 from "../../assets/img/certificate2.jpg";
import image1 from "../../assets/img/casa.jpg";
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

export default function Header() {
  const [toggleState, setToggleState] = useState(true);

  const change = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <h1 className="title">Mi Portafolio Web</h1>
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
          <img src={imgPerfil} alt="imagen" />
        </div>

        <div id="about" className="contain">
          <h2 className="contain-title">
            <h1 className="titl">Acerca de mí:</h1>
          </h2>
          <div>
            <p>
              <span className="tit">Nombres: </span>Adrian Gonzalez
            </p>
            <p>
              <span className="tit">Carrera: </span>Informático
            </p>
            <p>
              <span className="tit">Profesión: </span>Programador y diseñador
              web.
            </p>
            <p className="dim">
              Diseñador UI/UX y Desarrollador web enfocado en el área de
              front-end utilizando herramientas de edición de código web como
              HTML, CSS, Figma, JavaScript, y frameworks como React Native y
              Next.js.
            </p>
          </div>

          <Buttons />
        </div>
      </div>
      <div className="component-container">
        <h2 className="component-title">experiencia y tecnologias </h2>
        <p className="component-description">
          Soy un diseñador web con tres años de experiencia en el campo del
          diseño UI/UX. Me especializo en el diseño de interfaces de usuario
          intuitivas y atractivas para aplicaciones web y sitios web. Mi enfoque
          principal se centra en la edición de código HTML y CSS para lograr una
          estructura sólida y estilos visuales impactantes.A lo largo de mi
          carrera, he trabajado en diversos proyectos en los que he utilizado
          JavaScript como lenguaje principal, especialmente con los frameworks
          React y Next.js. Estas herramientas me han permitido crear
          aplicaciones web dinámicas y de alto rendimiento, brindando a los
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
        </div>
      </div>

      <div className="certificates">
        <h2 className="certificates-title">Certificados</h2>
        <div className="certificate-images">
          <img src={certificateImg1} alt="Certificado 1" />
          <img src={certificateImg2} alt="Certificado 2" />
        </div>
      </div>
      <div className="gallery">
        <h2 className="gallery-title">Mis proyectos</h2>
        <div className="gallery-images">
          <div className="gallery-item">
            <a
              href="https://hogar-8bc1e.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image1} alt="Imagen 1" />
            </a>
            <div className="image-info">
              <h3 className="image-title">
                modelo de pagina web de inmobiliaria
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
