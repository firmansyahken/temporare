import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`
const ProvinceContainer = styled.div`
  padding: 4rem 0;
`;

const ProvinceHead = styled.div`
  text-align: center;

  h1 {
    color: var(--primary-color);
  }

  p {
    color: var(--secondary-color);
  }
`;

const ProvinceTable = styled.div`
  margin-top: 50px;
  overflow-x: auto;

  table, td, th {
    border: 1px solid black;
    text-align: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    color: var(--primary-color);
    border-color: black;
  }
`;


const ProvinceRegion = () => {
  const API = "https://covid-fe-2023.vercel.app/api/indonesia.json"
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API).then(r => r.json())
      .then((response) => {
        return setData(response.regions)
      })
  }, [])

  return (
    <>
      <Wrapper>
        <ProvinceContainer>
          <ProvinceHead>
            <h1>Situation by Provinces</h1>
            <p>Data Covid Berdasarkan Provinsi</p>
          </ProvinceHead>
          <ProvinceTable>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provinsi</th>
                  <th>Positif</th>
                  <th>Sembuh</th>
                  <th>Dirawat</th>
                  <th>Meninggal</th>
                </tr>
              </thead>
              <tbody>
                {data.map((region, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{region.name}</td>
                    <td>{region.numbers.confirmed}</td>
                    <td>{region.numbers.recovered}</td>
                    <td>{region.numbers.treatment}</td>
                    <td>{region.numbers.death}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ProvinceTable>
        </ProvinceContainer>
      </Wrapper>
    </>
  );
};

export default ProvinceRegion;
