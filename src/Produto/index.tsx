import { Restaurante } from '../pages/Home'
import { Card, Titulo, Descricao, Botão, Container } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const Produto = ({ restaurantes }: Props) => {
  return (
    <>
      {restaurantes.map((restaurantes) => (
        <Card key={restaurantes.cardapio.id}>
          <img src={restaurantes.cardapio.foto} alt="" />
          <Titulo>{restaurantes.cardapio.nome}</Titulo>
          <Descricao>{restaurantes.cardapio.descricao}</Descricao>
          <Container>
            <Botão>Adicionar ao carrinho</Botão>
          </Container>
        </Card>
      ))}
    </>
  )
}
export default Produto
