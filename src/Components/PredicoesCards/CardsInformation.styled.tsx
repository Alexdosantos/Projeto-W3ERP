import styled from "styled-components";

export const Container = styled.div`
  width: 22%;
  height: 42%;
  margin: 2% 0 0 0;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--branco, #fff);

  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
`;

export const Wapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const DivUser = styled.div`
  display: flex;
  gap: 15px;
`;
export const ImgUser = styled.img`
  padding: 40% 0 0 5%;
`;

export const TitleUser = styled.h4`
  margin: 12% 0 0 0;
  color: #212121;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const TitleStatus = styled.p`
  color: #00c247;

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

export const Imgright = styled.img`
  margin: 100% 0 0 0;
`;
