import styled from "styled-components";
import { TextField } from "@mui/material";

export const CardBoxGeneral = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const ImgLogin = styled.img`
  
`;

export const CardBoxForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
`;

export const TextH3 = styled.h3`
  font-family: Sora;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #424242;
`;

export const TitleH1 = styled.h1`
  font-family: Sora;
  font-weight: 700;
  font-size: 36px;
`;

export const DivInputsLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const LabelEmail = styled.label`
  position: absolute;
  margin-top: -9px;
  margin-left: 20px;
  font-family: Sora;
  font-weight: 100;
  font-size: 14px;
  color: #424242;
  background: white;
  transition: color 0.3s ease;

  &:focus {
    border: 1px solid #2ecc71;
    outline: none;
  }

  input:focus + & {
    color: #2ecc71;
  }
`;

export const InputsEmail = styled.input`
  width: 400px;
  height: 67px;
  border-radius: 15px;
  border: 1px solid #b4b3b3;
  background: white;

  font-weight: 100;
  font-size: 14px;
  padding-left: 19px;

  &:focus {
    border: 1px solid #2ecc71;
    outline: none;
  }

  &:focus + ${LabelEmail} {
    color: #2ecc71;
  }
`;

export const LabelInputs = styled.label`
  position: absolute;
  margin-top: 95px;
  margin-left: 20px;
  font-family: Sora;
  font-weight: 100;
  font-size: 14px;
  color: #424242;
  background: white;
  transition: color 0.3s ease;

  &:focus {
    border: 1px solid #2ecc71;
    outline: none;
  }

  input:focus + & {
    color: #2ecc71;
  }
`;

export const InputsPassword = styled.input`
  width: 400px;
  height: 67px;
  border-radius: 15px;

  font-family: Sora;
  font-weight: 100;
  font-size: 14px;
  padding-left: 19px;
  padding-right: 15px;
  border: 1px solid #b4b3b3;
  background: white;

  &:focus {
    border: 1px solid #2ecc71;
    outline: none;
  }

  &:focus + ${LabelInputs} {
    color: #2ecc71;
  }
`;
export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #2ecc71;
    }
    &.Mui-focused fieldset {
      border-color: #2ecc71;
    }
  }

  .MuiInputLabel-root {
    &.Mui-focused {
      color: #2ecc71;
    }
  }
`;

export const DivToRemember = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  font-family: Sora;
  font-weight: 100;
`;
export const BtnLogin = styled.button`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 56px;
  padding: 12px 64px;
  align-items: center;
  gap: 10px;

  border-radius: 16px;
  background: #001c98;
  color: white;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;

  border: none;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background: #0020ac;
  }
`;

export const DivErro = styled.div`
  align-items: center;
  text-align: center;
  position: absolute;

  margin: -1% 0 0 18%;
  width: 25%;

`;

export  const ErroEmail = styled.p`
font-family: Sora;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: #ff0000;

`