import { api } from "../../Hooks/UseApi";

export const GetUser = {
  userName: async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/central/usuario/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao obter o nome do usuário:", error);
      throw error;
    }
  },
  produtos: async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/produto", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      throw error;
    }
  },

  cliente: async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/cliente", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter os clientes:", error);
      throw error;
    }
  },
  resumo: async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/dashboard/resumo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao obter o resumo:", error);
      throw error;
    }
  },
  predicaoList: async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/predicao", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
  predicaoHistorico: async (id:number | string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(`/app/predicao/${id}/historico `, {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      });
      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
  predicaoEsgotados: async (id:number) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(`/app/predicao/${id}/esgotando `, {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      });
      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
  clienteId: async (id:number) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(`/app/cliente/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
};
