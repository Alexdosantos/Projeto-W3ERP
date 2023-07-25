import ImgUser from "../../assets/Login/user.svg";
import ImgDropdown from "../../assets/Login/chevrondown.svg";
import * as S from "./UserLogin.style";
import { useEffect, useState } from "react";
import { GetUser } from "../../Service/GetApi/GetUser";
import { ModalLogout } from "../ModalLogout/ModalLogout";

interface UserData {
  nome: string;
  email: string;
}

export const UserLogin = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchGetUser = async () => {
      try {
        const data: UserData = await GetUser.userName();
        setNome(data.nome);
        setEmail(data.email);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGetUser();
  }, []);

  return (
    <>
      <S.Container id="user-Login">
        <div>
          <img src={ImgUser} alt="Usuário" />
        </div>

        <div>
          <S.TitleUser>{nome}</S.TitleUser>
          <S.TitleEmail>{email}</S.TitleEmail>
        </div>
        <div>
          <S.BtnDropdown onClick={() => setOpenModal(!openModal)}>
            <img src={ImgDropdown} alt="" />
          </S.BtnDropdown>
        </div>
        <ModalLogout isOpen={openModal} />
      </S.Container>
    </>
  );
};
