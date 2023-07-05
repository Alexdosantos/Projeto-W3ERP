import { Sidebar } from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import * as S from "./Layout.Style";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <>
        <S.Container>
          <Sidebar />
          <S.Wrapper>
            <Header />
            {children}
          </S.Wrapper>
        </S.Container>
      </>
    </>
  );
};
