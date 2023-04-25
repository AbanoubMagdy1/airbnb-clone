'use client';

import useToggle from '@/app/hooks/useToggle';
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TiUser } from 'react-icons/ti'
import UserMenuItem from './UserMenuItem';
import useRegisterModel from '@/app/state/useRegisterModal';
import useEventListener from '@/app/hooks/useEventListener';

function NavbarUser() {
  const openRegisterModel = useRegisterModel(state => state.onOpen)
  const [isOpen, toggleOpen] = useToggle(false)

  useEventListener(document.body, 'click', function closeMenu(e: MouseEvent) {
    const target = e.target as HTMLBodyElement;
    if(target?.closest('.navbar-menu') || !isOpen) return;

    toggleOpen();
    
  })

  return (
    <div className='relative flex items-center gap-x-3'>
        <div className='hidden md:block font-semibold p-3 hover:bg-slate-100 transition cursor-pointer rounded-full'>
            Airbnb your home
        </div>
        <div 
         className='border-[1px] rounded-full shadow-sm hover:shadow-md transition px-3 py-1 cursor-pointer flex items-center gap-x-3'
         onClick={toggleOpen}
         >
            <AiOutlineMenu size={18} className='font-semibold'/>
            <TiUser className='rounded-full bg-gray-500 text-white' size={30}/>
        </div>

        {isOpen && (<div className='navbar-menu absolute right-0 top-14 bg-white rounded-lg w-[40vw] md:w-3/4 shadow-lg cursor-pointer'>
          <UserMenuItem label='Login' onClick={() => {}}/>
          <UserMenuItem label='Register' onClick={openRegisterModel}/>
        </div>)}
    </div>
  )
}

export default NavbarUser