import styled from 'styled-components'
import { Cores } from '../styles'

export const Card = styled.div`
  max-width: 320px;
  background-color: ${Cores.corSecundaria};
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`

export const Titulo = styled.h4`
  padding: 10px;
  font-size: 16px;
`

export const Descricao = styled.p`
  padding: 8px 0;
  font-size: 12px;
  margin: 8px;
`
export const Botão = styled.button`
  width: 90%;
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  font-size: 16px;
  padding: 8px;
  border: none;
  margin: 8px;
`
