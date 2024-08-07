'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.25s linear;
  }
  
  footer {
      background-color: ${(props) => props.theme.backgroundFooter};
  }
`

export default GlobalStyle
