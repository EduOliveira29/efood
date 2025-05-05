import ImagemFundo from '../Assets/images/imagemDoRestaurante.png'
import { Imagem } from './styles'

const Apresentacao = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <h2>Italiana</h2>
    <h3>La Dolce Vita Trattoria</h3>
  </Imagem>
)

export default Apresentacao
