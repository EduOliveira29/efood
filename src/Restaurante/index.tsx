import IconeEstrela from '../Assets/images/estrela.png'
import {
  Card,
  Nota,
  Titulo,
  Icon,
  Img,
  Descricao,
  BotãoLink,
  BotãoDestaque
} from './styles'
import { BotãoTag } from '../styles'

export type Props = {
  id?: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: string
  descricao?: string
  capa?: string
  cardapio?: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Estabelecimentos = ({
  avaliacao,
  capa,
  descricao,
  destacado,
  tipo,
  titulo
}: Props) => {
  return (
    <Card>
      <Img src={capa} alt="" />
      {destacado === true && <BotãoDestaque>Destaque do Dia</BotãoDestaque>}
      <BotãoTag>{tipo}</BotãoTag>
      <Nota>
        <Titulo>{titulo}</Titulo>
        <div>
          <p>
            <b>{avaliacao}</b>
          </p>
          <Icon src={IconeEstrela} alt="" />
        </div>
      </Nota>
      <Descricao>{descricao}</Descricao>
      <BotãoLink to={`/restaurantes/id`}>Saiba mais</BotãoLink>
    </Card>
  )
}
export default Estabelecimentos
