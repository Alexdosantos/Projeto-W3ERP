import ImgUser from "../../assets/Login/user.svg";
import ImgDropdown from "../../assets/Login/chevrondown.svg";
import * as S from "./UserLogin.style";

export const UserLogin = () => {
  return (
    <>
      
        <S.Container>
          <div>
            <img src={ImgUser} alt="Usuário" />
          </div>

          <div>
            <S.TitleUser>Alex Santos</S.TitleUser>
            <S.TitleEmail>alex@yahoo.com</S.TitleEmail>
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
