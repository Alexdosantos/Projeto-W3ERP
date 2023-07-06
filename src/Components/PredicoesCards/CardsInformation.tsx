import * as S from "./CardsInformation.styled";
import ImgUser from "../../assets/Icons/Icon-user.png";
import ImgRight from "../../assets/Icons/right.svg";

export const CardsInformation = () => {
  return (
    <S.Container>
      <S.Wapper>
        <S.DivUser>
          <div>
            <S.ImgUser src={ImgUser} alt="" />
          </div>
          <div>
            <S.TitleUser>Hotel</S.TitleUser>
            <S.TitleStatus>. Status vai aqui</S.TitleStatus>
          </div>
        </S.DivUser>
        <img src={ImgRight} alt="" />
      </S.Wapper>
    </S.Container>
  );
};
