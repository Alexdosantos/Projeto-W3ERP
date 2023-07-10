import { useState, useEffect } from "react";
import { DashbordData } from "../../Components/DashboardData/DashbordData";
import { Layout } from "../../Components/Layout/Layout";
import * as S from "./Dashboard.Style";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";
import { NavTable } from "../../Components/NavTable/NavTable";
import ImgProducts from "../../assets/Icons/IconBlue.png";
import ImgClients from "../../assets/Icons/IconClients.png";
import { GetUser } from "../../Service/GetApi/GetUser";

const Dashboard = () => {
  const clientes = [
    { id: 1, cliente: "Hotel", percentual: 10 },
    { id: 2, cliente: "Pizzria", percentual: 20 },
    { id: 3, cliente: "Padaria", percentual: 15 },
    { id: 4, cliente: "Loja de Roupa", percentual: 5 },
  ];

  const [produtos, setProdutos] = useState([]);

  const btnAlta = () => {
    return;
  };

  const btnBaixa = () => {
    return;
  };

  

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        
        const response = await GetUser.produtos();
        setProdutos(response.content);
      } catch (error) {
        console.error("Erro ao obter produtos da API:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <>
      <Layout>
        <DashbordData />

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
      </Layout>
    </>
  );
};

export default Dashboard;
