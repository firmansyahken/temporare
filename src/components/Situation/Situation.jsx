import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SituationContainer = styled.div`
  background-color: #F8F9FA;
  padding: 2rem;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`;

const Head = styled.div`
  text-align: center;

  h1 {
    color: var(--primary-color);
  }

  p {
    color: var(--secondary-color);
  }
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  column-gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`;

const Card = styled.div`
  padding: 4rem 2.5rem;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: white;
  text-align: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &:nth-child(1) h1 {
    color: var(--primary-color);
  }

  &:nth-child(2) h1 {
    color: var(--secondary-color);
  }

  &:nth-child(3) h1 {
    color: var(--danger-color);
  }
`;

const Situation = (props) => {
  const APIS = {
    Global: "https://covid-fe-2023.vercel.app/api/global.json",
    Indonesia: "https://covid-fe-2023.vercel.app/api/indonesia.json"
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(APIS[props.category]).then(r => r.json())
      .then((response) => {
        if (props.category === "Global") {
          return setData(response.global)
        }
        return setData(response.indonesia)
      })
  }, [props.category])


  return (
    <>
      <SituationContainer>
        <Container>
          <Head>
            <h1>{props.category} Situation</h1>
            <p>Data Covid Berdasarkan {props.category}</p>
          </Head>
          <Data>
            {data.map((d, index) => (
              <Card key={index}>
                <h3>{d.status}</h3>
                <h1>{d.total}</h1>
              </Card>
            ))}
          </Data>
        </Container>
      </SituationContainer>
    </>
  );
};

export default Situation;
