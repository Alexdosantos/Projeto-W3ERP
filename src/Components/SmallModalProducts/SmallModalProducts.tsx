import * as S from "./SmallModalProducts.styled";
type ModalProps = {
  isOpen: boolean;
  todos: () => void;
  emAlta: () => void;
  emBaixa: () => void;
  buttonAplication: () => void;
  checkedTodos: boolean;
  checkedAlta: boolean;
  checkedBaixa: boolean;
};

export const SmallModalProducts = ({
  isOpen,
  todos,
  emAlta,
  emBaixa,
  buttonAplication,
  checkedTodos,
  checkedAlta,
  checkedBaixa,
}: ModalProps) => {
  if (isOpen)
    return (
      <S.Container>
        <S.TextFilter>Filtrar por:</S.TextFilter>
        <S.Division />
        <S.TextStatus>Status</S.TextStatus>
        <S.DivCheckbox>
          <S.DivTotal>
            <S.Checkboxt
              type="checkbox"
              checked={checkedTodos}
              onChange={todos}
            />
            <S.TextEmAlta>Todos</S.TextEmAlta>
          </S.DivTotal>
          <S.DivEmAlta>
            <S.Checkboxt
              type="checkbox"
              checked={checkedAlta}
              onChange={emAlta}
            />
            <S.TextEmAlta>Em alta</S.TextEmAlta>
          </S.DivEmAlta>
          <S.DivEmBaixa>
            <S.Checkboxt
              type="checkbox"
              checked={checkedBaixa}
              onChange={emBaixa}
            />
            <S.TextBaixa>Em baixa</S.TextBaixa>
          </S.DivEmBaixa>
        </S.DivCheckbox>
        <S.Button onClick={buttonAplication}>Aplicar</S.Button>
      </S.Container>
    );
};
