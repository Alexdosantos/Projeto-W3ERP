import * as S from "./DashbordData.Styled";
import Caledario from "../../assets/Icons/calendar.svg";

import HighCard from "../DashbordCards/HighCard/HighCard";
import LowCard from "../DashbordCards/LowCard/LowCard";
import { useQuery } from "react-query";
import { GetUser } from "../../Service/GetApi/GetUser";


export const DashbordData = () => {
  const {data:resumo } = useQuery('resumo' , GetUser.resumo)
  const graficsProdutoAlta= [{ name: 'Produto Alta', value: resumo?.percentualTotalProdutosAlta}];
  const graficsProdutoBaixa = [{ name: 'Produto Baixa', value:resumo?.percentualTotalProdutosBaixa }];
  const graficsPClientAlta = [{ name: 'Cliente Alta', value: resumo?.percentualTotalClientesAlta }];
  const graficsClienteBaixa = [{ name: 'Cliente Baixa', value: resumo?.percentualTotalClientesBaixa }];

  return (
    <>
      <S.Container>
        <S.Container1>
          <div>
            <S.TextH4>Dashboard</S.TextH4>
          </div>

          <S.ContainerCaledarios>
            <img src={Caledario} alt="" />
            <S.TextP>Mostrar:</S.TextP>
            <div>
              <S.StyledSelect>
                <option value="">Filtro</option>
                <option value="today">Hoje</option>
                <option value="yesterday">Ontem</option>
                <option value="week">Essa Semana</option>
                <option value="month">Esse Mês</option>
                <option value="3months">Em 3 Meses</option>
                <option value="6months">Em 6 Meses</option>
                <option value="year">Em Anual</option>
              </S.StyledSelect>
            </div>
          </S.ContainerCaledarios>
        </S.Container1>
        <S.DivCardsInformation>
          <HighCard data={graficsProdutoAlta} title="Produtos" total={resumo?.quantidadeProdutosAlta} porcentagem={resumo?.percentualVariacaoProdutosAlta}  />
          <LowCard data={graficsProdutoBaixa} title="Produtos" total={resumo?.quantidadeProdutosBaixa} porcentagem={resumo?.percentualVariacaoProdutosBaixa} />
          <HighCard data={graficsPClientAlta} title="Clientes" total={resumo?.quantidadeClientesAlta} porcentagem={resumo?.percentualVariacaoClientesAlta} />
          <LowCard data={graficsClienteBaixa} title="Clientes" total={resumo?.quantidadeClientesBaixa} porcentagem={resumo?.percentualVariacaoClientesBaixa}  />
        </S.DivCardsInformation>

        
      </S.Container>
    </>
  );
};
