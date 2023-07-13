import * as S from "./CardsInformation.styled";
import ImgUser from "../../assets/Icons/Icon-user.png";
import ImgRight from "../../assets/Icons/right.svg";

import MiniTableCards from "../MiniTable/MiniTableCards";
import { Link } from "react-router-dom";

type CardsInformationProps = {
  company:string
  dados: Array<{ nome: string; proximaCompra: string ,}>;
  id: number 
};
export const CardsInformation = ({ dados, company , id}: CardsInformationProps) => {
  return (
    <S.Container>
      <S.Wapper>
        <S.DivUser>
          <div>
            <S.ImgUser src={ImgUser} alt="" />
          </div>
          <div>
            <S.TitleUser>{company}</S.TitleUser>
            <S.TitleStatus>. Status vai aqui</S.TitleStatus>
          </div>
        </S.DivUser>
        <Link to={`/Predicoes/${id}`}>
        <img src={ImgRight} alt="" />
        </Link>
      </S.Wapper>
      <S.DivInformation>
        <div>
          <MiniTableCards dados={dados} />
        </div>
      </S.DivInformation>
    </S.Container>
  );
};
