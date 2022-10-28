import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    background-color: rgb(253, 244, 244);
    color: #383535;
    font-family: 'Poppins', sans-serif;
  }
`