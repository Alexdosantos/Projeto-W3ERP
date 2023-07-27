import { api } from "../../Hooks/useApi";

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
});
