import { TableData } from "../PredicoesCards/CardsInformation";
import * as S from "./SmallTableCards.Style";


type MiniTableProps = {
  dados: Array<TableData>;
  
  
};

const MiniTableCards = ({ dados }: MiniTableProps) => {


  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <S.TitleProdutcs>Produtos</S.TitleProdutcs>
            <S.TitleProx>Próxima Compra</S.TitleProx>
          </tr>
        </thead>
        <tbody>
          
            {dados && dados.map((item) => (
              <tr key={item.id}>
                <S.Td>{item.nome}</S.Td>
                
                  <S.Td1>
                    <strong>{item.proximaCompra}</strong>
                  </S.Td1>
                
              </tr>
            ))}
        </tbody>
      </table>
    </S.Container>
  );
};

export default MiniTableCards;
