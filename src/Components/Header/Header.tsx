import { UserLogin } from "../UserLogin/UserLogin";
import * as S from './Header.Style'

const Header = () => {
  return (
    <S.Container>
      <UserLogin />
    </S.Container>
  );
};

export default Header;
