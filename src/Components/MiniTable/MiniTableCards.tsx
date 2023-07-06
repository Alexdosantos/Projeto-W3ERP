import * as S from "./MiniTableCards.Style";

type MiniTableProps = {
  dados: Array<{ produto: string; proximaCompra: string }>;
};

const MiniTableCards = ({ dados }: MiniTableProps) => {
  const produtos = dados.slice(0, 3);
  const proximasCompras = dados.slice(0, 3);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <S.TitleProdutcs>Produtos</S.TitleProdutcs>
            <S.TitleProx>Próxima Compra</S.TitleProx>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item, index) => (
            <tr key={index}>
              <S.Td>{item.produto}</S.Td>
              {index < proximasCompras.length && (
                <S.Td1>{proximasCompras[index].proximaCompra}</S.Td1>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
};

export default MiniTableCards;
