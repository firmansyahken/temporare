import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardRegion from '../Card/CardRegion';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
`;

const GlobalHeader = styled.div`
  text-align: center;

  h1 {
    color: var(--primary-color);
  }

  p {
    color: var(--secondary-color);
  }
`;

const GlobalContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
`;

const GlobalRegion = () => {
    const API = "https://covid-fe-2023.vercel.app/api/global.json";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API).then(r => r.json())
            .then(response => setData(response.regions));
    }, []);

    return (
        <Wrapper>
            <GlobalHeader>
                <h1>Situation by Regions</h1>
                <p>Bacaan Pilihan Covid</p>
            </GlobalHeader>
            <GlobalContainer>
                {data.map((region, index) => (
                    <CardRegion
                      key={index}
                      name={region.name}
                      confirmed={region.numbers.confirmed}
                      recovered={region.numbers.recovered}
                      death={region.numbers.death}
                    />
                ))}
            </GlobalContainer>
        </Wrapper>
    );
};

export default GlobalRegion;
