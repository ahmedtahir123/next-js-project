"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '.'

function SearchBar() {
    const [setmanufacturer, setManufacturer] = useState('')
    const handleSearch = () => {}
  return (
    <form className='searchbar'>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={setmanufacturer} setManufacturer={setManufacturer} />
        </div>
    </form>
  )
}

export default SearchBar