'use client';

import useToggle from '@/app/hooks/useToggle';
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import UserMenuItem from './UserMenuItem';
import useRegisterModel from '@/app/state/useRegisterModal';
import useEventListener from '@/app/hooks/useEventListener';
import useLoginrModal from '@/app/state/useLoginModal';
import Avatar from './Avatar';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';

interface Props {
  currentUser: SafeUser | null
}

function NavbarUser({currentUser}: Props) {
  const openRegisterModel = useRegisterModel(state => state.onOpen)
  const openLoginModel = useLoginrModal(state => state.onOpen)
  const [isOpen, toggleOpen] = useToggle(false)

  useEventListener(document.body, 'click', function closeMenu(e: MouseEvent) {
    const target = e.target as HTMLBodyElement;
    if(target?.closest('.navbar-menu') || target?.closest('.navmenu-button') || !isOpen) return;

    toggleOpen();
    
  })

  return (
    <div className='relative flex items-center gap-x-3'>
        <div className='hidden md:block font-semibold p-3 hover:bg-slate-100 transition cursor-pointer rounded-full'>
            Airbnb your home
        </div>
        <div 
         className='navmenu-button border-[1px] rounded-full shadow-sm hover:shadow-md transition px-3 py-1 cursor-pointer flex items-center gap-x-3'
         onClick={toggleOpen}
         >
            <AiOutlineMenu size={18} className='font-semibold'/>
            <Avatar src={currentUser?.image}/>
        </div>

        {isOpen && (<div className='navbar-menu absolute right-0 top-14 bg-white rounded-lg w-[40vw] md:w-3/4 shadow-lg cursor-pointer'>
          {currentUser ? (
            <>
                <UserMenuItem label='My Listings' onClick={() => {}}/>
                <UserMenuItem label='My Reservations' onClick={() => {}}/>
                <UserMenuItem label='My Favorites' onClick={() => {}}/>
                <UserMenuItem label='Logout' onClick={signOut}/>
            </>
          ) : (
            <>
                <UserMenuItem label='Login' onClick={openLoginModel}/>
                <UserMenuItem label='Register' onClick={openRegisterModel}/>
            </>
          )} 
        </div>)}
    </div>
  )
}

export default NavbarUser