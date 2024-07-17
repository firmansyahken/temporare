import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardSituation from "../Card/CardSituation";

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
              <CardSituation
                key={index}
                status={d.status}
                total={d.total}
              />
            ))}
          </Data>
        </Container>
      </SituationContainer>
    </>
  );
};

export default Situation;
