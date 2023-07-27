import { BrowserRouter, Routes, Route} from "react-router-dom";
import  {AuthenticLogin}  from "../Context/AuthenticLogin";

import Login from "../Pages/Login/Login";
import Dashbord from "../Pages/Dashboard/Dashboard";
import Predicoes from "../Pages/Predicoes/Predicoes";
import Produtos from "../Pages/Produtos/Produtos";
import { PredicoesDatails } from "../Pages/Predicoes/PredicoesDatails/PredicoesDatails";
import { ProdutosDetails} from "../Pages/Produtos/ProdutcsDetails/ProdutosDetails";
import { ClienteDetalhes } from "../Pages/ClientesDatails/ClienteDetalhes";


const RoutesProjects = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
         
          <Route path="Dashboard" element={<AuthenticLogin> <Dashbord /></AuthenticLogin> } />
          <Route path="Predicoes" element={<AuthenticLogin><Predicoes /></AuthenticLogin>} />
          <Route  path="/Predicoes/:id" element={<PredicoesDatails/>}/>
          <Route path="Produtos" element={<AuthenticLogin><Produtos /></AuthenticLogin>} /> 
          <Route path="/Produtos/detalhes/produtos/:id" element={<ProdutosDetails />} />
          <Route path="/Produtos/detalhes/clientes/:id" element={<ClienteDetalhes/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesProjects;
