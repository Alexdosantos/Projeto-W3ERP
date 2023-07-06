import * as S from "./CardsInformation.styled";
import ImgUser from "../../assets/Icons/Icon-user.png";
import ImgRight from "../../assets/Icons/right.svg";

import MiniTableCards from "../MiniTable/MiniTableCards";

type CardsInformationProps = {
  company:string
  dados: Array<{ produto: string; proximaCompra: string  }>;
};
export const CardsInformation = ({ dados, company}: CardsInformationProps) => {
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
        <img src={ImgRight} alt="" />
      </S.Wapper>
      <S.DivInformation>
        <div>
          <MiniTableCards dados={dados} />
        </div>
      </S.DivInformation>
    </S.Container>
  );
};
