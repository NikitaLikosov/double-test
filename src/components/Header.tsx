import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'

const HeaderContent = styled.header`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
`

const Logo = styled.a`
  color: #000;
  text-decoration: none;
  padding: 1.5rem 8.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1440px;
  margin: 0 auto;
`

const Image = styled.img`
  width: 2.625rem;
  margin-right: 3rem;
`

const Text = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
`

const ColorText = styled.cite`
  color: #49c2e8;
  font-style: normal;
`

const Header: React.FC = () => {
  return (
    <HeaderContent>
      <Logo href="/">
        <Image src={logo} alt=" logo" />
        <Text>
          {' '}
          STUDENTS by <ColorText>NikitaLikosov</ColorText>
        </Text>
      </Logo>
    </HeaderContent>
  )
}

export default Header
