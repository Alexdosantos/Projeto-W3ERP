import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;

  border-radius: 24px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
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
  padding: 1%;
  text-align: center;

  color: #212121;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;

  &:nth-child(2) {
    padding-left: 10%;
    text-align: left;
  }
`;

type Status = "EM_ALTA" | "EM_BAIXA" | "NEUTRO" | string;

type TdProps = {
  $status: Status;
};

export const TdStatus = styled.td<TdProps>`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1%;
  border-radius: 5px;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;

  background-color: ${(props) => {
    switch (props.$status) {
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
    switch (props.$status) {
      case "EM_ALTA":
        return "#00C247";
      case "EM_BAIXA":
        return "#FF3333";
      case "NEUTRO":
        return "white";
      default:
        return "black";
    }
  }};
`;

export const ThLeft = styled.th`
  border-top-left-radius: 10px;
`;
export const ThRight = styled.th`
  &:nth-child(2) {
    padding-left: 10%;
    text-align: left;
  }
`;

export const ThRight1 = styled.th`
  border-top-right-radius: 10px;
`;

export const ThProdutos = styled.th`
  padding-right: 39%;
`;
export const ThCliente = styled.th`
  padding-right: 43%;
`;
export const ThStatus = styled.th`
  padding-left: -20%;
`;
