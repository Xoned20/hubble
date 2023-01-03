import React from 'react'
import { ThemeProvider } from 'styled-components'
import {Container} from './Components/styles/Container.styled'
import Header from './Components/Header'
import Card from './Components/Card'
import { GlobalStyles } from './Components/styles/GlobalStyles'
import content from './content'
import Footer from './Components/Footer'

const theme = {
   colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
   },
   mobile: '768px',
}


const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App