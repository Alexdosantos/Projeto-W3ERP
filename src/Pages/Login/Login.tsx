import {Checkbox,InputAdornment,Typography,FormControlLabel} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApi } from "../../Hooks/useApi";

import ImgLogin from "../../assets/ImgLogin/ImgLogin.jpeg";
import * as S from "./Login.Style";
import "../../teste.css";


const Login = () => {
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  const navigate = useNavigate();
  const {login} = useApi()

  

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);

    try {
      const data = await login(email, senha);
      console.log("Response:", data);
      navigate("/Dashbord")
    }catch (error) {
      console.log(error)
    }

   
  };

  return (
    <>
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
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: {
                  color: "black",
                  borderRadius: "10px",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    {/* Aqui você pode adicionar o ícone ou qualquer outro conteúdo */}
                  </InputAdornment>
                ),
              }}
            />

            <S.StyledTextField
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              InputProps={{
                style: {
                  color: "black",
                  borderRadius: "10px",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    {/* Aqui você pode adicionar o ícone ou qualquer outro conteúdo */}
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

          <S.BtnLogin type="submit" >
            Entrar
          </S.BtnLogin>
        </S.CardBoxForm>

        <div>
          <S.ImgLogin src={ImgLogin} alt="" />
        </div>
      </S.CardBoxGeneral>
      </form>
    </>
  );
};

export default Login