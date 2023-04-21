'use client';

import React from 'react'

interface Props{
    isOpen?: boolean;
    size?: number;
}

function Loader({isOpen = true, size = 12}: Props) {
  if (!isOpen) return null;

  return (
    <div className={`animate-spin rounded-full border-black border-4 border-s-transparent w-${size} h-${size}`}></div>
  )
}

export default Loader