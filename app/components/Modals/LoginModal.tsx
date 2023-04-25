'use client';

import React, { useCallback, useState } from 'react'
import Modal from './Modal'
import useLoginrModal from '@/app/state/useLoginModal';
import useRegisterModel from '@/app/state/useRegisterModal'
import { useForm, FieldValues } from 'react-hook-form'
import Input from '../Inputs/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import {FaGoogle} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai';
import Button from '../Button';
import Heading from '../Heading';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

function LoginModal() {
  const router = useRouter();  
  const registerModal = useRegisterModel()
  const loginModal = useLoginrModal()
  const [loading, setLoading] = useState(false)

  const {register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    values: { email: '', password: ''},
    resolver: yupResolver(loginSchema),
  });

  function submit(data: FieldValues) {
    setLoading(true)
    signIn('credentials', {redirect: false, ...data})
    .then((res) => {
        if(res?.error) {
            toast.error(res.error)
        } else {
            toast.success("Logged in successfully")
            loginModal.onClose()
            router.refresh();
        }
    })
    .finally(() => {
        setLoading(false)
    })
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className='flex flex-col gap-3'>
      <Heading title="Welcome back" subtitle='Login to your account'/>
      <Input
        id='email'
        type='text'
        label="Email"
        placeholder=' '
        error={errors['email']?.message}
        register={register}
      />
      <Input
        id='password'
        type='password'
        label="Password"
        placeholder=' '
        error={errors['password']?.message}
        register={register}
      />
      
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-3'>
      <hr className='my-3'/>
      <Button
        label='Continue with Google'
        icon={FaGoogle}
        outline
        disabled={loading}
        onClick={() => {}}
      />
      <Button
        label='Continue with Github'
        icon={AiFillGithub}
        outline
        disabled={loading}
        onClick={() => {}}
      />
      <p className='text-center text-neutral-600'>
        Haven&apos;t Registered yet? 
        <span onClick={onToggle} className='font-semibold text-primary-500 cursor-pointer'>
            Register
        </span>
      </p>
    </div>
  )

  return (
    <Modal
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        title='LogIn'
        disabled={loading}
        onSubmit={handleSubmit(submit)}
        body={bodyContent}
        footer={footerContent}
        actionLabel='LogIn'
    />
  )
}

export default LoginModal