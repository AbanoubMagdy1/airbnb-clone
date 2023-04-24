'use client';

import React, { ComponentProps, memo } from 'react'
import { FieldValues,  UseFormRegister } from 'react-hook-form';

interface InputOwnProps {
    label?: string;
    error?: string | any;
    id: string;
    register: UseFormRegister<FieldValues>;
}

type InputProps = InputOwnProps & Omit<ComponentProps<'input'>, keyof InputOwnProps>;


function Input({label, error, register, ...rest}: InputProps) {

  return (
    <div className='relative'>
        <input className={`
          peer
          w-full
          border-2
          rounded-md
          p-3
          pt-5
          text-neutral-800
          text-lg
          ${error ? 'border-rose-500' : 'border-neutral-400'}
        `} 
        {...register(rest.id)}
        {...rest} />
        {label && <label className={`
          absolute
          top-5
          left-5
          pointer-events-none
          transition
          duration-150
          -translate-y-4
          scale-80
          -translate-x-2
          origin-[0]
          peer-focus:-translate-y-5
          peer-focus:scale-75
          peer-focus:-translate-x-2
          peer-placeholder-shown:-translate-y-0
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:-translate-x-2
          ${error ? 'text-rose-500' : 'text-neutral-600'}
        `}>
          {label}</label>}

        {error && <small className='text-rose-400 ml-3'>{error}</small>}
    </div>
  )
}

export default memo(Input)