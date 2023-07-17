import * as S from "./Products.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import { useQuery } from "react-query";
import { GetUser } from "../../Service/GetApi/GetUser";
import Filter from "../../assets/Icons/Filter.png";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";
import { useState } from "react";


const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: List } = useQuery(["ProdutosList", searchTerm], () =>
    GetUser.produtos(searchTerm)
  );

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
    }
  };

  return (
    <>
      <Layout>
        <S.TitleH1>Produtos</S.TitleH1>
        <S.Wapper>
          <Search
            placeholder="Pesquise uma palavra-chave"
            onKeyDown={handleSearch}
          />
          <img src={Filter} alt="" />
        </S.Wapper>
        <S.DivTable>
          <TabelaProducts
            nav=""
            id="ID"
            percentual="Percentual"
            dados={
              List &&
              List.map((item) => ({
                id: item.id,
                classificacao: item.classificacao,
                nome: (
                  <S.LinkProdutos to={`/Produtos/detalhes/produtos/${item.id}`}>
                    {item.nome}
                  </S.LinkProdutos>
                ),
                percentual: item.percentual,
              }))
            }
          />
        </S.DivTable>
      </Layout>
    </>
  );
};

export default Produtos;
