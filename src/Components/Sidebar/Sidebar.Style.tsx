import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardBoxGeneral = styled.div`
  height: 1200%;
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #001c98;
`;

export const Logo = styled.img`
  padding: 50px 0px 0px 10px;
`;
export const DivGeneralIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-left: 8px;
  margin: 110px 0px 0px 0px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const BtnDashbord = styled.button`
  display: flex;
  gap: 30px;
  align-items: center;

  width: 255px;
  height: 56px;
  padding-left: 20px;
  flex-shrink: 0;
  border-radius: 8px;

  background: transparent;
  border: none;
  color: white;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  cursor: pointer;

  &:hover {
    background: #7682c1;
    transition: 0.3s;
  }
`;

export const BtnPredicoes = styled.button`
  display: flex;
  gap: 30px;
  align-items: center;

  width: 255px;
  height: 56px;
  padding-left: 20px;
  flex-shrink: 0;
  border-radius: 8px;

  background: transparent;
  border: none;
  color: white;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;

  cursor: pointer;

  &:hover {
    background: #7682c1;
    transition: 0.3s;
  }
`;

export const BtnProdutos = styled.button`
  display: flex;
  gap: 30px;
  align-items: center;

  width: 255px;
  height: 56px;
  padding-left: 20px;
  flex-shrink: 0;
  border-radius: 8px;

  background: transparent;
  border: none;
  color: white;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;

  cursor: pointer;

  &:hover {
    background: #7682c1;
    transition: 0.3s;
  }
`;

export const DivSupport = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 223px;

  margin: 240px 0 0 0;
  background: #796ce0;
  border-radius: 24px;
`;

export const ImgSupport = styled.img`
  position: absolute;
  bottom: 110px;
`;

export const TextInformation = styled.h3`
  margin: 49px 0px 25px 0px;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
`;

export const BtnContact = styled.button`
  width: 191px;
  height: 49px;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: #001c98;
  color: #fff;
  border: none;

  font-size: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;

  cursor: pointer;

  &:hover {
    background: #1b309b;
    transition: 0.3s;
  }
`;
