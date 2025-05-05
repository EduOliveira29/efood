import backgrund from '../Assets/images/Fundo.svg'
import logo from '../Assets/images/logo.svg'
import { Imagem } from './styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${backgrund})` }}>
    <h2>Restaurantes</h2>
    <div>
      <img src={logo} alt="" />
    </div>
    <h2>0 produto(s) no carrinho</h2>
  </Imagem>
)

export default Header
