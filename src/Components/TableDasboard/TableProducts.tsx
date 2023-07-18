/* eslint-disable no-prototype-builtins */
import { ReactNode } from "react";
import { TdStatus } from "./TableProducts.style";
import * as S from "./TableProducts.style";

type TableProps = {
  nav: ReactNode;
  id: number | string;

  dados: Array<{
    id: number | string;
    cliente?: string | number;
    nome?: string;
    percentual?: string | number;
    ultimaCompra?: string | number;
    qtd?: string | number;
    darbaixa?: string | number;
    status?: string | number;
    classificacao?: string;
    quantidade?: number;
    imagemProdutos?: string;
    imagemClientes?: string;
  }>;
};

const TabelaProducts = ({ nav, id, dados }: TableProps) => {
  return (
    <S.Container>
      <h2>{nav}</h2>
      <S.TableDashboard>
        <S.DivThead>
          <tr>
            <S.ThLeft>{id}</S.ThLeft>

            {!!dados?.[0]?.nome && <S.ThProdutos>Produto</S.ThProdutos>}
            {!!dados?.[0]?.classificacao && <S.ThStatus>Status</S.ThStatus>}
            {!!dados?.[0]?.cliente && <S.ThCliente>Cliente</S.ThCliente>}

            {dados?.[0]?.hasOwnProperty("percentual") && (
              <S.ThRight>Porcentagem</S.ThRight>
            )}
            {!!dados?.[0]?.imagemProdutos && <S.ThRight1></S.ThRight1>}
            {!!dados?.[0]?.imagemClientes && <S.ThRight1></S.ThRight1>}
            {!!dados?.[0]?.ultimaCompra && <th>Última Compra</th>}
            {dados?.[0]?.hasOwnProperty("quantidade") && (
              <S.ThRight>Qtd.</S.ThRight>
            )}
            {!!dados?.[0]?.qtd && <th>Qtd.</th>}
            {!!dados?.[0]?.darbaixa && <S.ThRight1>Dar Baixar</S.ThRight1>}
          </tr>
        </S.DivThead>
        <tbody>
          {dados &&
            dados.length > 0 &&
            dados.map((item) => (
              <tr key={item.id}>
                <S.Td>{item.id}</S.Td>
                {item.nome && <S.Td>{item.nome}</S.Td>}
                {item.classificacao && (
                  <TdStatus status={item.classificacao}>
                    {item.classificacao}
                  </TdStatus>
                )}
                {item.cliente && <S.Td>{item.cliente}</S.Td>}
                {dados?.[0]?.hasOwnProperty("percentual") && (
                  <S.Td>{item.percentual}%</S.Td>
                )}

                {item.imagemProdutos && <S.Td>{item.imagemProdutos}</S.Td>}
                {item.imagemClientes && <S.Td>{item.imagemClientes}</S.Td>}
                {item.ultimaCompra && <S.Td>{item.ultimaCompra}</S.Td>}

                {dados?.[0]?.hasOwnProperty("quantidade") && (
                  <S.Td>{item.quantidade}</S.Td>
                )}
                {item.qtd && <S.Td>{item.qtd}</S.Td>}
                {item.darbaixa && <S.Td>{item.darbaixa}</S.Td>}
              </tr>
            ))}
        </tbody>
      </S.TableDashboard>
    </S.Container>
  );
};

export default TabelaProducts;
