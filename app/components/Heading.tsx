'use client';

import React from 'react'

interface Props {
    title: string;
    subtitle?: string;
    center?: boolean;
}

function Heading({title, subtitle, center}: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
        <h4 className='text-3xl font-semibold'>{title}</h4>
        {subtitle && <p className='text-gray-500 text-md mt-1 mb-2'>{subtitle}</p>}
    </div>
  )
}

export default Heading