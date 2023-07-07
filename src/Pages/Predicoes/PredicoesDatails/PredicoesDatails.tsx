import * as S from "./PredicoesDatails.Style";
import { Link } from "react-router-dom";
import { Layout } from "../../../Components/Layout/Layout";
import ImgLeft from "../../../assets/Icons/left-small.svg";
import { BannerDatailsPredicoes } from "../../../Components/BannerInformation/BannerDatailsPredicoes";
import TabelaProducts from "../../../Components/TableDasboard/TableProducts";

export const PredicoesDatails = () => {
  const data = [
    {
      id: 1,
      produto: "Produto A",
      ultimaCompra: "01/01/2022",
      qtd: 10,
      darbaixa: "sim",
    },
    {
      id: 2,
      produto: "Produto B",
      ultimaCompra: "05/02/2022",
      qtd: 15,
      darbaixa: "sim",
    },
    {
      id: 3,
      produto: "Produto C",
      ultimaCompra: "10/03/2022",
      qtd: 8,
      darbaixa: "sim",
    },
    {
      id: 4,
      produto: "Produto D",
      ultimaCompra: "15/04/2022",
      qtd: 20,
      darbaixa: "sim",
    },
    // Adicione mais objetos conforme necessário
  ];
  return (
    <>
      <Layout>
        <S.Wapper>
          <Link to={"/Predicoes"}>
            <S.DivImgLeft>
              <S.ImgLeft src={ImgLeft} alt="" />
            </S.DivImgLeft>
          </Link>
          <div>
            <S.TitleH4>Predição</S.TitleH4>
          </div>
        </S.Wapper>
        <BannerDatailsPredicoes
          title="Hotel Ibis"
          phone="11 99448-5214"
          email="hotelIbis@gmail.com"
        />
        <S.DivTable>
          <TabelaProducts
            nav="Histórico"
            id="ID"
            percentual="Percentual"
            dados={data}
          />
          <TabelaProducts
            nav="Histórico"
            id="ID"
            percentual="Percentual"
            dados={data}
          />
        </S.DivTable>
      </Layout>
    </>
  );
};
