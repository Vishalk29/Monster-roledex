import React from 'react'

import './search.style.css'
export const Search = ({placeholder, clickchange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={clickchange}
  />
)
