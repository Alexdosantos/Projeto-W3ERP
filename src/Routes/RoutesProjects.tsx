import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Dashbord from "../Pages/Dashboard/Dashboard";
import Predicoes from "../Pages/Predicoes/Predicoes";
import Produtos from "../Pages/Produtos/Produtos";


const RoutesProjects = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
         
          <Route path="Dashbord" element={<Dashbord />} />
          <Route path="Predicoes" element={<Predicoes />} />
          <Route path="Produtos" element={<Produtos />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesProjects;
