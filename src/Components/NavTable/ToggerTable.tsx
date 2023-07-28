import { ButtonNavTable } from "../ButtonNavTable/ButtonNavTable";
import { useState } from "react";
import * as S from "./ToggerTable.Style";
type NavTablePropos = {
  img: string;
  title: string;
  onClickAlta: () => void;
  onClickBaixa: () => void;
};

export const ToggerTable = ({
  img,
  title,
  onClickAlta,
  onClickBaixa,
}: NavTablePropos) => {
  const [isAltaActive, setIsAltaActive] = useState(true);
  const [isBaixaActive, setIsBaixaActive] = useState(false);

  const handleAltaClick = () => {
    setIsAltaActive(true);
    setIsBaixaActive(false);
    onClickAlta();
  };

  const handleBaixaClick = () => {
    setIsAltaActive(false);
    setIsBaixaActive(true);
    onClickBaixa();
  };

  return (
    <S.Container>
      <S.ContainerOne>
        <S.ImgProducts src={img} alt="" />
        <S.Titleroducts>{title}</S.Titleroducts>
      </S.ContainerOne>
      <div>
        <ButtonNavTable
          title="EM ALTA"
          buttonType="EM_ALTA"
          active={isAltaActive}
          onClick={handleAltaClick}
        />
        <ButtonNavTable
          title="EM BAIXA"
          buttonType="EM_BAIXA"
          active={isBaixaActive}
          onClick={handleBaixaClick}
        />
      </div>
    </S.Container>
  );
};
