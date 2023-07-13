import * as S from "./PredicoesDatails.Style";
import { Link } from "react-router-dom";
import { Layout } from "../../../Components/Layout/Layout";
import ImgLeft from "../../../assets/Icons/left-small.svg.png";
import { useParams } from "react-router-dom";
import { BannerDatailsPredicoes } from "../../../Components/BannerInformation/BannerDatailsPredicoes";
import TabelaProducts from "../../../Components/TableDasboard/TableProducts";
import { GetUser } from "../../../Service/GetApi/GetUser";
import { useQuery } from "react-query";
import { ReactNode } from "react";

export interface Root {
  cpfcnpj: string;
  email: string;
  id: string;
  nome: string;
  telefone: string;
  whatsapp: string;
}

  

export const PredicoesDatails = () => {
  const { id } = useParams();
  const { data: historico } = useQuery<Root[]>(["predicaoHistorico", id], () =>
    GetUser.predicaoHistorico(id)
  );
  const { data: esgotado } = useQuery(["predicaoEsgotado", id], () =>
    GetUser.predicaoEsgotados(id)
  );
  const { data: clienteId } = useQuery(["cliente", id], () =>
    GetUser.clienteId(id)
  );
  console.log(clienteId);

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
          <TabelaProducts
            nav="Histórico"
            id="ID"
            percentual="Percentual"
            dados={historico}
          />
          <TabelaProducts
            nav="Histórico"
            id="ID"
            percentual="Percentual"
            dados={esgotado}
          />
        </S.DivTable>
      </Layout>
    </>
  );
};
