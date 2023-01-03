import React from 'react'
import { ThemeProvider } from 'styled-components'
import {Container} from './Components/styles/Container.styled'
import Header from './Components/Header'
import { GlobalStyles } from './Components/styles/GlobalStyles'

const theme = {
   colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
   },
}


const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App