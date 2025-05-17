import { Container } from './styles'
import Header from '../../componentes/Header'
import Apresentacao from '../../componentes/Apresentacao'
import ListaDeProdutos from '../../componentes/ListaDeProdutos'
import Footer from '../../componentes/Footer'

const Perfil = () => {
  return (
    <>
      <Header />
      <Apresentacao />
      <Container>
        <ListaDeProdutos />
      </Container>
      <Footer />
    </>
  )
}
export default Perfil
