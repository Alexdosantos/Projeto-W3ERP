import { GetUser } from "../../../Service/GetApi/GetUser";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ExitDatails } from "../../../Components/ExitDatails/ExitDatails";
import { Layout } from "../../../Components/Layout/Layout";
import { SmallCardProcentagem } from "../../../Components/SmallCardPorcentagem/SmallCardProcentagem";
import { SmallBlueCard } from "../../../Components/SmallCards/SmallBlueCard/SmallBlueCard";
import { SmallCardWhite } from "../../../Components/SmallCards/SmallCardWhite/SmallCardWhite";
import TabelaProducts from "../../../Components/TableDasboard/TableProducts";
import ImgPrev from "../../../assets/Icons/left-small.svg.png";
import ImgCBaixa from "../../../assets/Icons/ClienteEmBaixa.png";
import ImgCAlta from "../../../assets/Icons/ClienteEmAlta.png";

import * as S from "./ProdutosDetails.Style";
import { HeardClienteTable } from "../../../Components/HeardClienteTable/HeardClienteTable";

export const ProdutosDetails = () => {
  const { id } = useParams();
  const { data: produtosResumo } = useQuery(["produtosResumo", id], () =>
    GetUser.produtosResumo(id)
  );
  console.log(produtosResumo);

  const { data: clienteEmBaixa } = useQuery(["clienteEmBaixa", id], () =>
    GetUser.clienteEmBaixa(id)
  );
  console.log(clienteEmBaixa);

  const { data: clienteEmAlta } = useQuery(["clienteEmAlta", id], () =>
    GetUser.clienteEmAlta(id)
  );
  console.log(clienteEmAlta);
  return (
    <>
      <Layout>
        <ExitDatails
          url={"/Dashboard"}
          imagem={ImgPrev}
          text="Detalhamento"
          title={produtosResumo?.nome}
        />

        <S.Wapper>
          <SmallBlueCard
            title="Média 120 dias"
            text={produtosResumo?.media120Dias}
          />
          <SmallCardWhite
            title="Últimos 30 dias "
            text={produtosResumo?.ultimos30Dias}
            porcentagem={
              <SmallCardProcentagem
                porcentagem={produtosResumo?.percentualUltimos30Dias}
              />
            }
          />
          <SmallCardWhite
            title="Últimos 60 dias "
            text={produtosResumo?.ultimos60Dias}
            porcentagem=""
          />
          <SmallCardWhite
            title="Últimos 90 dias "
            text={produtosResumo?.ultimos90Dias}
            porcentagem=""
          />
          <SmallCardWhite
            title="Últimos 120 dias "
            text={produtosResumo?.ultimos120Dias}
            porcentagem=""
          />
        </S.Wapper>

        <S.DivTable>
          <TabelaProducts
            nav={<HeardClienteTable img={ImgCBaixa} title="Cliente em baixa" />}
            id="ID"
            dados={clienteEmBaixa}
          />
          <TabelaProducts
            nav={<HeardClienteTable img={ImgCAlta} title="Cliente em alta" />}
            id="ID"
            dados={clienteEmAlta}
          />
        </S.DivTable>
      </Layout>
    </>
  );
};
