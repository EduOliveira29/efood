import DestaqueDoDia from '../DestaqueDoDia'
import Restaurante from '../Restaurante/index'
import { Container, Lista } from './styles'

const ListaDeRestaurante = () => (
  <Container>
    <Lista>
      <DestaqueDoDia />
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
    </Lista>
  </Container>
)

export default ListaDeRestaurante
