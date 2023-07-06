import styled from "styled-components";

export const Container = styled.div`
  width: 650%;
  height: 124px;
  margin-left: 15px;

  border-radius: 24px;
  background: #02156a;
  margin: -70px 40px 0 40px;
  padding: 1px;

  
  /* @media (max-width: 3000px) {
    width: 16vw;
    height: 12vh;

    border-radius: 20px;
    margin: -70px 40px 0 40px;
  } */
`;
export const Wapper = styled.div`
  display: flex;
`;
export const DivGraphics = styled.div`
  margin-top:15px;
`
export const Container1 = styled.div`
 display: flex;
 flex-direction: column;
 gap:5px;
`
export const TextP = styled.p`
display: flex;

margin: 20px 0  0 0;

  color: #c5cfff;
  font-size: 13px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;

  letter-spacing: 0.2px;
`;
export const DivNumber = styled.div`
  display: flex;
  gap: 15px;
`;
export const Number = styled.h4`
  color: #fff;

  font-size: 25px;
  font-family: Sora;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export const Porcentagem = styled.div`
  width: 5vw;
  height: 3vh;
 
  align-items: flex-start;
  gap: 10px;
  border-radius: 90px;
  background: #F33
`;

export const TextPorcentagem = styled.p`
  color: #fff;
  text-align: center;

  font-size: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
`;
