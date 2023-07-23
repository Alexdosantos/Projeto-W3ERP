import * as S from "./ModalLogout.style";

type ModalLogoutProps = {
  isOpen: boolean;
};

export const ModalLogout = ({ isOpen }: ModalLogoutProps) => {
  if (isOpen)
    return (
      <S.Container>
        <S.Wapper>
          <S.DivConfiguration>
            <S.IconConfiguration />
            <S.TextConfiguration>Configuração</S.TextConfiguration>
          </S.DivConfiguration>
          <S.Division/>
          <S.DivExit>
            <S.IconExit />
            <S.TextExit to={"/"}>Sair</S.TextExit>
          </S.DivExit>
        </S.Wapper>
      </S.Container>
    );
};
