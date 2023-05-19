import React from 'react'
import Heading from '../../Heading';
import Counter from './Counter';
import { FormValues } from '../../Modals/CreateListingModal';

interface Props {
    details: Record<string, number | undefined>;
    setValue: (id: keyof FormValues, value: any) => void;
}

function DetailsStep({details, setValue}: Props) {
  return (
    <div className='flex flex-col gap-4'>
        <Heading title='Details' subtitle='Add more details to your listing'/>
        <div className='flex flex-col gap-4'>
            <Counter 
              title="Rooms count"
              subtitle="How many rooms are available?"
              value={details.roomCount as number}
              setValue={(value) => setValue('roomCount', value)}
            />
            <Counter 
              title="Bathrooms count"
              subtitle="How many bathrooms are available?"
              value={details.bathRoomCount as number}
              setValue={(value) => setValue('bathroomCount', value)}
            />
            <Counter 
              title="Guest count"
              subtitle="How many guests can your listing accommodate?"
              value={details.guestCount as number}
              setValue={(value) => setValue('guestCount', value)}
            />
        </div>
    </div>
  )
}

export default DetailsStep