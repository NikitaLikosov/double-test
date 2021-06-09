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

const Item = styled.li<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
  setIsToggleDropdown(IsToggleDropdown: boolean): void
}> = (props) => {
  return (
    <Item
      onClick={() => {
        students.changeSelectedTypeSort(props.typeSort)
        props.setIsToggleDropdown(false)
      }}
      selected={students.selectedTypeSort === props.typeSort}
    >
      {TypeSort[props.typeSort]}
      <SelectedIcon
        selected={students.selectedTypeSort === props.typeSort}
        src={check}
        alt="checked"
      />
    </Item>
  )
}

export default SortItem
