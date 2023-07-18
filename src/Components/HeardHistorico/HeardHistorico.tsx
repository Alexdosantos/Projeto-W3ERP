import * as S from "./HeardHistorico.style";
import ImgTime from "../../assets/Icons/time.svg";

export const HeardHistorico = () => {
  return (
    <S.Container>
      <S.Img src={ImgTime} alt="" />
      <S.TitleH3>Histórico</S.TitleH3>
    </S.Container>
  );
};
