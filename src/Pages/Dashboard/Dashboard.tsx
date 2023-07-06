import { DashbordData } from "../../Components/DashboardData/DashbordData";
import { Layout } from "../../Components/Layout/Layout";
import * as S from "./Dashboard.Style";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";
import { NavTable } from "../../Components/NavTable/NavTable";

import ImgProducts from "../../assets/Icons/IconBlue.png"
import ImgClients from "../../assets/Icons/IconClients.png"
import LowCard from "../../Components/DashbordCards/LowCard/LowCard";
import HighCard from "../../Components/DashbordCards/HighCard/HighCard";

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
  const btnAlta = () => {
    return;
  };
  const btnBaixa = () => {
    return;
  };
  return (
    <>
      <Layout>
        <DashbordData>
          <S.Container>
            <HighCard title="Produtos" total="82" porcentagem="25" />
            <LowCard title="Produtos" total="32" porcentagem="25" />
            <HighCard title="Clientes" total="22" porcentagem="25" />
            <LowCard title="Clientes" total="29" porcentagem="25" />
          </S.Container>

          <S.DivTable>
            <TabelaProducts
              nav={
                <NavTable
                  img={ImgProducts}
                  title="Produtos"
                  onClickAlta={btnAlta}
                  onClickBaixa={btnBaixa}
                />
              }
              id="ID"
              percentual="Percentual"
              dados={produtos}
            />
            <TabelaProducts
              nav={
                <NavTable
                  img={ImgClients}
                  title="Clientes"
                  onClickAlta={btnAlta}
                  onClickBaixa={btnBaixa}
                />
              }
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
