import styled from 'styled-components'
import { Cores } from '../styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${Cores.corSecundaria};

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
  padding: 8px 0;
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
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin: 8px;
  padding: 8px;
  border: 8px;
  width: 90%;
`
