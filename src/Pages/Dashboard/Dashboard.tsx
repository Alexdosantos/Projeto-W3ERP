import { useState } from "react";
import { DashbordData } from "../../Components/DashboardData/DashbordData";
import { Layout } from "../../Components/Layout/Layout";
import * as S from "./Dashboard.Style";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";
import { NavTable } from "../../Components/NavTable/NavTable";
import ImgProducts from "../../assets/Icons/IconBlue.png";
import ImgClients from "../../assets/Icons/IconClients.png";
import ImgNext from "../../assets/Icons/check-one.svg"
import { GetUser } from "../../Service/GetApi/GetUser";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

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

  // Lógica de mapeamento para a prop 'dados' dos componentes TabelaProducts
  const produtosData = exibirProdutosAlta
    ? produtos.filter(({ classificacao }: DashProps) => classificacao === "EM_ALTA")
    : exibirProdutosBaixa
    ? produtos.filter(({ classificacao }: DashProps) => classificacao === "EM_BAIXA")
    : produtos;

  const clientesData = exibirClientesAlta
    ? clientes.filter(({ classificacao }: DashProps) => classificacao === "EM_ALTA")
    : exibirClientesBaixa
    ? clientes.filter(({ classificacao }: DashProps) => classificacao === "EM_BAIXA")
    : clientes;

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
                  setExibirProdutosAlta(true);
                  setExibirProdutosBaixa(false);
                }}
                onClickBaixa={() => {
                  setExibirProdutosAlta(false);
                  setExibirProdutosBaixa(true);
                }}
              />
            }
            id="ID"
            percentual="Percentual"
            dados={
              produtosData &&
              produtosData.map((item) => ({
                id: item.id,
                nome: item.nome,
                imagem: (
                  <Link to={`/Produto/${item.id}`}>
                    <img src={ImgNext} alt="" />
                  </Link>
                ),
                percentual: item.percentual,
              }))
            }
          />

          <TabelaProducts
            nav={
              <NavTable
                img={ImgClients}
                title="Clientes"
                onClickAlta={() => {
                  setExibirClientesAlta(true);
                  setExibirClientesBaixa(false);
                }}
                onClickBaixa={() => {
                  setExibirClientesAlta(false);
                  setExibirClientesBaixa(true);
                }}
              />
            }
            id="ID"
            percentual="Percentual"
            dados={
              clientesData &&
              clientesData.map((item) => ({
                id: item.id,
                cliente: item.nome,
                percentual: item.percentual,
              }))
            }
          />
        </S.DivTable>
      </Layout>
    </>
  );
};

export default Dashboard;
