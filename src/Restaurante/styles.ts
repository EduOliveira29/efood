import styled from 'styled-components'
import { Cores } from '../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  width: 400px;
  background-color: ${Cores.corDeFundo};
  color: ${Cores.corSecundaria};
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 200px;
`

export const Titulo = styled.h3`
  padding: 10px;
  font-size: 16px;
`

export const Descricao = styled.p`
  padding: 16px 0;
  font-size: 12px;
  margin: 8px;
`

export const Botão = styled.button`
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  font-size: 16px;
  padding: 8px;
  border: none;
  margin: 8px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }
`

export const Icon = styled.img`
  height: 24px;
  max-width: 24px;
  margin-left: 8px;
`

export const BotãoTipo = styled(Botão)`
  position: absolute;
  top: 10px;
  right: 12px;
`

export const BotãoLink = styled(Link)`
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  font-size: 16px;
  padding: 8px;
  border: none;
  margin: 8px;
  text-decoration: none;
`
