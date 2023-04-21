import React from 'react'
import Modal from './Modal'
import useRegisterModel from '@/app/state/useRegisterModal'
import useAxios from '@/app/hooks/useAxios'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'

function RegisterModal() {
  const {isOpen, onClose} = useRegisterModel();

  const {register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    values: {name: '', email: '', password: ''}
  });

  const {call, loading, err, data} = useAxios({
    url: '/api/auth/register',
    type: 'post',
  })

  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title='Register'
        disabled={loading}
        onSubmit={handleSubmit(call)}
        actionLabel='Register'
    />
  )
}

export default RegisterModal