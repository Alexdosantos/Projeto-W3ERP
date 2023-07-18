import * as React from "react";
import * as S from "./Predicoes.Style";
import { Layout } from "../../Components/Layout/Layout";
import { Search } from "../../Components/Search/Search";
import {
  CardsInformation,
  TableData,
} from "../../Components/PredicoesCards/CardsInformation";
import { useQuery } from "react-query";
import { GetUser } from "../../Service/GetApi/GetUser";

interface IItem {
  nome: string;
  produtos: Array<TableData>;
  id: number;
}

const Predicoes: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");

  const { data: response } = useQuery<IItem[]>(
    ["produtos", search],
    () => GetUser.predicaoList(search)
  );
  console.log(response);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      GetUser.produtosList(search);
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleSearch: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      setSearch(event.currentTarget.value);
    }
  };

  console.log(search);

  return (
    <Layout>
      <S.Container>
        <S.Title>Predições</S.Title>
        <Search
          onKeyDown={handleSearch}
          placeholder="Pesquise uma palavra-chave"
        />
      </S.Container>
      <S.DivCardInformation>
        {response &&
          response.map((item: IItem, index: number) => (
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
