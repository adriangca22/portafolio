import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Narbar.elements";
import {
  FaDesktop ,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import portfolioImage from "../../assets/img/adri.png";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
        
      
       
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
  <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
  <div style={{ fontSize: '15px', fontFamily: 'Arial, sans-serif', textShadow: '0 2px 4px rgba(3, 177, 230, 0.6)' }}>
  {/* Utiliza la imagen en lugar del texto */}
  <img src={portfolioImage} alt="Portafolio" style={{ width: '50px', height: '40px', marginBottom: '14px' }} />
</div>

  </MenuItemLink>
</MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}href='#abo'>
                <div >
                  <FaHome />
                  Inicio
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}href='#expe'>
                <div >
                  <FaUserAlt />
                  Experiencia
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}href="#galeria">
                <div>
                  <FaBriefcase />
                  Proyectos web
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}href="#carro">
                <div>
                <FaDesktop />
                  Diseños Ux/UI
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}href="#footer">
                <div>
                  <FaGlasses />
                  Contactame
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
