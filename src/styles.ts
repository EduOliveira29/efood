import { createGlobalStyle } from 'styled-components'

export const Cores = {
  corPrincipal: '#FFEBD9',
  corSecundaria: '#E66767',
  corBranca: '#FFFFFF',
  corDeFundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }


  body {
    background-color: ${Cores.corDeFundo};
    color: ${Cores.corBranca};
  }
`
