import styled from "styled-components";

export const Container = styled.div`
  box-sizing: content-box;

  margin-left: 25px;
  margin-top: 50px;
  width: 97%;
  height: 295px;
  border-radius: 24px;
  background: #001c98;

  @media (min-width: 600px) {
    width: 95vw;
     
}

@media (max-width: 3205px) {

    width: 75vw;
    margin-left: 45px;
    
}
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const TextH4 = styled.h4`
  padding: 25px 0 120px 50px;

  font-size: 32px;
  font-family: Sora;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  color: #fff;
`;
export const ContainerCaledarios = styled.div`
  display: flex;
  height: 35px;
  gap: 3px;
  justify-content: center;
  margin: 30px 50px 0 0;


  background: #fff;
  border-radius: 8px;
`;
export const TextP = styled.p`
  color: #424242;
  padding-top: 5px;
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const StyledSelect = styled.select`
  height: 20px;
  margin: 5px 0 0 0;

  border: none;
  outline: none;

  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  color: #001c98;
`;
