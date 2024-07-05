import React, { useEffect, useState } from 'react';
import ConfirmedIcon from "../../assets/confirmed.svg";
import RecoveredIcon from "../../assets/recovered.svg";
import DeathIcon from "../../assets/death.svg";
import styled from 'styled-components';

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

const GlobalCard = styled.div`
  padding: 2rem;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: white;
  text-align: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardContent = styled.div`
    margin-top: 2rem;
`;

const CardInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  img {
    width: 40px;
  }

  div:nth-child(1) {
    text-align: left;

    p {
      color: var(--secondary-color);
    }
  }
`;

const Confirmed = styled.h4`
  color: var(--primary-color);
`;

const Recovered = styled.h4`
  color: var(--secondary-color);
`;

const Death = styled.h4`
  color: var(--danger-color);
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
                    <GlobalCard key={index}>
                        <h2>{region.name}</h2>
                        <CardContent>
                            <CardInformation>
                                <div>
                                    <p>Confirmed</p>
                                    <Confirmed>{region.numbers.confirmed}</Confirmed>
                                </div>
                                <div>
                                    <img src={ConfirmedIcon} alt="icon" />
                                </div>
                            </CardInformation>
                            <CardInformation>
                                <div>
                                    <p>Recovered</p>
                                    <Recovered>{region.numbers.recovered}</Recovered>
                                </div>
                                <div>
                                    <img src={RecoveredIcon} alt="icon" />
                                </div>
                            </CardInformation>
                            <CardInformation>
                                <div>
                                    <p>Death</p>
                                    <Death>{region.numbers.death}</Death>
                                </div>
                                <div>
                                    <img src={DeathIcon} alt="icon" />
                                </div>
                            </CardInformation>
                        </CardContent>
                    </GlobalCard>
                ))}
            </GlobalContainer>
        </Wrapper>
    );
};

export default GlobalRegion;
