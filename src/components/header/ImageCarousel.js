import React, { useState, useRef } from 'react';
import image0 from "../../assets/img/reloj.png";
import image1 from "../../assets/img/nft.jpg";
import image2 from "../../assets/img/jopx.png";
import image3 from "../../assets/img/jero.png";
import image4 from "../../assets/img/aka.png";
import image5 from "../../assets/img/roro.png";
import image6 from "../../assets/img/dog.png";
import image7 from "../../assets/img/pito.png";
import image8 from "../../assets/img/tope.png";
import image9 from "../../assets/img/Group2.png";
import image10 from "../../assets/img/Group4.png";
import image11 from "../../assets/img/group3.png";
import image12 from "../../assets/img/group7.png";
import image13 from "../../assets/img/Group6.png";
import image14 from "../../assets/img/pero.png";

import './swiper.css'; // Importa tu archivo CSS
import 'tailwindcss/tailwind.css';

const ImageCarousel = () => {
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Desplaza hacia abajo para mostrar la siguiente imagen
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.deltaY < 0) {
      // Desplaza hacia arriba para mostrar la imagen anterior
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  return (
    <div className="relative image-carousel-container sm:w-full" onWheel={handleScroll} ref={containerRef}>
      <div className="image-carousel-content">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto sm:h-80 sm:w-auto object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;