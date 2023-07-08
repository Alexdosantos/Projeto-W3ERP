import { api } from "./Api";
import { UserToken } from "../Components/Token/Token";

type PostProps = {
  email: string;
  senha: string;
};

export const FetchPost = async ({ email, senha }: PostProps): Promise<UserToken> => {
  try {
    const response = await api.post('/central/autenticacao/login', {
      email,
      senha
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // Retorne um valor nulo em caso de erro, em vez de um array vazio
  }
};
