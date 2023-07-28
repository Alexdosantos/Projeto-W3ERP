import { api } from "../../Hooks/BaseUrlApi";

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
  produtosList: async (query: string, page: number, size: number) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/produto", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          query,
          page,
          size,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      throw error;
    }
  },
  productSearch: async (query: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/produto", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          query,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      throw error;
    }
  },
  produtosPage: async (page: number, size: number) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/produto/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          size,
        },
      });

      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      throw error;
    }
  },
  produtosResumo: async (id: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(`/app/produto/${id}/resumo `, {
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
  produtosEmAlta: async (id: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(
        `/app/cliente/${id}/produtos?classificacao=EM_ALTA `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
  produtosEmABaixa: async (id: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(
        `/app/cliente/${id}/produtos?classificacao=EM_BAIXA `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
  predicaoEsgotados: async (id: string) => {
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
  clienteId: async (id: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(`/app/cliente/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao obter os clientes:", error);
      throw error;
    }
  },
  clienteEmBaixa: async (id: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(
        `/app/produto/${id}/clientes?classificacao=EM_BAIXA`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao obter os clientes:", error);
      throw error;
    }
  },
  clienteEmAlta: async (id: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get(
        `/app/produto/${id}/clientes?classificacao=EM_ALTA`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
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
  predicaoList: async (query: string) => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN") || "";
      const response = await api.get("/app/predicao", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          query,
        },
      });
      return response.data.content;
    } catch (error) {
      console.error("Erro ao obter o predição list:", error);
      throw error;
    }
  },
  predicaoHistorico: async (id: string) => {
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
};
