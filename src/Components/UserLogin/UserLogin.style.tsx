import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 23px;
  box-sizing: content-box;
  margin: auto;
  margin-top: 100px;
  margin-right: 100px;

`;

export const TitleUser = styled.h4`
  color: #212121;
  font-size: 20px;
  font-family: Sora, sans-serif;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.2px;
`;

export const TitleEmail = styled.p`
  color: #757575;
  font-size: 14px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
`;

export const BtnDropdown = styled.button`
  background: transparent;
  border: none;
  margin-top: 15px;
  cursor: pointer;
`;
