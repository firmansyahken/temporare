import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.div`
  margin-top: 50px;
  background-color: var(--primary-color);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    row-gap: 40px;
  }
`;

const Author = styled.div`
  color: white;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;

  a {
    color: white;
  }
`;

const Footer = () => {
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
  ]
  return (
    <FooterContainer>
      <Container>
        <Author>
          <h3>Covid ID</h3>
          <p>Developed by aufaroot18</p>
        </Author>
        <Links>
          {links.map((link, index) => (
            <Link key={index} to={link.path}>{link.name}</Link>
          ))}
        </Links>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
