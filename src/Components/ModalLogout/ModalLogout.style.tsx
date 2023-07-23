import { BsGear, BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 18.5%;
  right: 3%;
  width: 10%;
  height: 12%;
 
  background-color: #fff;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  border-radius: 10px;

  z-index: 1;
`;
export const Wapper = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
 margin: 15% 0 0 10%;
 
`;
export const DivConfiguration = styled.div`
display: flex;
gap: 5%;
`
export const DivExit = styled.div`
display: flex;
gap: 5%;
`
export const Division = styled.div`
width: 90%;
height: 1px;
background: #ccc8c8;
`

export const IconConfiguration = styled(BsGear)`
  width: 14%;
  height: 14%;
`;

export const TextConfiguration = styled.button`
  color: #757575;

  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const IconExit = styled(BsBoxArrowLeft)`
  width: 14%;
  height: 14%;
`;
export const TextExit = styled(Link)`
  color: #757575;

  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  text-decoration: none;
`;
