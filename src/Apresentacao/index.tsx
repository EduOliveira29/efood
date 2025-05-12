import ImagemFundo from '../Assets/images/imagemDoRestaurante.png'
import { Container, Imagem } from './styles'

const Apresentacao = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <Container>
      <h2>Italiana</h2>
      <h3>La Dolce Vita Trattoria</h3>
    </Container>
  </Imagem>
)

export default Apresentacao
