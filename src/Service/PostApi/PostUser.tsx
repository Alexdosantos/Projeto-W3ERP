import { api } from "../../Hooks/UseApi";

export const UseApi = () => ({
    login: async (email: string , senha: string) => {
      const response = await api.post("/central/autenticacao/login", {
        email,
        senha,
      });     
      return response.data;
    },
    validateToken: async (token: string) => {
      const response = await api.post("/central/autenticacao/login", { token });
      return response.data;
    },
    logout: async () => {
      const response = await api.post("/central/autenticacao/login");
      return response.data;
    },
    
    
  
  });