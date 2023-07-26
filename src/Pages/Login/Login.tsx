import {
  Checkbox,
  InputAdornment,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseApi } from "../../Service/PostApi/PostUser";
import ImgLogin from "../../assets/ImgLogin/ImgLogin.jpeg";
import * as S from "./Login.Style";
import { ModalError } from "../../Components/ModalError/ModalError";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [erro, setErro] = useState<string | null>(null);
  const [erroEmail, setErroEmail] = useState<string | null>(null);
  const [erroSenha, setErroSenha] = useState<string | null>(null);

  const navigate = useNavigate();
  const api = UseApi();

  const setToken = (token: string) => {
    localStorage.setItem("AUTH_TOKEN", token);
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !senha) {
      setErroEmail(!email ? "Preencha o campo Email" : null);
      setErroSenha(!senha ? "Preencha o campo Senha" : null);
      return;
    }

    try {
      const data = await api.login(email, senha);
      setToken(data.token);
      navigate("/Dashboard");
    } catch (error) {
      setErroEmail(null);
      setErroSenha(null);
      setErro("Usuário não encontrado");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErroEmail(null);
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErroSenha(null);
    setSenha(e.target.value);
  };

  return (
    <>
      <S.DivErro>{erro && <ModalError error={erro} />}</S.DivErro>

      <form action="" onSubmit={handleForm}>
        <S.CardBoxGeneral>
          <S.CardBoxForm>
            <div>
              <S.TextH3>Seja bem vindo!</S.TextH3>
              <S.TitleH1>Realise seu Login</S.TitleH1>
            </div>
            <S.DivInputsLogin>
              <S.StyledTextField
                label="E-mail"
                type="text"
                value={email}
                onChange={handleEmailChange}
                InputProps={{
                  style: {
                    color: "black",
                    borderRadius: "10px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      {erroEmail && !email ? (
                        <S.ErroEmail>*preecha o campo Email*</S.ErroEmail>
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              <S.StyledTextField
                label="Senha"
                type="password"
                value={senha}
                onChange={handleSenhaChange}
                InputProps={{
                  style: {
                    color: "black",
                    borderRadius: "10px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      {erroSenha && !senha ? (
                        <S.ErroEmail>*preecha o campo Senha*</S.ErroEmail>
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </S.DivInputsLogin>

            <S.DivToRemember>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography variant="body1" fontWeight={600}>
                      LEMBRAR-ME
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </div>

              <div>
                <p>Esqueci minha senha</p>
              </div>
            </S.DivToRemember>

            <S.BtnLogin type="submit">Entrar</S.BtnLogin>
          </S.CardBoxForm>

          <div>
            <S.ImgLogin src={ImgLogin} alt="" />
          </div>
        </S.CardBoxGeneral>
      </form>
    </>
  );
};

export default Login;
