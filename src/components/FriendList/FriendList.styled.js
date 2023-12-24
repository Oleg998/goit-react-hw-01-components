import styled from '@emotion/styled';

const setColor = (props) => {
switch (props.event) {
case `true`:
    return 'green';
  default:
    return 'red   ';
}
 };

export const Conteiner = styled.ul`

  width: 350px;
  margin-top: 60px;
  margin: 0 auto;
  display: flex;
  gap: 10px;;
  flex-direction: column;
`;
export const FreandList = styled.li`
  display: flex;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 5px 5px 5px 10px;
  background-color: white;
  align-items: center;
  img {
    background-color: aliceblue;
    border-radius: 10px;
  }
  p {
    font-weight: 600;
  }
`;

export const Chip = styled.span`
 
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${setColor};
    border-radius: 50%;
    margin-right: 10px;
  
`

