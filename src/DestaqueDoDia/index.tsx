import ImagemRestaurante from '../Assets/images/HiokiSushi.png'
import IconeEstrela from '../Assets/images/estrela.png'
import { BotãoTag } from '../styles'
import {
  Card,
  Nota,
  Titulo,
  Icon,
  Img,
  Descricao,
  BotãoDestaque,
  BotãoLink
} from './styles'

const DestaqueDoDia = () => (
  <Card>
    <Img src={ImagemRestaurante} alt="" />
    <BotãoDestaque>Destaque da Semana</BotãoDestaque>
    <BotãoTag>Japonesa</BotãoTag>
    <Nota>
      <Titulo>Hioki Sushi</Titulo>
      <div>
        <p>
          <b>4.9</b>
        </p>
        <Icon src={IconeEstrela} alt="" />
      </div>
    </Nota>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <BotãoLink to="./Perfil">Saiba Mais</BotãoLink>
  </Card>
)

export default DestaqueDoDia
