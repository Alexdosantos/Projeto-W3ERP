import * as S from "./CardsDetails.styled";
import { SmallBlueCard } from "../SmallCards/SmallBlueCard/SmallBlueCard";
import { SmallCardWhite } from "../SmallCards/SmallCardWhite/SmallCardWhite";
import { GetUser } from "../../Service/GetApi/GetUser";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SmallCardProcentagem } from "../SmallCardPorcentagem/SmallCardProcentagem";

export interface Root {
  media120Dias: number;
  nome: string;
  percentualUltimos30Dias: number;
  ultimos120Dias: number;
  ultimos30Dias: number;
  ultimos60Dias: number;
  ultimos90Dias: number;
  id: string | number;
}

export const CardsDetails = () => {
 
  return (
    <S.Container>
      <SmallBlueCard
        title="Média 120 dias"
        text={produtosResumo?.media120Dias}
      />
      <SmallCardWhite
        title="Últimos 30 dias "
        text={produtosResumo?.ultimos30Dias}
        porcentagem={
          <SmallCardProcentagem
            porcentagem={produtosResumo?.percentualUltimos30Dias}
          />
        }
      />
      <SmallCardWhite
        title="Últimos 60 dias "
        text={produtosResumo?.ultimos60Dias}
        porcentagem=""
      />
      <SmallCardWhite
        title="Últimos 90 dias "
        text={produtosResumo?.ultimos90Dias}
        porcentagem=""
      />
      <SmallCardWhite
        title="Últimos 120 dias "
        text={produtosResumo?.ultimos120Dias}
        porcentagem=""
      />
    </S.Container>
  );
};
