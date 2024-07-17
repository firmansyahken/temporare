import React from 'react'
import styled from 'styled-components';
import ConfirmedIcon from "../../assets/confirmed.svg";
import RecoveredIcon from "../../assets/recovered.svg";
import DeathIcon from "../../assets/death.svg";

const CardContainer = styled.div`
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

const CardRegion = (props) => {
    return (
        <>
            <CardContainer>
                <h2>{props.name}</h2>
                <CardContent>
                    <CardInformation>
                        <div>
                            <p>Confirmed</p>
                            <Confirmed>{props.confirmed}</Confirmed>
                        </div>
                        <div>
                            <img src={ConfirmedIcon} alt="icon" />
                        </div>
                    </CardInformation>
                    <CardInformation>
                        <div>
                            <p>Recovered</p>
                            <Recovered>{props.recovered}</Recovered>
                        </div>
                        <div>
                            <img src={RecoveredIcon} alt="icon" />
                        </div>
                    </CardInformation>
                    <CardInformation>
                        <div>
                            <p>Death</p>
                            <Death>{props.death}</Death>
                        </div>
                        <div>
                            <img src={DeathIcon} alt="icon" />
                        </div>
                    </CardInformation>
                </CardContent>
            </CardContainer>
        </>
    )
}

export default CardRegion