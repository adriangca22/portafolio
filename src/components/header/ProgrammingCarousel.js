"use client"

import { useState, useEffect } from "react"
import styles from "./portfolio.module.css" // Importa el archivo CSS como módulo
import image1 from "../../assets/img/porta.png"
import image2 from "../../assets/img/peli.png"
import { FaCode, FaReact, FaNodeJs, FaFigma, FaWordpress, FaPaintBrush } from "react-icons/fa" // Iconos de programación y diseño

const CoverCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [titleText, setTitleText] = useState("")
  const [descriptionText, setDescriptionText] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [descriptionIndex, setDescriptionIndex] = useState(0)

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
    }, 8000) // Cambia de imagen cada 6 segundos

    return () => clearInterval(interval) // Limpia el intervalo al desmontar el componente
  }, [images.length])

  useEffect(() => {
    const currentImage = images[currentIndex]
    const title = currentImage.title
    const description = currentImage.description

    // Efecto de escritura para el título
    if (titleIndex < title.length) {
      const timeout = setTimeout(() => {
        setTitleText((prev) => prev + title[titleIndex])
        setTitleIndex((prev) => prev + 1)
      }, 100) // Velocidad de escritura del título

      return () => clearTimeout(timeout)
    }

    // Efecto de escritura para la descripción
    if (titleIndex === title.length && descriptionIndex < description.length) {
      const timeout = setTimeout(() => {
        setDescriptionText((prev) => prev + description[descriptionIndex])
        setDescriptionIndex((prev) => prev + 1)
      }, 50) // Velocidad de escritura de la descripción

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, titleIndex, descriptionIndex, images])

  // Reiniciar el efecto de escritura cuando cambia la imagen
  useEffect(() => {
    setTitleText("")
    setDescriptionText("")
    setTitleIndex(0)
    setDescriptionIndex(0)
  }, [currentIndex])

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
              <h2 className={styles.title}>{titleText}</h2>
              <p className={styles.description}>{descriptionText}</p>
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