import styled from '@emotion/styled';

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Conteiner = styled.section`
  width: 350px;
  margin: 0 auto;
  text-align: center;

  h2 {
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  ul {
    margin-bottom: 20px;
    display: flex;
  }
  `;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  background-color: ${randomColor};
`; 
