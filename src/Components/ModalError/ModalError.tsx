import * as S from "./ModalError.styled";
import ImgUsuario from "../../assets/img-usuario/usuari-nao-encontrado.jpg";

type ModalErrorProps = {
  error: string;
};

export const ModalError = ({ error }: ModalErrorProps) => {
    const handleReload = () => {
        window.location.reload()
    }
  return (
    <>
      <S.Img src={ImgUsuario} alt="" />
      <S.TextH1>{error}</S.TextH1>
      <S.BtnClose onClick={handleReload}>Fechar</S.BtnClose>
      
    </>
  );
};
