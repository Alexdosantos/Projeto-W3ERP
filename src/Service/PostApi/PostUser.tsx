import { api } from "../../Hooks/UseApi";


export const UseApi = () => ({
 


  
    login: async (email: string , senha: string):Promise<void> => {
      const response = await api.post("/central/autenticacao/login", {
        email,
        senha,
      });     
      return response.data;
    },
    validateToken: async (token: string):Promise<void> => {
      const response = await api.post("/central/autenticacao/login", { token });
      return response.data;
    },
    // logout: async ({setToken}: string | null) => {
    //   localStorage.removeItem('token');
    //   setToken('');
    //   <Navigate to='/' />
    //   // const response = await api.post("/central/autenticacao/login");
    //   // return response.data;
    // },
    
    
  
  });