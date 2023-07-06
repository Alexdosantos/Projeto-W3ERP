import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
  buttonType: "alta" | "baixa";
}

export const BtnNavTable = styled.button<ButtonProps>`
  width: 119px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  margin-top: 15px;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.2px;

  background-color: ${(props) => {
    if (props.active) {
      return props.buttonType === "alta" ? "#00ff00" : "#ff0000";
    } else {
      return "#ffffff";
    }
  }};

  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
`;
