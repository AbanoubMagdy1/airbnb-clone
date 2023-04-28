'use client'

import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaGoogle } from 'react-icons/fa'
import Button from '../Button'
import { signIn } from 'next-auth/react'

interface Props {
    loading: boolean;
}

function ModalAuthFooter({loading}: Props) {
  return (
    <>
      <hr className='my-3'/>
      <Button
        label='Continue with Google'
        icon={FaGoogle}
        outline
        disabled={loading}
        onClick={() => {signIn('google')}}
      />
      <Button
        label='Continue with Github'
        icon={AiFillGithub}
        outline
        disabled={loading}
        onClick={() => {signIn('github')}}
      />
    </>
  )
}

export default ModalAuthFooter