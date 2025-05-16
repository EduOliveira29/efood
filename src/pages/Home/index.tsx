import { useEffect, useState } from 'react'
import Hero from '../../componentes/Hero'
import ListaDeRestaurante from '../../componentes/ListaDeRestaurantes'
import Footer from '../../componentes/Footer'
import Modal from '../../componentes/Modal'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [Restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (!Restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <ListaDeRestaurante restaurantes={Restaurantes} />
      <Footer />
      <Modal />
    </>
  )
}
export default Home
