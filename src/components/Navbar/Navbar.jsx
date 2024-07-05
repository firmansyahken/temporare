import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  position: sticky;
  top: 0;
  z-index: 99;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Brand = styled.div`
  color: white;
`;

const Links = styled.ul`
  display: flex;
  column-gap: 40px;

  a {
    color: white;
  }
`;

const MobileNavbar = styled.div`
  position: sticky;
  top: 0;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: var(--primary-color);
  display: none;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  h4 {
    color: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 8px;
  cursor: pointer;

  div {
    width: 35px;
    height: 4px;
    background-color: white;
    transition: all 0.3s ease;
  }

  &.active div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 12px);
  }

  &.active div:nth-child(2) {
    opacity: 0;
  }

  &.active div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -12px);
  }
`;

const Menu = styled.div`
  position: fixed;
  top: -100%;
  width: 100%;
  display: none;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 50px;
  background-color: var(--primary-color);
  padding: 1.5rem;
  box-sizing: border-box;
  transition: ease-out 0.3s;
  z-index: 90;

  &.active {
    top: 10%;
  }

  a {
    color: white;
  }

  @media (max-width: 768px) {
    display: grid;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState(false);
  const links = [
    {
      name: "Global",
      path: "/"
    },
    {
      name: "Indonesia",
      path: "/indonesia"
    },
    {
      name: "Provinsi",
      path: "/provinsi"
    },
    {
      name: "About",
      path: "/about"
    },
  ];

  return (
    <>
      <NavbarContainer>
        <Container>
          <Brand>
            <h2>Covid ID</h2>
          </Brand>
          <Links>
            {links.map((link, index) => (
              <Link key={index} to={link.path}>{link.name}</Link>
            ))}
          </Links>
        </Container>
      </NavbarContainer>
      <MobileNavbar>
        <h4>Covid ID</h4>
        <Hamburger
          onClick={() => setActive(!active)}
          className={active ? "active" : ""}
        >
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </MobileNavbar>
      <Menu className={active ? "active" : ""}>
        {links.map((link, index) => (
          <Link key={index} to={link.path}>{link.name}</Link>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
