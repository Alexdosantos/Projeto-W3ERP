import * as S from "./TableProducts.style";

type TableProps = {
  title: string;
  id: string;
  percentual: string;
  dados: Array<{
    id: number;
    cliente?: string;
    produto?: string;
    percentual: number;
  }>;
};

const TabelaProducts = ({ title, id, percentual, dados }: TableProps) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      <S.TableDashboard>
        <S.DivThead>
          <tr>
            <S.ThLeft>{id}</S.ThLeft>
            {dados[0].produto && <th>Produto</th>}
            {dados[0].cliente && <th>Cliente</th>}

            <S.ThRight>{percentual}</S.ThRight>
          </tr>
        </S.DivThead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <S.Td>{item.id}</S.Td>
              {item.produto && <S.Td>{item.produto}</S.Td>}
              {item.cliente && <S.Td>{item.cliente}</S.Td>}
              <S.Td>{item.percentual}%</S.Td>
            </tr>
          ))}
        </tbody>
      </S.TableDashboard>
    </S.Container>
  );
};

export default TabelaProducts;
