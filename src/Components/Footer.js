import React from 'react'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'

const Footer = () => {
  return (
    <div>
        <Container>
            <img src="./images/logo_white.svg" alt="" />

            <Flex>
                <ul>
                    <li>
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type 
                    specimen book.
                    </li>
                    <li>
                        +234-81-234-343-22
                    </li>
                    <li>
                        example@huddle.com
                    </li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

                {/* Social Icons */}
            </Flex>

            <p>&copy; 2021 huddle, All rights reserved</p>
        </Container>
    </div>
  )
}

export default Footer