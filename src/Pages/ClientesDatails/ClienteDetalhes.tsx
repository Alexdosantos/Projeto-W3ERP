import * as S from './ClienteDetalhe.Style'
import { ExitDatails } from "../../Components/ExitDatails/ExitDatails"
import { Layout } from "../../Components/Layout/Layout"
import { GetUser} from "../../Service/GetApi/GetUser"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import ImgPrev from '../../assets/Icons/left-small.svg.png'
import { SmallBlueCard } from "../../Components/SmallCards/SmallBlueCard/SmallBlueCard"
import { SmallCardWhite } from "../../Components/SmallCards/SmallCardWhite/SmallCardWhite"
import { SmallCardProcentagem } from "../../Components/SmallCardPorcentagem/SmallCardProcentagem"
import TabelaProducts from '../../Components/TableDasboard/TableProducts'

export const ClienteDetalhes = () => {
  const { id } = useParams();
  const { data: produtosResumo } = useQuery<Root>(["produtosResumo", id], () =>
    GetUser.produtosResumo(id)
  );
  console.log(produtosResumo);
  const { data: produtosEmBaixa } = useQuery<Root>(["produtosEmBaixa", id], () =>
    GetUser.produtosEmABaixa(id)
  );
  console.log(produtosEmBaixa);
  const { data: produtosEmAlta} = useQuery<Root>(["produtosEmAlta", id], () =>
    GetUser.produtosEmAlta(id)
  );
  console.log(produtosEmAlta);
  
  const { data: clienteId} = useQuery<Root>(["clienteId", id], () =>
    GetUser.clienteId(id)
  );
  console.log(clienteId);
  return (
    <>
    <Layout>
    <ExitDatails
            url={"/Dashboard"}
            imagem={ImgPrev}
            text="Detalhamento"
            title={clienteId?.nome}
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
          <TabelaProducts nav={""} id="ID" dados={produtosEmBaixa} />
          <TabelaProducts nav={""} id="ID" dados={produtosEmAlta} />
        </S.DivTable>

    </Layout>
   
    
    </>
  )
}
