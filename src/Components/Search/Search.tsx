import * as S from "./Search.styled"
import { AiOutlineSearch } from "react-icons/ai";


type SearchProps = {
  placeholder: string;
};

export const Search = ({ placeholder }: SearchProps) => {
  return (
    <S.Container>
      <S.Input type="text" placeholder={placeholder} />
      <div>
      <AiOutlineSearch size={40} 
      style={{ fontSize:
       "10px", paddingLeft: "45px", 
       paddingTop: "5px" 
       ,color: "#001C98"}} />

      </div>
    </S.Container>
  );
};
