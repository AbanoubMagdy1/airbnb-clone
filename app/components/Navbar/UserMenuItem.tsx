'use client';

import React from 'react'

interface Props {
    label: string;
    onClick: () => void
}

function UserMenuItem({label, onClick}: Props) {
  return (
    <div className='text-sm font-semibold transition hover:bg-gray-300 py-3 px-4' onClick={onClick}>
        {label}
    </div>
  )
}

export default UserMenuItem