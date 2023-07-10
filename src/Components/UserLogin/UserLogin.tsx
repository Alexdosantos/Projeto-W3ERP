import ImgUser from "../../assets/Login/user.svg";
import ImgDropdown from "../../assets/Login/chevrondown.svg";
import * as S from "./UserLogin.style";
import { useEffect, useState } from "react";
import { GetUser } from "../../Service/GetApi/GetUser";

export const UserLogin = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const api = GetUser();

  useEffect(() => {
    const authToken = localStorage.getItem("AUTH_TOKEN") as string;
    const fetchGetUser = async () => {
      try {
        const data = await api.userName(authToken);
        setNome(data.nome);
        setEmail(data.email);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGetUser();
  }, [api]);

  return (
    <>
      <S.Container>
        <div>
          <img src={ImgUser} alt="Usuário" />
        </div>

        <div>
          <S.TitleUser>{nome}</S.TitleUser>
          <S.TitleEmail>{email}</S.TitleEmail>
        </div>
        <div>
          <S.BtnDropdown>
            <img src={ImgDropdown} alt="" />
          </S.BtnDropdown>
        </div>
      </S.Container>
    </>
  );
};
