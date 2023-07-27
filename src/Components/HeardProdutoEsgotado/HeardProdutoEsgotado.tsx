import * as S from "./HeardProdutoEsgotado.style";
import ImgEsgotado from "../../assets/Icons/produtoEsgotado.png";

export const HeardProdutoEsgotado = () => {
  return (
    <S.Container>
      <S.Img src={ImgEsgotado} alt="" />
      <S.TitleH3>Produtos Esgotado</S.TitleH3>
    </S.Container>
  );
};
