import Apresentacao from '../../Apresentacao/index'
import Header from '../../Header/index'
import ListaDeProdutos from '../../ListaDeProdutos/index'
import Footer from '../../Footer/index'
import { Container } from './styles'

const Perfil = () => (
  <>
    <Header />
    <Apresentacao />
    <Container>
      <ListaDeProdutos />
    </Container>
    <Footer />
  </>
)

export default Perfil
