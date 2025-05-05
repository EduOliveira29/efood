import styled from 'styled-components'
import { Cores } from '../styles'

export const Imagem = styled.div`
  height: 320px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color: ${Cores.corBranca};
  padding-left: 180px;
  justify-content: space-around;
`
