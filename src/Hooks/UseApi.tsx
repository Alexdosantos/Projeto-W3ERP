import axios from "axios";
import { token } from "../Components/Token/Token";

const api = axios.create({
  baseURL: "https://api.predict.app.br",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.token}`,
    "X-TENANT-ID": "arnia",
  },
});

export const useApi = () => ({
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
