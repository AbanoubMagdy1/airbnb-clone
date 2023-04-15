'use client';

import React from 'react'

function Container({children}: {children: React.ReactNode}) {
  return (
    <div className='max-w-[96%] w-[80rem] mx-auto'>
        {children}
    </div>
  )
}

export default Container