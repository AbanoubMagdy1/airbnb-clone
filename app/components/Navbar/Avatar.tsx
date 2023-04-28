'use client';

import Image from 'next/image';
import React from 'react'
import { TiUser } from 'react-icons/ti';

interface Props {
    src?: string | null | undefined;
}

function Avatar({src} : Props) {
  if(!src) return <TiUser className='rounded-full bg-gray-500 text-white' size={30}/>;

  return <Image
    src={src}
    alt='avatar'
    className='rounded-full'
    width={30}
    height={30}
  />
}

export default Avatar