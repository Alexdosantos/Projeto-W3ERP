import * as S from "./CarProductBaixa.Style";

const CardProdutctsBaixa = () => {
  return (
    <>
      <S.Container>
        <div>
          <div></div>
          <div>
            <S.TextP>
              Total
              <strong>produtos</strong>
              em baixa
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

export default CardProdutctsBaixa
