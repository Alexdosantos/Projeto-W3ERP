import { api } from "../../Hooks/UseApi";

type TokeResponse = {
  token: string;
};
export const UseApi = () => ({
  login: async (email: string, senha: string): Promise<TokeResponse> => {
    const response = await api.post("/central/autenticacao/login", {
      email,
      senha,
    });
    return response.data;
  },
  validateToken: async (token: string): Promise<TokeResponse> => {
    const response = await api.post("/central/autenticacao/login", { token });
    return response.data;
  },
});
