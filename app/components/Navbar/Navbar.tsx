import React from 'react'
import Logo from './Logo'
import Container from '../Container'

function Navbar() {
  return (
    <nav className='border-b-1 shadow py-4'>
      <Container>
        <div className='flex items-center justify-between'>
          <Logo/>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar