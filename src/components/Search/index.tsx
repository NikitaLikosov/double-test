import { Observer } from 'mobx-react-lite'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/images/searchIcon.svg'
import Sort from './Sort'
import studentsStore from './../../store/students'
import debounce from 'lodash.debounce'

const SearchBox = styled.div`
  display: flex;
  margin-right: -1.25rem;
  & > *:first-child {
    flex: 1 0 auto;
  }
`

const SearchItem = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  margin-right: 1.25rem;
`

const SearchItemGrow = styled(SearchItem)`
  flex-grow: 1;
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 1rem;
  width: calc(100% - 2.375rem);
  min-width: 100px;
`

const SearchLabel = styled.label`
  padding: 0.9375rem 0 0.9375rem 1.25rem;
  cursor: text;
`

const SearchIcon = styled.img`
  width: 1.125rem;
`

const Search: React.FC = () => {
  const debounceFn = useRef<undefined | (() => void)>()

  useEffect(() => {
    debounceFn.current = debounce(studentsStore.fetchStudents, 1000)

    return () => {
      debounceFn.current = undefined
    }
  }, [])

  return (
    <SearchBox>
      <SearchItemGrow>
        <SearchLabel htmlFor="search">
          <SearchIcon src={searchIcon} />
        </SearchLabel>
        <Observer>
          {() => (
            <SearchInput
              id="search"
              type="search"
              placeholder="Поиск по имени"
              value={studentsStore.searchText}
              onChange={(event) => {
                event.preventDefault()
                studentsStore.changeSearchText(event.target.value)
                if (debounceFn.current !== undefined) {
                  debounceFn.current()
                }
              }}
            />
          )}
        </Observer>
      </SearchItemGrow>
      <SearchItem>
        <Sort />
      </SearchItem>
    </SearchBox>
  )
}

export default Search
