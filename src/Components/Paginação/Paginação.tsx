import { useQuery } from "react-query"
import { GetUser } from "../../Service/GetApi/GetUser"
import {useState} from 'react'

export const Paginação = () => {
const [page ,setPage] = useState(1)
const size  = 10

const {data: paginacoa} = useQuery(['paginação' ,page ] ,() => GetUser.produtosPage(page , size))
console.log(paginacoa)


  return (
    <>
        <button onClick={() => setPage((old)  => Math.max(old - 1, 1))}>Pagina Anterior</button>
        <button onClick={() => setPage((old)  => Math.max(old + 1))}>Próxima Página </button>
    </>
  )
}
