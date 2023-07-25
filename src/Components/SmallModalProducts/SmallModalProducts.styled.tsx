import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 9%;
  left: 50%;
  width: 15%;
  height: 30%;

  background-color: #fff;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  border-radius: 16px;

  z-index: 1;
`;
export const TextFilter = styled.h4`
  padding: 7% 0 0 5%;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  color: #212121;
`;
export const Division = styled.div`
  width: 90%;
  height: 0.4%;
  margin: 2% 0 0 5%;
  background: var(--cinza-300, #e0e0e0);
`;

export const TextStatus = styled.h4`
  padding: 4% 0 0 5%;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  color: #212121;
`;
export const DivCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 5% 0 0 5%;
`;

export const DivTotal = styled.div`
  display: flex;
  gap: 3%;
`;
export const DivEmAlta = styled.div`
  display: flex;
  gap: 3%;
`;
export const DivEmBaixa = styled.div`
  display: flex;
  gap: 3%;
`;
export const Checkboxt = styled.input`
  width: 24px;
  height: 24px;
  text-decoration-color: #007bff;
  background: #007bff;
  background-color: #007bff;
  border: 2px solid #007bff;
  color: #004ce8;
  border: #004ce8;
`;

export const TextTotal = styled.h4`
  color: #212121;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const TextEmAlta = styled.h4`
  color: #212121;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const TextBaixa = styled.h4`
  color: #212121;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const Button = styled.button`
  width: 95%;
  margin: 7% 0 0 2%;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #001c98;

  color: #fff;
  border: none;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #3a55ca;
  }
`;
