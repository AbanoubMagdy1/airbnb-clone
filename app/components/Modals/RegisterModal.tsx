'use client';

import React, { useCallback, useEffect } from 'react'
import Modal from './Modal'
import useRegisterModel from '@/app/state/useRegisterModal'
import useAxios from '@/app/hooks/useAxios'
import { useForm, FieldValues } from 'react-hook-form'
import Input from '../Inputs/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import Heading from '../Heading';
import useLoginrModal from '@/app/state/useLoginModal';
import ModalAuthFooter from './ModalAuthFooter';

const registerSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

function RegisterModal() {
  const registerModal = useRegisterModel()
  const loginModal = useLoginrModal()

  const {register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    values: {name: '', email: '', password: ''},
    resolver: yupResolver(registerSchema),
  });

  const {call, loading, err, data} = useAxios({
    url: '/api/auth/register',
    type: 'post',
  })

  const onToggle = useCallback(() => {
    loginModal.onOpen();
    registerModal.onClose();
  }, [loginModal, registerModal])

  useEffect(() => {
    if (data) {
      onToggle()
      toast.success('Registered successfully')
    }

    if (err) {
      toast.error(err)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const bodyContent = (
    <div className='flex flex-col gap-3'>
      <Heading title="Welcome to airbnb" subtitle='Register to start enjoying our services!'/>
      <Input
        id='email'
        type='text'
        label="Email"
        placeholder=' '
        error={errors['email']?.message}
        register={register}
      />
      <Input
        id='name'
        type='text'
        label="Name"
        placeholder=' '
        error={errors['name']?.message}
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
      <ModalAuthFooter loading={loading}/>
      <p className='text-center text-neutral-600'>
        Already have an account? 
        <span onClick={onToggle} className='font-semibold text-primary-500 cursor-pointer'>
          Login
        </span>
      </p>
    </div>
  )

  return (
    <Modal
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        title='Register'
        disabled={loading}
        onSubmit={handleSubmit(call)}
        body={bodyContent}
        footer={footerContent}
        actionLabel='Register'
    />
  )
}

export default RegisterModal