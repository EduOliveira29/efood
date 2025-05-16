import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import { Restaurante } from '../Home'
import Header from '../../componentes/Header'
import Apresentacao from '../../componentes/Apresentacao'
import ListaDeProdutos from '../../componentes/ListaDeProdutos'
import Footer from '../../componentes/Footer'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
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
