
import * as S from "./SmallCardWhite.Style";
type SmallCardsWhiteProps = {
  title: string;
  text: number;
  porcentagem?: React.ReactNode;
};

export const SmallCardWhite = ({
  title,
  text,
  porcentagem,
}: SmallCardsWhiteProps) => {
  return (
    <S.Container>
      <S.Wappper>
        <S.Title>{title}</S.Title>
        <S.DivText>
          <S.Texth3>{text}</S.Texth3>
          <div>
          {porcentagem}
          </div>
        </S.DivText>
      </S.Wappper>
    </S.Container>
  );
};
