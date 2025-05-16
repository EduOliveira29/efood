import Hero from '../../Hero/index'
import ListaDeRestaurante from '../../ListaDeRestaurantes/index'
import Footer from '../../Footer/index'
import { useEffect, useState } from 'react'

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
    </>
  )
}
export default Home
