import { Restaurante } from '../../pages/Home'
import Estabelecimentos from '../Restaurante'
import { Container, Lista } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ListaDeRestaurante = ({ restaurantes }: Props) => {
  return (
    <Container>
      <Lista>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.id}>
            <Estabelecimentos
              id={restaurantes.cardapio.id}
              titulo={restaurantes.titulo}
              destacado={restaurantes.destacado}
              tipo={restaurantes.tipo}
              avaliacao={restaurantes.avaliacao}
              descricao={restaurantes.descricao}
              capa={restaurantes.capa}
            />
          </li>
        ))}
      </Lista>
    </Container>
  )
}
export default ListaDeRestaurante
