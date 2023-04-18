import React from 'react'
import { BiSearch } from 'react-icons/bi'

function NavbarSearch() {
  return (
    <div className='border-[1px] w-full md:w-auto p-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
        <div className='flex items-center justify-between'>
            <div className='text-sm px-6 font-semibold'>
                Anywhere
            </div>
            <div className='text-sm px-6 font-semibold px-6 border-x-2'>
                AnyWeek
            </div>
            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">Add guests</div>
                <div className="p-2 bg-rose-500 rounded-full text-white">
                    <BiSearch size={18} />
                </div>
            </div>
        </div>
    </div> 
  )
}

export default NavbarSearch