"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`} >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying Glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (manufacturer === '') return;
    updateSearchParams(manufacturer.toLowerCase());
  }

  const updateSearchParams = (manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName);

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
      <SearchButton otherClasses={"sm-hidden"} />
    </form>
  )
}

export default SearchBar