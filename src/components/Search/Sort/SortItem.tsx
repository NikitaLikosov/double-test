import React from 'react'
import styled, { css } from 'styled-components'
import students, { TypeSort } from '../../../store/students'
import check from './../../../assets/images/check.svg'

const SelectedIcon = styled.img<{ selected: boolean }>`
  width: 1rem;
  margin-left: 0.5rem;
  ${(props) =>
    !props.selected &&
    css`
      opacity: 0;
    `}
`

const ListItem = styled.li<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  ${(props) =>
    props.selected &&
    css`
      background: rgba(73, 194, 232, 0.11);
    `}
`

const SortItem: React.FC<{
  typeSort: TypeSort
  handlerOpen(state: boolean): void
}> = ({ typeSort, handlerOpen }) => {
  return (
    <ListItem
      onClick={() => {
        students.changeSelectedTypeSort(typeSort)
        handlerOpen(false)
      }}
      selected={students.selectedTypeSort === typeSort}
    >
      {TypeSort[typeSort]}
      <SelectedIcon
        selected={students.selectedTypeSort === typeSort}
        src={check}
        alt="checked"
      />
    </ListItem>
  )
}

export default SortItem
