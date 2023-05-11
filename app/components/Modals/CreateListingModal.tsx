'use client'

import React, { useMemo, useState } from 'react'
import useCreateListingModal from '@/app/state/useCreateListingModal'
import Modal from './Modal'
import CategorySelect from '../createListingSteps/Categories/CategorySelect'
import { FieldValues, useForm } from 'react-hook-form'
import CountrySelect from '../createListingSteps/CountrySelect'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    DETAILS = 2,
    PHOTOS = 3
}

function CreateListingModal() {
  const createListingModal = useCreateListingModal()
  const [step, setStep] = useState(STEPS.CATEGORY)

  const { register, watch, setValue, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    values: {
        category: '',
        country: null,
    }
  })

  const category = watch('category');
  const country = watch('country');

  function customSetValue(id: string, value: any){
    setValue(id, value, {
        shouldValidate: true
    })
  }

  const actionLabel = useMemo(() => {
    if(step == STEPS.PHOTOS){
        return 'Create'
    }
    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if(step == STEPS.CATEGORY) return undefined
    return 'Back'
  }, [step])


  function nextStep(){
    setStep(step => step + 1)
  }

  function prevStep(){
    setStep(step => step - 1)
  }

  const body = (
    <>
        {step == STEPS.CATEGORY && <CategorySelect setValue={customSetValue} category={category}/>}
        {step == STEPS.LOCATION && <CountrySelect setValue={customSetValue} country={country}/>}
    </>
  );

  return (
    <Modal
        isOpen={createListingModal.isOpen}
        title="Create Listing"
        body={body}
        onClose={createListingModal.onClose}
        onSubmit={nextStep}
        actionLabel={actionLabel}
        secondaryAction={step == STEPS.CATEGORY ? undefined : prevStep}
        secondaryActionLabel={secondaryActionLabel}
    />
  )
}

export default CreateListingModal