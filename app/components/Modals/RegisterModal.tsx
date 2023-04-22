'use client';

import React, { useEffect } from 'react'
import Modal from './Modal'
import useRegisterModel from '@/app/state/useRegisterModal'
import useAxios from '@/app/hooks/useAxios'
import { useForm, FieldValues } from 'react-hook-form'
import Input from '../Inputs/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import {FaGoogle} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai';
import Button from '../Button';

const registerSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

function RegisterModal() {
  const {isOpen, onClose} = useRegisterModel();

  const {register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    values: {name: '', email: '', password: ''},
    resolver: yupResolver(registerSchema),
  });

  const {call, loading, err, data} = useAxios({
    url: '/api/auth/register',
    type: 'post',
  })

  useEffect(() => {
    if (data) {
      onClose();
      toast.success('Registered successfully')
    }

    if (err) {
      toast.error(err)
    }
  }, [loading])


  const bodyContent = (
    <div className='flex flex-col gap-3'>
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
      <hr className='my-3'/>
      <Button
        label='Register with Google'
        icon={FaGoogle}
        outline
        onClick={() => {}}
      />
      <Button
        label='Register with Github'
        icon={AiFillGithub}
        outline
        onClick={() => {}}
      />
      <p className='text-center text-neutral-600'>
        Already have an account? <span className='font-semibold text-primary-500 cursor-pointer'>Login</span>
      </p>
    </div>
  )

  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
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