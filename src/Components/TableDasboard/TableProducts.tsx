import { ReactNode } from "react";
import * as S from "./TableProducts.style";

type TableProps = {
  nav: ReactNode;
  id: string;
  percentual: string;

  dados: Array<{
    id: number | string;
    cliente?: string | number;
    produto?: string | number;
    percentual?: string | number;
    ultimaCompra?: string | number;
    qtd?: string | number;
    darbaixa?: string | number;
    status?: string | number;
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
            {dados[0].produto && <th>Produto</th>}
            {dados[0].cliente && <th>Cliente</th>}
            {dados[0].status && <th>Status</th>}
            {dados[0].percentual && <S.ThRight>Porcentagem</S.ThRight>}
            {dados[0].ultimaCompra && <th>Última Compra</th>}
            {dados[0].qtd && <th>Qtd.</th>}
            {dados[0].darbaixa && <S.ThRight>Dar Baixar</S.ThRight>}
          </tr>
        </S.DivThead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <S.Td>{item.id}</S.Td>
              {item.produto && <S.Td>{item.produto}</S.Td>}
              {item.cliente && <S.Td>{item.cliente}</S.Td>}
              {item.status && <S.Td>{item.status}</S.Td>}
              {item.percentual && <S.Td>{item.percentual}%</S.Td>}
              {item.ultimaCompra && <S.Td>{item.ultimaCompra}</S.Td>}
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
