import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import FormImage from "../../assets/form.svg";
import data from "../../utils/constants/provinces";
import FormContext from "../../utils/context/FormContext";

const FormContainer = styled.div`
  background-color: #F8F9FA;
  padding: 4rem 1.5rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
  }
`;

const FormImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const FormContent = styled.form`
  width: 100%;

  h1 {
    color: var(--primary-color);
    margin-bottom: 20px;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  margin-bottom: 15px;

  input,
  select {
    border: none;
    outline: none;
    background-color: white;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    padding: 0.2em 1rem;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: var(--body-size);
`

const FormCovid = () => {
  const { updateData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    provinsi: "0",
    status: "kasus",
    total: ""
  });

  const [validation, setValidation] = useState(null); 

  const handleInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if(formData.total == '') {
      return setValidation("Isi Data Terlebih Dahulu")
    }

    updateData(formData);
    e.target.reset();
    setFormData({ provinsi: "0", status: "kasus", total: "" });
    setValidation(null);
  };

  const statuses = [
    {
      name: "Positif",
      key: "kasus"
    },
    {
      name: "Sembuh",
      key: "sembuh"
    },
    {
      name: "Dirawat",
      key: "dirawat"
    },
    {
      name: "Meninggal",
      key: "meninggal"
    }
  ];

  return (
    <>
      <FormContainer>
        <Wrapper>
          <FormImageContainer>
            <img src={FormImage} alt="form_illustration" />
          </FormImageContainer>
          <FormContent onSubmit={handleSubmit} method="post">
            <h1>Form Covid</h1>
            <FormInput>
              <label>Provinsi</label>
              <select name="provinsi" onChange={handleInput}>
                {data.provinces.map((province, index) => (
                  <option key={index} value={index}>{province.kota}</option>
                ))}
              </select>
            </FormInput>
            <FormInput>
              <label>Status</label>
              <select name="status" onChange={handleInput}>
                {statuses.map((status, index) => (
                  <option key={index} value={status.key}>{status.name}</option>
                ))}
              </select>
            </FormInput>
            <FormInput>
              <label>Jumlah</label>
              <input onChange={handleInput} name="total" type="number" />
              {validation && <ErrorMessage>{validation}</ErrorMessage>}
            </FormInput>
            <FormInput>
              <Button title="Submit" />
            </FormInput>
          </FormContent>
        </Wrapper>
      </FormContainer>
    </>
  );
};

export default FormCovid;
