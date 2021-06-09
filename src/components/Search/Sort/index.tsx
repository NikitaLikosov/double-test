import React from 'react'
import styled, { css } from 'styled-components'
import SortItem from './SortItem'
import students, { TypeSort } from './../../../store/students'
import { observer } from 'mobx-react-lite'
import sort from './../../../assets/images/sort.svg'

const Background = styled.div<{ isToggleDropdown: boolean }>`
  ${({ isToggleDropdown }) =>
    isToggleDropdown &&
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
const FilterIcon = styled.img`
  width: 1rem;
`
const MainText = styled.span`
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 1rem 0;
  cursor: pointer;
`
const TextFilter = styled.span`
  min-width: 8.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  @media (max-width: 480px) {
    display: none;
    margin-right: 0;
  }
`
const SortList = styled.ul<{ isToggleDropdown: boolean }>`
  list-style-type: none;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  background-color: white;
  @media (max-width: 480px) {
    left: -50vw;
    right: 0;
  }
  ${({ isToggleDropdown }) =>
    !isToggleDropdown &&
    css`
      display: none;
    `};
`

const Sort: React.FC = observer(() => {
  const [isToggleDropdown, setIsToggleDropdown] = React.useState(false)
  return (
    <SortContainer>
      <Background
        isToggleDropdown={isToggleDropdown}
        onClick={() => setIsToggleDropdown(false)}
      ></Background>
      <SortList isToggleDropdown={isToggleDropdown}>
        <SortItem typeSort={0} setIsToggleDropdown={setIsToggleDropdown} />
        <SortItem typeSort={1} setIsToggleDropdown={setIsToggleDropdown} />
        <SortItem typeSort={2} setIsToggleDropdown={setIsToggleDropdown} />
        <SortItem typeSort={3} setIsToggleDropdown={setIsToggleDropdown} />
        <SortItem typeSort={4} setIsToggleDropdown={setIsToggleDropdown} />
        <SortItem typeSort={5} setIsToggleDropdown={setIsToggleDropdown} />
      </SortList>
      <MainText onClick={() => setIsToggleDropdown(true)}>
        <TextFilter>{TypeSort[students.selectedTypeSort]}</TextFilter>
        <FilterIcon src={sort} alt="sort" />
      </MainText>
    </SortContainer>
  )
})

export default Sort
