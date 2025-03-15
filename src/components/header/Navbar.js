import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaDesktop,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";
import './Navbar.css';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <IconContext.Provider value={{ style: { fontSize: "1.5rem", color: "#fff" } }}>
        <div className="mobile-icon" onClick={toggleMobileMenu}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>

        {/* Redes sociales en el header */}
        <div className="social-icons flex gap-4">
          
  <a href="https://instagram.com/adrian_designerr33?igshid=MmJiY2I4NDBkZg==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="social-icon text-white w-4 h-4" />
  </a>
  <a href="https://github.com/adriangca22" target="_blank" rel="noopener noreferrer">
    <FaGithub className="social-icon text-white w-4 h-4" />
  </a>
  <a href="https://www.linkedin.com/in/adrian-gonzalez-6257aa204" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="social-icon text-white w-4 h-4" />
  </a>
  <a href="https://api.whatsapp.com/send/?phone=%2B5804249070139&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="social-icon text-white w-4 h-4" />
  </a>
</div>

        <ul className={`navbar-list ${showMobileMenu ? 'open' : ''}`}>
          <li className="navbar-item" style={{ "--item-index": 0 }}>
            <a href="#abo" onClick={toggleMobileMenu}>
              <FaHome className="icon-mobile" />
              <span>Inicio</span>
            </a>
          </li>
          <li className="navbar-item" style={{ "--item-index": 1 }}>
            <a href="#expe" onClick={toggleMobileMenu}>
              <FaUserAlt className="icon-mobile" />
              <span>Experiencia</span>
            </a>
          </li>
          <li className="navbar-item" style={{ "--item-index": 2 }}>
            <a href="#galeria" onClick={toggleMobileMenu}>
              <FaBriefcase className="icon-mobile" />
              <span>Proyectos web</span>
            </a>
          </li>
          <li className="navbar-item" style={{ "--item-index": 3 }}>
            <a href="#carro" onClick={toggleMobileMenu}>
              <FaDesktop className="icon-mobile" />
              <span>Diseños Ux/UI</span>
            </a>
          </li>
          <li className="navbar-item" style={{ "--item-index": 4 }}>
            <a href="#footer" onClick={toggleMobileMenu}>
              <FiMail className="icon-mobile" />
              <span>Contáctame</span>
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
};

export default Navbar;
