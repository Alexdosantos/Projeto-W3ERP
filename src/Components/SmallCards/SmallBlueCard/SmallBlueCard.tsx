import * as S from "./SmallBlueCard.Style";

type SmallBlueCardProps = {
  title: string;
  text: string;
};

export const SmallBlueCard = ({ title, text }: SmallBlueCardProps) => {
  return (
    <S.Container>
      <S.Wappper>
        <S.Title>{title}</S.Title>
        <S.Texth3>{text}</S.Texth3>
      </S.Wappper>
    </S.Container>
  );
};
