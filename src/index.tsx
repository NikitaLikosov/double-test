import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import './assets/fonts/fonts.css'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0; 
  font-family: Geometria, Sans Serifs;
}
img {
  width:100%
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }`

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
)
