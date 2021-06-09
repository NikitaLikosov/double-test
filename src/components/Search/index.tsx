import { Observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../assets/images/searchIcon.svg'
import Sort from './Sort'
import studentsStore from './../../store/students'

const SearchBox = styled.div`
  display: flex;
  margin: 0 -0.625rem;
  & > *:first-child {
    flex: 1 0 auto;
  }
`

const SearchItem = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  margin: 0 0.625rem;
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 1rem;
  width: calc(100% - 1.125rem);
`

const SearchLabel = styled.label`
  padding: 0.9375rem 0;
  cursor: text;
`

const SearchIcon = styled.img`
  width: 1.125rem;
`

const Search: React.FC = () => {
  return (
    <SearchBox>
      <SearchItem>
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
              onChange={(event) =>
                (studentsStore.searchText = event.target.value)
              }
            />
          )}
        </Observer>
      </SearchItem>
      <SearchItem>
        <Sort />
      </SearchItem>
    </SearchBox>
  )
}

export default Search
