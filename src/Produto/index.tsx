import pizza from '../Assets/images/pizza.png'
import { Card, Titulo, Descricao, Botão } from './styles'

const Produto = () => (
  <Card>
    <img src={pizza} alt="" />
    <Titulo>Pizza Marguerita</Titulo>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao>
    <Botão>Adicionar ao carrinho</Botão>
  </Card>
)

export default Produto
