import { api } from "../../Hooks/UseApi";

export const GetUser = {
  userName: async () => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/central/usuario/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  produtos: async () => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/produto", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.content;
  },

  cliente: async () => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/cliente", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.content;
  },
  resumo: async () => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/dashboard/resumo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
