// globalStyles.js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 10px;
}

*, *:before, *:after {
  box-sizing: inherit
}

body {
  padding: 0; 
  margin: 0;
  font-size: 1.5rem;
  font-family: sans-serif;

}

h1, h2, h3, h4, h5, p {
  margin: 0;
}
a { 
  text-decoration: none;
  color: #393939
}
`
