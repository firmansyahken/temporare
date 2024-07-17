import React from 'react'
import styled from 'styled-components';

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

const CardSituation = (props) => {
    return (
        <>
            <Card>
                <h3>{props.status}</h3>
                <h1>{props.total}</h1>
            </Card>
        </>
    )
}

export default CardSituation