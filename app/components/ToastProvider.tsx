'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

function ToastProvider() {
  return (
    <Toaster
        position='bottom-left'
        toastOptions={{
            duration: 4000,
        }}
    />
  )
}

export default ToastProvider