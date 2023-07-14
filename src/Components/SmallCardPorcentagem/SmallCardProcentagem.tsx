import * as S from "./Small.C.P.style"
type PorcentagemProps = {
    porcentagem: string
}
export const SmallCardProcentagem = ({porcentagem}:PorcentagemProps) => {
  return (
    <div>
        <S.Wapper>{porcentagem}%</S.Wapper>
    </div>
  )
}
