import React from "react";
import Tour from "reactour";
// import { useState } from "react";
type StepsProps = {
  selector: string;
  content: string;
};

const steps: StepsProps[] = [
  {
    selector: "#dashboard",
    content:
      "Este é o painel do Dashboard, onde você pode visualizar os produtos e clientes em alta e baixa, além de obter dados percentuais e realizar verificações em tabelas sofisticadas.",
  },
  {
    selector: "#predicoes",
    content:
      "Este é o painel de previsões no qual você pode verificar informações sobre empresas, os produtos que elas precisam comprar e as datas das próximas compras.",
  },
  {
    selector: "#produtos",
    content:
      "Bem-vindo ao painel de produtos! Aqui você pode pesquisar por produtos de sua escolha, filtrar entre os 'em Alta' ou 'em Baixa', além de obter informações mais detalhadas sobre um produto específico ao clicar em seu nome e ser direcionado para a página de detalhes.",
  },
  {
    selector: "#user-Login",
    content:
      "Essa é a sessão de logout e configuração do sistema , caso precise realizar alguma configuração ou sair do sistema.",
  },
  {
    selector: "#dashInformation",
    content:
      "Bem-vindo à Dashboard Information! Aqui você terá acesso a todos os dados atualizados instantaneamente por meio de nossa infraestrutura de alta tecnologia de dados.",
  },
  {
    selector: "#products-High",
    content: "Esse é o card de informações dos produtos em Alta",
  },
  {
    selector: "#products-Low",
    content: "Esse é o card de informações dos produtos em baixa",
  },
  {
    selector: "#clients-High",
    content: "Esse é o card de informações dos clientes em Alta",
  },
  {
    selector: "#clients-Low",
    content: "Esse é o card de informações dos clientes em baixa",
  },
  {
    selector: "#filter",
    content: "Aqui você pode filtrar por mais dados em datas especificas ",
  },
  {
    selector: "#contact",
    content:
      "Caso preciso entrar em contato conosco , basta aperta no botão Fale Conosco ",
  },
  {
    selector: "#table-Information",
    content:
      "Bem-vindo à nossa Tabela de Informações, onde você pode clicar nos botões 'EM ALTA' OU 'EM BAIXA' para obter um filtro dos produtos mais populares ou menos populares. Além disso, você pode clicar em um produto específico para obter informações mais detalhadas sobre ele.",
  },
];
const TourComponent = () => {
  const [isTourOpen, setIsTourOpen] = React.useState(false);
  const [isNewUser, setIsNewUser] = React.useState(true);

  React.useEffect(() => {
    const hasViewedTour = localStorage.getItem('hasViewedTour');
    if (hasViewedTour) {
      setIsTourOpen(false);
    } else {
      setIsNewUser(true)
    }
  }, []);

  const handleCloseTour = () => {
    localStorage.setItem('hasViewedTour', 'true');
    setIsNewUser(false);
  };

  return (
    <div>
      {isNewUser && (
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={handleCloseTour} // Correção aqui
        />
      )}
    </div>
  );
};

export default TourComponent;