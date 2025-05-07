import ImagemRestaurante from '../Assets/images/imagemDoRestaurante.png'
import IconeEstrela from '../Assets/images/estrela.png'
import { Card, Nota, Titulo, Icon, Img, Descricao, BotãoLink } from './styles'
import { BotãoTag } from '../styles'

const Restaurante = () => (
  <Card>
    <Img src={ImagemRestaurante} alt="" />
    <BotãoTag>Italiana</BotãoTag>
    <Nota>
      <Titulo>La Dolce Vita Trattoria</Titulo>
      <div>
        <p>
          <b>4.6</b>
        </p>
        <Icon src={IconeEstrela} alt="" />
      </div>
    </Nota>
    <Descricao>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
      no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
      inesquecível. Peça já!
    </Descricao>
    <BotãoLink to="/Perfil">Saiba mais</BotãoLink>
  </Card>
)

export default Restaurante
