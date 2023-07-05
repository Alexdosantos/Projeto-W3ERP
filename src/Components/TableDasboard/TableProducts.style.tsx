import styled from "styled-components";

export const Container = styled.div`
  width: 771px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 24px;
  /* background: var(--branco, #ff0000); */

  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);

  @media (min-width: 2000px) {
    width: 10vw;
    height: 13vh;
    margin: -90px 0 0 80px;
    border-radius: 36px;
    
  }

  @media (max-width: 3000px) {
    width: 35vw;

    border-radius: 20px;
    margin: -10px 1px 0 30px;
  }
`;
export const TableDashboard = styled.table`
  width: 651px;
  border-collapse: collapse;
  

  
`;

export const DivThead = styled.thead`

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
export const ThLeft = styled.th`
  border-top-left-radius: 10px;
`;
export const ThRight = styled.th`
  border-top-right-radius: 10px;
`;
