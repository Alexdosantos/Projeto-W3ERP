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
  produtos: async ( ) => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/produto", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
      
    });
    return response.data;
  },
  produtosAlta: async ( ) => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/produtos?classificacao=EM_ALTA", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
      
    });
    return response.data;
  },
  produtosBaixa: async ( ) => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/produtos?classificacao=EM_BAIXA", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
      
    });
    return response.data;
  },
  cliente: async ( ) => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/cliente", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
      
    });
    return response.data;
  },
  clienteAlta: async ( ) => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/clientes?classificacao=EM_ALTA", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
      
    });
    return response.data;
  },
  clienteBaixa: async ( ) => {
    const token = localStorage.getItem("AUTH_TOKEN") || "";
    const response = await api.get("/app/clientes?classificacao=EM_BAIXA", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
      
    });
    return response.data;
  },
};
