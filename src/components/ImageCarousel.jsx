import React, { useState, useRef } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef(null);

  // Función para mover el carrusel hacia la izquierda
  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Función para mover el carrusel hacia la derecha
  const moveRight = () => {
    const totalImages = carouselTrackRef.current.children.length;
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={moveLeft} className="carousel-button left">
        &#10094; {/* Flecha izquierda */}
      </button>
      <div className="image-container">
        <div
          className="carousel-track"
          ref={carouselTrackRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Mover el carrusel
            transition: "transform 0.5s ease",
          }}
        >
          {images.map((image, index) => (
            <div className="image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="small-image" />
              <div className="image-text" data-text={image.text}></div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={moveRight} className="carousel-button right">
        &#10095; {/* Flecha derecha */}
      </button>
    </div>
  );
};

export default ImageCarousel;