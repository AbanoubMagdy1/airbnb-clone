import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import NavbarSearch from './NavbarSearch'
import NavbarUser from './NavbarUser'
import { SafeUser } from '@/app/types'
import Categories from './Categories'

interface Props {
  currentUser: SafeUser | null
}

function Navbar({currentUser}: Props) {
  return (
    <nav className='fixed border-b-1 shadow bg-white w-full'>
      <div className='py-4 border-b-2'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            <Logo/>
            <NavbarSearch/>
            <NavbarUser currentUser={currentUser}/>
          </div>
        </Container>
      </div>
      <Categories/>
    </nav>
  )
}

export default Navbar