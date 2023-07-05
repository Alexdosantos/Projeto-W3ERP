import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
  buttonType: "alta" | "baixa";
}

export const BtnNavTable = styled.button<ButtonProps>`
  background-color: ${(props) => {
    if (props.active) {
      return props.buttonType === "alta" ? "#00ff00" : "#ff0000";
    } else {
      return "#ffffff";
    }
  }};
  
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
`;
