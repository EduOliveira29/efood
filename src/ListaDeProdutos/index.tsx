import Produto from '../Produto'
import { Container, Lista } from './styles'

const ListaDeProdutos = () => (
  <Container>
    <Lista>
      <li>
        <Produto />
      </li>
      <li>
        <Produto />
      </li>
      <li>
        <Produto />
      </li>
      <li>
        <Produto />
      </li>
      <li>
        <Produto />
      </li>
      <li>
        <Produto />
      </li>
    </Lista>
  </Container>
)

export default ListaDeProdutos
