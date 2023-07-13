import * as S from "./Search.styled"
import { AiOutlineSearch } from "react-icons/ai";



type SearchProps = {
  placeholder: string;
  onKeyDown: any;
 
};

export const Search = ({ placeholder ,onKeyDown }: SearchProps) => {
  return (
    <S.Container>
      <S.Input type="text" placeholder={placeholder}  onKeyDown={onKeyDown} />
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
