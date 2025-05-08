import styled from 'styled-components'
import { Cores } from '../styles'

export const Imagem = styled.div`
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: ${Cores.corBranca};
  padding-left: 180px;
  justify-content: space-around;
  line-height: 100%;
  font-size: 32px;

  h2 {
    font-weight: 100;
  }

  h3 {
    font-weight: 900;
  }
`
