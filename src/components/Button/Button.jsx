import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 10px 30px;
`;

function Button({ title }) {
  return <ButtonStyle>{title}</ButtonStyle>;
}

export default Button;
