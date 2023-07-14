import * as React from "react";
import * as S from "./Predicoes.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import { CardsInformation } from "../../Components/PredicoesCards/CardsInformation";
import { useQuery } from "react-query";
import { GetUser } from "../../Service/GetApi/GetUser";

interface IItem {
  nome: string;
  produtos: string[];
  dados: []
  id: number;
}

const Predicoes: React.FC = () => {
  const { data: response } = useQuery<IItem[]>(
    "produtos",
    GetUser.predicaoList
  );

  return (
    <Layout>
      <S.Container>
        <S.Title>Predições</S.Title>

        <Search onKeyDown={""} placeholder="Pesquise uma palavra-chave" />
      </S.Container>
      <S.DivCardInformation>
        {response &&
          response.map((item: IItem, index: number) => (
            // <Link to={`/Precicoes/${item.id}`}>
            <CardsInformation
              key={index}
              company={item.nome}
              dados={item.produtos}
              id={item.id}
            />
            // </Link>
          ))}
      </S.DivCardInformation>
    </Layout>
  );
};

export default Predicoes;
