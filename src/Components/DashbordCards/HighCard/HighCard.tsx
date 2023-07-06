import Grafics from "../../Grafics/Grafics";
import * as S from "./HighCard.styled";

type CardBaixaProps ={
  title:string
  total:number | string
  porcentagem: number | string
}

const HighCard = ({title ,porcentagem,total}:CardBaixaProps) => {
  return (
    <>
      <S.Container>
        <S.Wapper>
          <S.DivGraphics>
            <Grafics />
          </S.DivGraphics>
          <S.Container1>
            <S.TextP>
              Total
              <strong>{title}</strong>
              em alta
            </S.TextP>

            <S.DivNumber>
              <S.Number>{total}</S.Number>
              <S.Porcentagem>
                <S.TextPorcentagem>+{porcentagem}%</S.TextPorcentagem>
              </S.Porcentagem>
            </S.DivNumber>
          </S.Container1>
        </S.Wapper>
      </S.Container>
    </>
  );
};

export default HighCard 
