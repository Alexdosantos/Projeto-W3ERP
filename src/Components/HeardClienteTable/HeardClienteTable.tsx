import * as S from './HeardClienteTable.style'

type HeardProps ={
    img:string
    title:string
}

export const HeardClienteTable = ({img ,title}:HeardProps) => {
  return (
    <S.Container>
        <S.Img src={img} alt="" />
        <S.TitleH3>{title}</S.TitleH3>
    </S.Container>
  )
}
