import { Restaurante } from '../../pages/Home'
import Produto from '../Produto'

import { Container, Lista } from './styles'

export type Props = {
  restaurantes: Restaurante[]
  id?: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: string
  descricao?: string
  capa?: string
  cardapio?: {
    foto?: string
    preco?: number
    id: number
    nome?: string
    descricao?: string
    porcao?: string
  }
}

const ListaDeRestaurante = ({ restaurantes }: Props) => {
  return (
    <Container>
      <Lista>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.cardapio?.id}>
            <Produto
              id={restaurantes.cardapio?.id}
              titulo={restaurantes.cardapio?.nome}
              tipo={restaurantes.tipo}
              descricao={restaurantes.descricao}
              capa={restaurantes.cardapio?.foto}
            />
          </li>
        ))}
      </Lista>
    </Container>
  )
}
export default ListaDeRestaurante
