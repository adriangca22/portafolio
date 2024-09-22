import React, { useState, useEffect } from 'react';
import './swiper.css';
import 'tailwindcss/tailwind.css';

import image0 from "../../assets/img/reloj.png";
import image1 from "../../assets/img/nft.jpg";
import image2 from "../../assets/img/jero.png";
import image3 from "../../assets/img/eso.jpg";
import image4 from "../../assets/img/ram.jpg";
import image5 from "../../assets/img/roro.png";
import image6 from "../../assets/img/dog.png";
import image7 from "../../assets/img/pito.png";
import image8 from "../../assets/img/plane.jpg";
import image9 from "../../assets/img/Group2.png";
import image10 from "../../assets/img/Group4.png";
import image11 from "../../assets/img/group3.png";
import image12 from "../../assets/img/group7.png";
import image13 from "../../assets/img/Group6.png";
import image14 from "../../assets/img/pero.png";
import image15 from "../../assets/img/papu.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [delay, setDelay] = useState(4000);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    { image: image0, alt: 'background-image' },
    { image: image1, alt: 'background-image' },
    { image: image2, alt: 'background-image' },
    { image: image3, alt: 'background-image' },
    { image: image4, alt: 'background-image' },
    { image: image5, alt: 'background-image' },
    { image: image6, alt: 'background-image' },
    { image: image7, alt: 'background-image' },
    { image: image8, alt: 'background-image' },
    { image: image9, alt: 'background-image' },
    { image: image10, alt: 'background-image' },
    { image: image11, alt: 'background-image' },
    { image: image12, alt: 'background-image' },
    { image: image13, alt: 'background-image' },
    { image: image14, alt: 'background-image' },
    { image: image15, alt: 'background-image' },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      }, delay);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, delay, slides.length]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div 
              className={`carousel-item ${index === activeIndex ? 'active-slide' : ''}`} 
              key={index}
            >
              <img className="carousel-image" src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
        <button className="carousel-button carousel-button__left" onClick={handlePrev}>
          <img src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="left" />
        </button>
        <button className="carousel-button carousel-button__right" onClick={handleNext}>
          <img src="https://www.iconpacks.net/icons/2/free-arrow-right-icon-3098-thumb.png" alt="right" />
        </button>
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;