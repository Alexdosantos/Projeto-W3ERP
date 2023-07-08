import * as S from "./Products.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import Filter from "../../assets/Icons/Filter.png";
import TabelaProducts from "../../Components/TableDasboard/TableProducts";

const Produtos = () => {
  const data = [
    { id: "001", produto: "Pão", status: "Em Alta", percentual: "+42" },
    { id: "002", produto: "Arroz", status: "Em Alta", percentual: "+48" },
    { id: "003", produto: "Macarrão", status: "Em Baixa", percentual: "+52" },
    { id: "004", produto: "Frango", status: "Em Alta", percentual: "+82" },
    { id: "005", produto: "Leite", status: "Em Baixa", percentual: "+32" },
    { id: "006", produto: "Álcool", status: "Em Alta", percentual: "+2" },
    { id: "007", produto: "Sabonete", status: "Em Baixa", percentual: "+10" },
    { id: "008", produto: "Pano", status: "Em Alta", percentual: "+26" },
    { id: "009", produto: "Maçã", status: "Em Baixa", percentual: "+88" },
  ];
  return (
    <>
      <Layout>
        <S.TitleH1>Produtos</S.TitleH1>
        <S.Wapper>
          <Search placeholder="Pesquiseuma palavra-chave" />
          <img src={Filter} alt="" />
        </S.Wapper>
        <S.DivTable>
          <TabelaProducts
           nav="" 
           id="ID" 
           percentual="Percentual"
           dados={data} />
        </S.DivTable>
      </Layout>
    </>
  );
};

export default Produtos;
