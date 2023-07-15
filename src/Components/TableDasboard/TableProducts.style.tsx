import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  
  border-radius: 24px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  overflow: auto;

  /* Ocultar a barra de rolagem */
  scrollbar-width: thin; /* Para navegadores Firefox */
  scrollbar-color: transparent transparent; /* Para navegadores Chrome e Safari */

  /* Estilos para navegadores Chrome e Safari */
  &::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Cor do polegar da barra de rolagem */
  }
`;
export const TableDashboard = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const DivThead = styled.thead`
  width: 100%;
  height: 56px;
  background: #001c98;
  border-radius: 16px 16px 0px 0px;
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;

  color: #fff;
`;
export const Td = styled.td`
  padding: 10px;
  text-align: center;

  color: #212121;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  
`;

type Status = "EM_ALTA" | "EM_BAIXA" | "NEUTRO" | string;

type TdProps = {
  status: Status;
};

export const TdStatus = styled.td<TdProps>`
  
  text-align: center;
  display: flex;
  flex-direction: column;
  

  width: 60%;
  
  border-radius: 7px;
  background-color: ${(props) => {
    switch (props.status) {
      case "EM_ALTA":
        return "#D9FEE6";
      case "EM_BAIXA":
        return "#FFE1E1";
      case "NEUTRO":
        return "#b1b0b0";
      default:
        return "gray";
    }
  }};

  color: ${(props) => {
    switch (props.status) {
      case "EM_ALTA":
        return "#00C247"; // Texto branco para EM_ALTA
      case "EM_BAIXA":
        return "#FF3333";
      case "NEUTRO":
        return "white"; // Texto branco para EM_BAIXA
      default:
        return "black";
    }
  }};

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
  
`;

export const ThLeft = styled.th`
  border-top-left-radius: 10px;
  
`;
export const ThRight = styled.th`
  border-top-right-radius: 10px;
`;
