import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const Title = styled.h4`
  margin-left: 5%;
  color: #212121;

  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export const DivCardInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
 
  
   
  gap: 1%;
  width: 90%;
  height: 750%;
  padding: 2% 0 0 3%;
  margin: 2% 0 0 5%;
  border-radius: 5px 5px 5px 5px;

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
