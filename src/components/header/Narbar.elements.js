import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background: linear-gradient(to right, #333333, #000000);
  border-radius: 30px;
  opacity: 0.8;
  box-shadow: 0 8px 9px rgba(0, 0, 0, 0.8); 
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1900px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  color: #fff;

  p {
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e07924;
    }
  }

  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background: linear-gradient(to right, #333333, #000000);
    position: absolute;
    top: 70px;
    left: ${(props) => (props.open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  &:hover {
    transform: scale(1.2); // Aumentar el tamaño al pasar el cursor
    transition: transform 0.6s;
    filter: brightness(1.5); // Agregar un efecto de brillo al hacer hover
   
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #64b2ff;
  font-family: "Arial", sans-serif;
  font-size: 0.9rem;
  font-weight: semibold;
  cursor: pointer;
  transition: 0.5s all ease;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #0074cc;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
};

export const MobileIcon = styled.div`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #0074cc;
      margin-right: 0.5rem;
    }
  }
`;
