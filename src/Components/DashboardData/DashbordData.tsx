import * as S from "./DashbordData.Styled";
import Caledario from "../../assets/Icons/calendar.svg";

import HighCard from "../DashbordCards/HighCard/HighCard";
import LowCard from "../DashbordCards/LowCard/LowCard";


export const DashbordData = () => {
  return (
    <>
      <S.Container>
        <S.Container1>
          <div>
            <S.TextH4>Dashboard</S.TextH4>
          </div>

          <S.ContainerCaledarios>
            <img src={Caledario} alt="" />
            <S.TextP>Mostrar:</S.TextP>
            <div>
              <S.StyledSelect>
                <option value="">Filtro</option>
                <option value="today">Hoje</option>
                <option value="yesterday">Ontem</option>
                <option value="week">Essa Semana</option>
                <option value="month">Esse Mês</option>
                <option value="3months">Em 3 Meses</option>
                <option value="6months">Em 6 Meses</option>
                <option value="year">Em Anual</option>
              </S.StyledSelect>
            </div>
          </S.ContainerCaledarios>
        </S.Container1>
        <S.DivCardsInformation>
          <HighCard title="Produtos" total="82" porcentagem="25" />
          <LowCard title="Produtos" total="32" porcentagem="25" />
          <HighCard title="Clientes" total="22" porcentagem="25" />
          <LowCard title="Clientes" total="29" porcentagem="25" />
        </S.DivCardsInformation>

        
      </S.Container>
    </>
  );
};
