import * as S from "./Predicoes.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import { CardsInformation } from "../../Components/PredicoesCards/CardsInformation";

const Predicoes = () => {
  return (
    <>
      <Layout>
        <S.Container>
          <S.Title>Predições</S.Title>
          <Search placeholder="Pesquise uma palavra-chave" />
        </S.Container>
        <S.DivCardInformation>
            <CardsInformation />
        </S.DivCardInformation>
      </Layout>
    </>
  );
};
export default Predicoes;
