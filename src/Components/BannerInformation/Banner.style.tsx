import styled from "styled-components";
import ImgMachground from "../../assets/ImgBackground/fundo.png";

export const DivInformation = styled.div`
  width: 91%;
  height: 152px;
  margin: 5% 0 0 3%;
  flex-shrink: 0;
  border-radius: 24px;
  background: url(${ImgMachground}), lightgray 50% / cover no-repeat;
  background-color: #001c98;
`;
export const TitleCompany = styled.h4`
  padding: 3% 0 0 4%;
  color: #fff;

  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export const DivContact = styled.div`
  display: flex;
  gap: 2%;
  padding: 0 0 2% 4%;
`;
export const DivPhone = styled.div`
  display: flex;
 
`;
export const DivEmail = styled.div`
  display: flex;
`;
export const TextPhone = styled.p`
  color: #fff;
  

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const TextEmail = styled.p`
  color: #fff;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
