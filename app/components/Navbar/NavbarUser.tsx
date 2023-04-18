import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TiUser } from 'react-icons/ti'

function NavbarUser() {
  return (
    <div className='relative flex items-center gap-x-3'>
        <div className='hidden md:block font-semibold p-3 hover:bg-slate-100 transition cursor-pointer rounded-full'>
            Airbnb your home
        </div>
        <div className='border-[1px] rounded-full shadow-sm hover:shadow-md transition px-3 py-1 cursor-pointer flex items-center gap-x-3'>
            <AiOutlineMenu size={18} className='font-semibold'/>
            <TiUser className='rounded-full bg-gray-500 text-white' size={30}/>

        </div>
    </div>
  )
}

export default NavbarUser