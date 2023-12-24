import styled from '@emotion/styled';



export const Conteiter = styled.div`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 350px;
  margin: 0 auto;
  padding-top: 25px;
  margin-bottom: 60px;
  div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  img {
    border-radius: 50%;
    width: 200px;
    background-color: white;
  }
  ul {
    display: flex;
    border-top: 1px solid #e7ebee;
    justify-content: space-around;
    background-color: #f2f6f9;
  }
  li {
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #e7ebee;
    flex-direction: column;
    width: 100%;
    flex-basis: calc(100% / 3);
  }
  li:last-child {
    border-right: none;
  }
`; 

export const Titel = styled.p`
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
`; 

export const Distription = styled.p`
  color: #a4a6a8;
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
`;
export const SpatItem = styled.span`
 font-weight:700;
 font-size:14px
 `;

 export const SpatTitel = styled.span`
   font-weight: 400;
   font-size: 14px;
   color: #979ca3;
 `;