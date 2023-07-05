import * as S from "./CardProdutctsAlta.styled";

const CardProdutctsAlta = () => {
  return (
    <>
      <S.Container>
        <div>
          <div></div>
          <div>
            <S.TextP>
              Total
              <strong>produtos</strong>
              em alta
            </S.TextP>

            <S.DivNumber>
              <S.Number>120</S.Number>
              <S.Porcentagem>
                <S.TextPorcentagem>+13%</S.TextPorcentagem>
              </S.Porcentagem>
            </S.DivNumber>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default CardProdutctsAlta;
