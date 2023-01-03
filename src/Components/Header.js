import React from 'react'
import { Container } from './styles/Container.styled'
import { StyledHeader } from './styles/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <h1>Hubble</h1>
        </Container>
    </StyledHeader>
  )
}

export default Header