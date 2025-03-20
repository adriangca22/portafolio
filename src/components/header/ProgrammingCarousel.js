"use client"

import { useState, useEffect } from "react"
import styles from "./portfolio.module.css" // Importa el archivo CSS como módulo
import image1 from "../../assets/img/porta.png"
import image2 from "../../assets/img/peli.png"
import { FaCode, FaReact, FaNodeJs, FaFigma, FaWordpress, FaPaintBrush } from "react-icons/fa" // Iconos de programación y diseño

const CoverCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    {
      src: image1,
      title: "¡Hola! Soy Adrian González",
      description: "Ingeniero Informático, Innovador en Desarrollo de Software.",
      icons: [<FaCode key="code" />, <FaReact key="react" />, <FaNodeJs key="node" />],
    },
    {
      src: image2,
      title: "UX/UI y Website Builders",
      description: "Diseño de interfaces y desarrollo en plataformas como WordPress y Shopify.",
      icons: [<FaFigma key="figma" />, <FaWordpress key="wordpress" />, <FaPaintBrush key="design" />],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000) // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
  }, [images.length])

  return (
    <div className={styles.carouselContainer}>
      {/* Elementos para el efecto de monitor */}
      <div className={styles.monitorGlow}></div>
      <div className={styles.monitorBase}></div>
      <div className={styles.monitorNeck}></div>
      <div className={styles.powerIndicator}></div>
      <div className={styles.glowingBorder}></div>
      <div className={styles.scanlines}></div>

      <div className={styles.carouselTrack}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
            style={{
              transform:
                index === currentIndex
                  ? "translateX(0)"
                  : index < currentIndex
                    ? "translateX(-100%)"
                    : "translateX(100%)",
            }}
          >
            <img src={image.src || "/placeholder.svg"} alt={`slide-${index}`} className={styles.carouselImage} />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{image.title}</h2>
              <p className={styles.description}>{image.description}</p>
              <div className={styles.iconsContainer}>
                {image.icons.map((icon, i) => (
                  <span key={i} className={styles.icon}>
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default CoverCarousel

