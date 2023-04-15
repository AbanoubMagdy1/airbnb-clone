'use client'

import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <Image
        src='/images/logo1.png'
        alt='Logo'
        width={100}
        height={100}
    />
  )
}

export default Logo