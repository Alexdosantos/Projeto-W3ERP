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
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [exibirProdutosAlta, setExibirProdutosAlta] = useState(false);
  const [exibirProdutosBaixa, setExibirProdutosBaixa] = useState(false);
  const [exibirClientesAlta, setExibirClientesAlta] = useState(false);
  const [exibirClientesBaixa, setExibirClientesBaixa] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const { content } = await GetUser.produtos();
        setProdutos(content);
      } catch (error) {
        console.error("Erro ao obter produtos da API:", error);
      }
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const { content } = await GetUser.cliente();
        setClientes(content);
      } catch (error) {
        console.error("Erro ao obter clientes da API:", error);
      }
    };

    fetchClientes();
  }, []);

  useEffect(() => {
    const fetchProdutosAlta = async () => {
      try {
        const { content } = await GetUser.produtosAlta();
        setProdutos(content);
      } catch (error) {
        console.error("Erro ao obter produtos em alta da API:", error);
      }
    };

    fetchProdutosAlta();
  }, []);

  useEffect(() => {
    const fetchProdutosBaixa = async () => {
      try {
        const { content } = await GetUser.produtosBaixa();
        setProdutos(content);
      } catch (error) {
        console.error("Erro ao obter produtos em baixa da API:", error);
      }
    };

    fetchProdutosBaixa();
  }, []);

  useEffect(() => {
    const fetchClientesBaixa = async () => {
      try {
        const { data } = await GetUser.clienteBaixa();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao obter clientes em baixa da API:", error);
      }
    };

    fetchClientesBaixa();
  }, []);

  const btnAlta = () => {
    setExibirClientesAlta(true);
    setExibirClientesBaixa(false);
  };
  const btnBaixa = () => {
    setExibirClientesBaixa(true);
    setExibirClientesAlta(false);
  };
  const btnProdutoAlta = () => {
    setExibirProdutosAlta(true);
    setExibirProdutosBaixa(false);
  };
  const btnProdutoBaixa = () => {
    setExibirProdutosAlta(true);
    setExibirProdutosBaixa(false);
  };



  const produtosExibidos = exibirProdutosAlta
    ? produtos.filter(({ classificacao }) => classificacao === "EM_ALTA")
    : exibirProdutosBaixa
    ? produtos.filter(({ classificacao }) => classificacao === "EM_BAIXA")
    : produtos;

  const clientesExibidos = exibirClientesAlta
    ? clientes.filter(({ classificacao }) => classificacao === "EM_ALTA")
    : exibirClientesBaixa
    ? clientes.filter(({ classificacao }) => classificacao === "EM_BAIXA")
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
                onClickAlta={btnProdutoAlta}
                onClickBaixa={btnProdutoBaixa}
              />
            }
            id="ID"
            percentual="Percentual"
            dados={produtosExibidos}
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
            dados={clientesExibidos}
          />
        </S.DivTable>
      </Layout>
    </>
  );
};

export default Dashboard;
