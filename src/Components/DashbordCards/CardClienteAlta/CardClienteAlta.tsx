import Grafics from "../../Grafics/Grafics";
import * as S from "./CardClienteAlta.Style";

const CardClienteAlta = () => {
  return (
    <>
      <S.Container>
        <S.Wapper>
          <div>
            <Grafics/>
          </div>
          <div>
            <S.TextP>
              Total
              <strong>cliente</strong>
              em alta
            </S.TextP>

            <S.DivNumber>
              <S.Number>120</S.Number>
              <S.Porcentagem>
                <S.TextPorcentagem>+13%</S.TextPorcentagem>
              </S.Porcentagem>
            </S.DivNumber>
          </div>
        </S.Wapper>
      </S.Container>
    </>
  );
};

export default CardClienteAlta