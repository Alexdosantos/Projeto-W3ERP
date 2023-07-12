import { useState } from "react";
import { DashbordData } from "../../Components/DashboardData/DashbordData";
import { Layout } from "../../Components/Layout/Layout";
import * as S from "./Dashboard.Style";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";
import { NavTable } from "../../Components/NavTable/NavTable";
import ImgProducts from "../../assets/Icons/IconBlue.png";
import ImgClients from "../../assets/Icons/IconClients.png";
import { GetUser } from "../../Service/GetApi/GetUser";
import { useQuery } from "react-query";

type DashProps = {
  classificacao: string;
};

const Dashboard = () => {
  const [exibirProdutosAlta, setExibirProdutosAlta] = useState(false);
  const [exibirProdutosBaixa, setExibirProdutosBaixa] = useState(false);
  const [exibirClientesAlta, setExibirClientesAlta] = useState(false);
  const [exibirClientesBaixa, setExibirClientesBaixa] = useState(false);

  const { data: produtos } = useQuery("produtos", GetUser.produtos);
  const { data: clientes } = useQuery("clients", GetUser.cliente);

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
                onClickAlta={() => {
                  setExibirProdutosAlta(true), setExibirProdutosBaixa(false);
                }}
                onClickBaixa={() => {
                  setExibirProdutosAlta(false), setExibirProdutosBaixa(true);
                }}
              />
            }
            id="ID"
            percentual="Percentual"
            dados={
              exibirProdutosAlta
                ? produtos.filter(
                    ({ classificacao }: DashProps) =>
                      classificacao === "EM_ALTA"
                  )
                : exibirProdutosBaixa
                ? produtos.filter(
                    ({ classificacao }: DashProps) =>
                      classificacao === "EM_BAIXA"
                  )
                : produtos
            }
          />

          <TabelaProducts
            nav={
              <NavTable
                img={ImgClients}
                title="Clientes"
                onClickAlta={() => {
                  setExibirClientesAlta(true), setExibirClientesBaixa(false);
                }}
                onClickBaixa={() => {
                  setExibirClientesAlta(false), setExibirClientesBaixa(true);
                }}
              />
            }
            id="ID"
            percentual="Percentual"
            dados={
              exibirClientesAlta
                ? clientes.filter(
                    ({ classificacao }: DashProps) =>
                      classificacao === "EM_ALTA"
                  )
                : exibirClientesBaixa
                ? clientes.filter(
                    ({ classificacao }: DashProps) =>
                      classificacao === "EM_BAIXA"
                  )
                : clientes
            }
          />
        </S.DivTable>
      </Layout>
    </>
  );
};

export default Dashboard;
