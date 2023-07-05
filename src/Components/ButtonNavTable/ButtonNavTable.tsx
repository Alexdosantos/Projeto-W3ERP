import * as S from "./ButtonNavTable.Style";

type ButtonNavTableProps = {
  onClick: () => void;
  title: string;
  active?: boolean;
  buttonType: "alta" | "baixa";
};

export const ButtonNavTable = ({
  onClick,
  title,
  active,
  buttonType
}: ButtonNavTableProps) => {
  return (
    <S.BtnNavTable active={active} buttonType={buttonType} onClick={onClick}>
      {title}
    </S.BtnNavTable>
  );
};