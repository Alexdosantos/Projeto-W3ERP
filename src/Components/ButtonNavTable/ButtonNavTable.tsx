import * as S from "./ButtonNavTable.Style";


type ButtonNavTableProps = {
  onClick: () => void;
  title: string;
  active: boolean;
  buttonType: string;
};

export const ButtonNavTable = ({
  onClick,
  title,
  active,
  buttonType
}: ButtonNavTableProps) => {
  return (
    <S.BtnNavTable $active={active} $buttontype={buttonType} onClick={onClick}>
      {title}
    </S.BtnNavTable>
  );
};