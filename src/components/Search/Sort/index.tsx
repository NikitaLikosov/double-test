import React from 'react'
import styled, { css } from 'styled-components'
import SortItem from './SortItem'
import students, { TypeSort } from '../../../store/students'
import { observer } from 'mobx-react-lite'
import sort from './../../../assets/images/sort.svg'

const Background = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0; ;
    `}
`
const SortContainer = styled.div`
  position: relative;
`
const SortIcon = styled.img`
  width: 1rem;
`
const MainText = styled.span`
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 1rem 1.25rem;
  cursor: pointer;
`
const TextSort = styled.span`
  min-width: 8.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
    margin-right: 0;
  }
`
const SortList = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  background-color: white;
  transition: visibility 0s, opacity 0.5s linear;
  visibility: visible;
  opacity: 1;

  @media (max-width: 768px) {
    left: -50vw;
    right: 0;
  }
  ${({ isOpen }) =>
    !isOpen &&
    css`
      visibility: hidden;
      opacity: 0;
    `};
`

const Sort: React.FC = observer(() => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <SortContainer>
      <Background isOpen={isOpen} onClick={() => setIsOpen(false)}></Background>
      <SortList isOpen={isOpen}>
        {new Array(Object.keys(TypeSort).length / 2)
          .fill(1)
          .map((el, index) =>
            index === 0
              ? students.selectedTypeSort
              : index === students.selectedTypeSort
              ? 0
              : index
          )
          .map((el) => (
            <SortItem typeSort={el} handlerOpen={setIsOpen} />
          ))}
      </SortList>
      <MainText onClick={() => setIsOpen(true)}>
        <TextSort>{TypeSort[students.selectedTypeSort]}</TextSort>
        <SortIcon src={sort} alt="Sort" />
      </MainText>
    </SortContainer>
  )
})

export default Sort
