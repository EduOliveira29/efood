import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Apresentacao from '../../Apresentacao/index'
import Header from '../../Header/index'
import ListaDeProdutos from '../../ListaDeProdutos/index'
import Footer from '../../Footer/index'
import { Container } from './styles'
import { Restaurante } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <Header />
      <Apresentacao />
      <Container>
        <ListaDeProdutos restaurantes={restaurante} />
      </Container>
      <Footer />
    </>
  )
}
export default Perfil
