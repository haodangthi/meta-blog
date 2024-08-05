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
      color: ${(props) => props.theme.color};
      
      h4, p {
        color: #696A75;
      }
  }
  
  .nav li a {
     color: ${(props) => props.theme.color};
  }
`

export default GlobalStyle
