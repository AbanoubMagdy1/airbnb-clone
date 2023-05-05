'use client'

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

function Logo() {
  const router = useRouter();
  return (
    <Image
        className='hidden lg:block cursor-pointer'
        src='/images/logo1.png'
        alt='Logo'
        width={100}
        height={100}
        onClick={() => router.push('/')}
    />
  )
}

export default Logo