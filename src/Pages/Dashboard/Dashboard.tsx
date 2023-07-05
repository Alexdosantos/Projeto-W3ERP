import CardProdutctsBaixa from "../../Components/DashbordCards/CardProductBaixa/CarProductBaixa";
import { DashbordData } from "../../Components/DashboardData/DashbordData";
import CardProdutctsAlta from "../../Components/DashbordCards/CardProductsAlta/CardProdutctsAlta";
import { Layout } from "../../Components/Layout/Layout";

import * as S from "./Dashboard.Style";
import CardClienteAlta from "../../Components/DashbordCards/CardClienteAlta/CardClienteAlta";
import CardClienteBaixa from "../../Components/DashbordCards/CardClienteBaixa/CardClienteBaixa";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";

const Dashboard = () => {
  const clientes = [
    { id: 1, cliente: "Hotel", percentual: 10 },
    { id: 2, cliente: "Pizzria", percentual: 20 },
    { id: 3, cliente: "Padaria", percentual: 15 },
    { id: 4, cliente: "Loja de Roupa", percentual: 5 },
    
  ];

  const produtos = [
    { id: 1, produto: "Produto A", percentual: 10, cargo: "Analista" },
    { id: 2, produto: "Produto B", percentual: 20, cargo: "Analista" },
    { id: 3, produto: "Produto C", percentual: 15, cargo: "Analista" },
    { id: 4, produto: "Produto D", percentual: 5, cargo: "Analista" },
  ];

  return (
    <>
      <Layout>
        <DashbordData>
          <S.Container>
            <CardProdutctsAlta />
            <CardProdutctsBaixa />
            <CardClienteAlta />
            <CardClienteBaixa />
          </S.Container>
          <S.DivTable>
            <TabelaProducts
              title="Produtos"
              id="ID"
              percentual="Percentual"
              dados={produtos}
            />
            <TabelaProducts
              title="Clientes"
              id="ID"
              percentual="Percentual"
              dados={clientes}
            />
          </S.DivTable>
        </DashbordData>
      </Layout>
    </>
  );
};

export default Dashboard;
