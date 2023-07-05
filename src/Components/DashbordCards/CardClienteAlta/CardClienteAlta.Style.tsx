import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 124px;

  border-radius: 24px;
  background: #02156a;

  @media (min-width: 2000px) {
    width: 10vw;
    height: 13vh;
    margin: -90px 0 0 80px;
    border-radius: 36px;
  }

  @media (max-width: 3000px) {
    width: 15vw;
    height: 12vh;

    border-radius: 20px;
    margin: -70px 0 0 40px;
  }
`;
export const Wapper = styled.div`
  display: flex;
`;
export const TextP = styled.p`
  display: flex;
  gap: 5px;
  margin: 29px 0 0 0;


  color: #c5cfff;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;

  letter-spacing: 0.2px;
`;
export const DivNumber = styled.div`
  display: flex;
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
  background: #00c247;
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
