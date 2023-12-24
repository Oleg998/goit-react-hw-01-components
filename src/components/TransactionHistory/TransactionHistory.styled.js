import styled from '@emotion/styled';

export const Table = styled.table`
  width: 350px;
  margin: 25px auto;
  border-collapse: collapse;
  font-size: 18px;
  th {
    background-color: #00bcd5;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
  }
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
  }
  tr:nth-child(even) {
    background-color: #ffffff;
  }
  tr:hover {
    background-color: blueviolet;
  }
`;