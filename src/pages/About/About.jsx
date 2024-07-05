import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 70vh;
    width: 80%;
    text-align: center;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const About = () => {
  return (
    <>
        <Container>
            <h1>This About Page is Dedicated For You.
            Create page as your wish.</h1>
        </Container>
    </>
  )
}

export default About