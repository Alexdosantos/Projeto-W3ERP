import * as S from "./Sidebar.Style";
import Logo from "../../assets/Logo/logo.svg";
import ChartsLine from "../../assets/Icons/chart-line.svg";
import ChartsPie from "../../assets/Icons/pie-two.svg";
import Mekeups from "../../assets/Icons/facial-cleanser.svg";
import Saly from "../../assets/ImgSupport/Saly.png";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <S.CardBoxGeneral>
      <Link to={"/Dashboard"}>
      <S.Logo src={Logo} alt="" />
      </Link>
  
      <S.DivGeneralIcons>
        <S.StyledLink to="/Dashboard">
          <S.BtnDashbord id="dashboard">
            <img src={ChartsPie} alt="" />
            Dashbord
          </S.BtnDashbord>
        </S.StyledLink>

        <S.StyledLink to={"/Predicoes"}>
          <S.BtnPredicoes  id="predicoes">
            <img src={ChartsLine} alt="" />
            Predições
          </S.BtnPredicoes>
        </S.StyledLink>
        <S.StyledLink to={"/Produtos"}>
          <S.BtnProdutos id="produtos">
            <img src={Mekeups} alt="" />
            Produtos
          </S.BtnProdutos>
        </S.StyledLink>
      </S.DivGeneralIcons>

      <S.DivSupport id="contact">
        <S.ImgSupport src={Saly} alt="" />
        <S.TextInformation>
          Precinsando de ajuda ou suporte em algo
        </S.TextInformation>
        <S.BtnContact>Fale conosco</S.BtnContact>
      </S.DivSupport>
    </S.CardBoxGeneral>
  );
};
