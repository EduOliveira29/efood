import styled from 'styled-components'
import { Cores } from '../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  max-width: 472px;
  background-color: ${Cores.corDeFundo};
  color: ${Cores.corSecundaria};
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 217px;
`

export const Titulo = styled.h3`
  padding-top: 8px;
  font-size: 18px;
  line-height: 100%;
`

export const Descricao = styled.p`
  line-height: 22px;
  padding: 16px 8px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  b {
    font-size: 18px;
  }

  div {
    display: flex;
  }
`

export const Icon = styled.img`
  height: 24px;
  max-width: 24px;
  margin-left: 4px;
`

export const BotãoLink = styled(Link)`
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  text-decoration: none;
  margin: 8px;
  padding: 8px;
  border: none;
`
