import React from 'react'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <main className='searchbar-wrapper w-full px-6'>

        <div className="searchbar bg-[#1c1c1e] w-full px-3 pl-4 py-4 rounded-3xl flex flex-row items-center gap-2">
        <Image src="/svgs/search.svg" width={20} height={20} alt="" />
        <input type="text" name="" id="" className='w-full focus:outline-none bg-transparent text-[#98989F] placeholder:text-[#98989F]' placeholder='Search Task' />
        </div>

    </main>
  )
}

export default SearchBar