import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleH1 = styled.h4`
  margin-left: 5%;
  color: #212121;

  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const Wapper = styled.div`
  display: flex;
  gap: 1%;
  padding: 4% 0 0 0;
`;
export const DivTable = styled.div`
  margin: 3% 2% 0 5%;
`;

export const LinkProdutos = styled(Link)`
  color: #212121;
  text-decoration: none;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
`;
