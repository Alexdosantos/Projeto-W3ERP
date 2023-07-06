import * as S from "./Predicoes.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import { CardsInformation } from "../../Components/PredicoesCards/CardsInformation";

const Predicoes = () => {
  const data = [
    { company: "Hotel", produto: "Pão", proximaCompra: "21/02/23" },
    { company: "Padaria", produto: "Arroz", proximaCompra: "10/05/2023" },
    { company: "Mercado", produto: "Macarrão", proximaCompra: "Tomate" },
    { company: "Hotel", produto: "Frango", proximaCompra: "Batatas" },
    { company: "Hotel", produto: "Leite", proximaCompra: "Pão" },
    { company: "Hotel", produto: "Álcool", proximaCompra: "Desinfetante" },
    { company: "Hotel", produto: "Sabonete", proximaCompra: "Shampoo" },
    { company: "Hotel", produto: "Pano", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
    { company: "Hotel", produto: "Maçã", proximaCompra: "Banana" },
  ];

  return (
    <>
      <Layout>
        <S.Container>
          <S.Title>Predições</S.Title>
          <Search placeholder="Pesquise uma palavra-chave" />
        </S.Container>
        <S.DivCardInformation>
          {data.map((item, index) => (
            <CardsInformation
              key={index}
              company={item.company}
              dados={[item]}
            />
          ))}
        </S.DivCardInformation>
      </Layout>
    </>
  );
};
export default Predicoes;
