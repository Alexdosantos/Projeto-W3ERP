import styled from "styled-components";

export const Container = styled.div`

  width: 22%;
  height: 32%;
  margin: 0 0 0 0;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--branco, #fff);
  /* Sombra 3 */
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
`;

export const Wapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const DivUser = styled.div`
  display: flex;
  gap: 5px;
`;
export const ImgUser = styled.img`
  padding: 20% 0 0 0;
`;

export const TitleUser = styled.h4`
  margin: 15% 0 0 0;
  color: #212121;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const TitleStatus = styled.p`
  color: #00c247;
  /* 14px Regular */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
`;
export const DivInformation = styled.div`
  
  margin: 5% 5% 0 5%;
`;


