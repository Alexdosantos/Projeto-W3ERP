import * as S from "./Banner.style";
import ImgPhone from "../../assets/Icons/phone-telephone.svg";
import ImgEmail from "../../assets/Icons/mail.svg";

type BannerDatailsProps = {
  title: string;
  phone: string;
  email: string;
};

export const BannerDatailsPredicoes = ({
  title,
  phone,
  email,
}: BannerDatailsProps) => {
  return (
    <S.DivInformation>
      <S.TitleCompany>{title}</S.TitleCompany>
      <S.DivContact>
        <S.DivPhone>
          <img src={ImgPhone} alt="" />
          <S.TextEmail>{phone}</S.TextEmail>
        </S.DivPhone>
        <S.DivEmail>
          <img src={ImgEmail} alt="" />
          <S.TextPhone>{email}</S.TextPhone>
        </S.DivEmail>
      </S.DivContact>
    </S.DivInformation>
  );
};
