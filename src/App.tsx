import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Search from './components/Search/index'
import TableStudents from './components/tableStudents'

const Title = styled.h1`
  margin: 4.5rem 0 3rem;
  font-weight: bold;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`

const Main = styled.main`
  padding: 0 8.5%;
  max-width: 1440px;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Title>Студенты</Title>
        <Search />
        <TableStudents />
      </Main>
    </>
  )
}

export default App
