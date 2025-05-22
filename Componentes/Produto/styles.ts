import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${Cores.corSecundaria};
  padding: 8px;

  img {
    width: 100%;
  }
`

export const Titulo = styled.h4`
  padding: 10px;
  font-size: 16px;
  line-height: 100%;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin: 8px;
`

export const Container = styled.div`
  diplay: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Botão = styled.button`
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  line-height: 100%;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  width: 100%;
  border: none;
`
