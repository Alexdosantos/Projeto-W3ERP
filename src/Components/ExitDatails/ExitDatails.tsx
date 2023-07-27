import { Link } from "react-router-dom";
import * as S from "./ExitDatails.style";

type ExitDatailsProps = {
  imagem: string;
  title: string;
  text: string;
  url: string;
};
export const ExitDatails = ({ url, imagem, title, text }: ExitDatailsProps) => {
  return (
    <>
      <S.Wapper>
        <Link to={url}>
          <img src={imagem} alt="prev" />
        </Link>

        <S.Text>{text}</S.Text>
      </S.Wapper>
      <S.TitleH3>{title}</S.TitleH3>
    </>
  );
};
