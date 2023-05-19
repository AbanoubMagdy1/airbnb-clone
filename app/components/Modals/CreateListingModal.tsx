'use client'

import React, { useMemo, useState } from 'react'
import useCreateListingModal from '@/app/state/useCreateListingModal'
import Modal from './Modal'
import CategorySelect from '../createListingSteps/Categories/CategorySelect'
import { useForm } from 'react-hook-form'
import CountrySelect from '../createListingSteps/CountrySelect'
import DetailsStep from '../createListingSteps/Details/DetailsStep'
import { Listing } from '@prisma/client'
import { ICountry } from '@/app/types'
import ImageUpload from '../createListingSteps/ImageUpload'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    DETAILS = 2,
    PHOTOS = 3
}

export type FormValues = Partial<Listing> & {country: ICountry | null}

function createDetails(values: FormValues){
  return {bathRoomCount: values.bathroomCount, roomCount: values.roomCount, guestCount: values.guestCount}
}

function CreateListingModal() {
  const createListingModal = useCreateListingModal()
  const [step, setStep] = useState(STEPS.CATEGORY)

  const { register, watch, setValue, handleSubmit, formState: {errors} } = useForm<FormValues>({
    values: {
        category: '',
        country: null,
        roomCount: 1,
        bathroomCount: 1,
        guestCount: 1,
        imageSrc: '',
    }
  })

  const formValues = watch();

  function customSetValue(id: keyof FormValues, value: any){
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
        {step == STEPS.CATEGORY && <CategorySelect setValue={customSetValue} category={formValues.category}/>}
        {step == STEPS.LOCATION && <CountrySelect setValue={customSetValue} country={formValues.country}/>}
        {step == STEPS.DETAILS && <DetailsStep setValue={customSetValue} details={createDetails(formValues)}/>}
        {step == STEPS.PHOTOS && <ImageUpload setValue={customSetValue} image={formValues.imageSrc}/>}
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