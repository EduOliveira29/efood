import styled from 'styled-components'
import { Cores, BotãoTag } from '../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  width: 472px;
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
  padding: 16px 8px;
  line-height: 22px;
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
  padding-left: 4px;
  height: 24px;
  max-width: 24px;
`

export const BotãoDestaque = styled(BotãoTag)`
  position: absolute;
  top: 16px;
  right: 90px;
  color: ${Cores.corBranca};
  font-size: 12px;
`

export const BotãoLink = styled(Link)`
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  text-decoration: none;
  margin: 8px;
  padding: 8px;
  border: none;
`
