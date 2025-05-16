import { Restaurante } from '../../pages/Home'
import { Card, Titulo, Descricao, Botão, Container } from './styles'
import Pizza from '../../Assets/images/pizza.png'

type Props = {
  restaurantes: Restaurante[]
}

const Modal = () => {
  return (
    <>
      <Card>
        <div>
          <img src={Pizza} alt="" />
        </div>
        <Titulo>Pizza Marguerita</Titulo>
        <Descricao>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
        </Descricao>
        <Descricao>Serve: de 2 a 3 pessoas</Descricao>
        <Container>
          <Botão>Adicionar ao carrinho - R$ 60,90</Botão>
        </Container>
      </Card>
    </>
  )
}
export default Modal
