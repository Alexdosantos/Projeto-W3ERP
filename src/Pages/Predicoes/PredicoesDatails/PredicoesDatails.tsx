import * as S from "./PredicoesDatails.Style";
import { Link } from "react-router-dom";
import { Layout } from "../../../Components/Layout/Layout";
import ImgLeft from "../../../assets/Icons/left-small.svg.png";
import { useParams } from "react-router-dom";
import { BannerDatailsPredicoes } from "../../../Components/BannerInformation/BannerDatailsPredicoes";
import TabelaProducts from "../../../Components/TableDasboard/TableProducts";
import { GetUser } from "../../../Service/GetApi/GetUser";
import { useQuery } from "react-query";
import { HeardHistorico } from "../../../Components/HeardHistorico/HeardHistorico";
import { HeardProdutoEsgotado } from "../../../Components/HeardProdutoEsgotado/HeardProdutoEsgotado";



export const PredicoesDatails = () => {
  const { id } = useParams();
  const { data: historico } = useQuery(["predicaoHistorico", id], () =>
    GetUser.predicaoHistorico(id)
  );
  const { data: esgotado } = useQuery(["predicaoEsgotado", id], () =>
    GetUser.predicaoEsgotados(id)
  );
  const { data: clienteId } = useQuery(["cliente", id], () =>
    GetUser.clienteId(id)
  );
  console.log(clienteId);
  console.log(historico );
  console.log(esgotado );

  return (
    <>
      <Layout>
        <S.Wapper>
          <Link to={"/Predicoes"}>
            <div>
              <S.ImgLeft src={ImgLeft} alt="" />
            </div>
          </Link>
          <div>
            <S.TitleH4>Predição</S.TitleH4>
          </div>
        </S.Wapper>
        <BannerDatailsPredicoes
          title={clienteId?.nome}
          phone={clienteId?.whatsapp}
          email={clienteId?.email}
        />
        <S.DivTable>
          <TabelaProducts nav={<HeardHistorico/>} id="ID" dados={historico} />
          <TabelaProducts nav={<HeardProdutoEsgotado/>} id="ID" dados={esgotado} />
        </S.DivTable>
      </Layout>
    </>
  );
};
