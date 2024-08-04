'use client'
import SearchIcon from './Icons/SearchIcon'
import { Inter } from 'next/font/google'
import styled from 'styled-components'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
})

const StyledSearchInput = styled.div`
  position: relative;
  width: 166px;
  margin-left: 137px;

  input {
    width: 100%;
    padding: 8px 8px 8px 16px;
    align-items: center;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    background-color: #f4f4f5;
    outline: none;

    &::placeholder {
      font-family: ${inter.style.fontFamily};
    }
  }

  svg {
    position: absolute;
    right: 8px;
    top: 40%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`

const SearchBar = (props) => {
  return (
    <StyledSearchInput className={inter.className}>
      <input type="text" placeholder="Search" {...props} />
      <SearchIcon />
    </StyledSearchInput>
  )
}

export default SearchBar
