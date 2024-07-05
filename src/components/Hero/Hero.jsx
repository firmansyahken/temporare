import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import HeroImage from "../../assets/hero.svg";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  min-height: 90vh;
  column-gap: 40px;
  padding: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: row;
  }
`;

const HeroContent = styled.div`
  @media (max-width: 768px) {
    grid-row-start: 2;
  }
`;

const ContentHead = styled.div`
  margin-bottom: 40px;

  h1 {
    color: var(--primary-color);
  }

  p {
    color: var(--secondary-color);
  }
`;

const ContentBody = styled.div`
  p {
    color: var(--gray-color);
    margin-bottom: 40px;
  }
`;

const HeroImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const Hero = () => {
  return (
    <>
      <Wrapper>

        <HeroContainer>
          <HeroContent>
            <ContentHead>
              <h1>Covid ID</h1>
              <p>Monitoring Perkembangan Covid</p>
            </ContentHead>
            <ContentBody>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since.
              </p>
              <Button title="Vaccine" />
            </ContentBody>
          </HeroContent>
          <HeroImageContainer>
            <img src={HeroImage} alt="hero_image" />
          </HeroImageContainer>
        </HeroContainer>
      </Wrapper>
    </>
  );
};

export default Hero;
