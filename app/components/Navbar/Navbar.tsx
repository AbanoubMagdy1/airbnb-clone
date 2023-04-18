import React from 'react'
import Logo from './Logo'
import Container from '../Container'
import NavbarSearch from './NavbarSearch'
import NavbarUser from './NavbarUser'

function Navbar() {
  return (
    <nav className='fixed border-b-1 shadow py-4 bg-white w-full'>
      <Container>
        <div className='flex items-center justify-between gap-3 md:gap-0'>
          <Logo/>
          <NavbarSearch/>
          <NavbarUser/>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar