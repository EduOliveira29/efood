import Produto from '../Produto'
import { Container, Lista } from './styles'
import { Restaurante } from '../pages/Home/index'

type Props = {
  restaurantes: Restaurante[]
}

export const formataPreço = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaDeProdutos = ({ restaurantes }: Props) => {
  return (
    <Container>
      <Lista>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.id}>
            <Produto
              id={restaurantes.cardapio.id}
              foto={restaurantes.cardapio.foto}
              descricao={restaurantes.cardapio.descricao}
              nome={restaurantes.cardapio.nome}
              preco={restaurantes.cardapio.preco}
            />
          </li>
        ))}
      </Lista>
    </Container>
  )
}
export default ListaDeProdutos
