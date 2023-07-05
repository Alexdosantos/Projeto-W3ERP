import * as S from "./CardClienteBaixa.style";

const CardClienteBaixa = () => {
  return (
    <>
      <S.Container>
        <div>
          <div></div>
          <div>
            <S.TextP>
              Total
              <strong>cliente</strong>
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

export default CardClienteBaixa
