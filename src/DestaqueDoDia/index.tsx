import ImagemRestaurante from '../Assets/images/HiokiSushi.png'
import IconeEstrela from '../Assets/images/estrela.png'
import {
  Card,
  Nota,
  Titulo,
  Icon,
  Img,
  Descricao,
  Botão,
  BotãoTipo,
  BotãoDestaque
} from './styles'

const DestaqueDoDia = () => (
  <Card>
    <Img src={ImagemRestaurante} alt="" />
    <BotãoDestaque>Destaque da Semana</BotãoDestaque>
    <BotãoTipo>Japonesa</BotãoTipo>
    <Nota>
      <Titulo>Hioki Sushi</Titulo>
      <div>
        <p>4.9</p>
        <Icon src={IconeEstrela} alt="" />
      </div>
    </Nota>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <Botão>Saiba Mais</Botão>
  </Card>
)

export default DestaqueDoDia
