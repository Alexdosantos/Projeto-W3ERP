import React from "react";
import * as S from "./Predicoes.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import { CardsInformation } from "../../Components/PredicoesCards/CardsInformation";

import { useQuery } from "react-query";
import { GetUser } from "../../Service/GetApi/GetUser";

const Predicoes = () => {
  const { data: response } = useQuery("produtos", GetUser.predicaoList);
  console.log(response)

  return (
    <Layout>
      <S.Container>
        <S.Title>Predições</S.Title>
        <Search placeholder="Pesquise uma palavra-chave" />
      </S.Container>
      <S.DivCardInformation>
        {response &&
          response.map((item, index) => (
            <CardsInformation
              key={index}
              company={item.nome}
              dados={item.produtos.map((produto) => ({
                produto: produto.nome,
                proximaCompra: produto.proximaCompra,
              }))}
            />
          ))}
      </S.DivCardInformation>
    </Layout>
  );
};

export default Predicoes;
