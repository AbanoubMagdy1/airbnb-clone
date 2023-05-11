'use client'

import { ICountry } from '@/app/types';
import React from 'react'
import Heading from '../Heading';
import Select from 'react-select';
import { countries } from '@/app/data';
import Map from '../maps/Map';

interface Props {
    setValue: (id: string, value: any) => void;
    country: ICountry | null;
}

function CountrySelect({setValue, country}: Props) {
  function setCountry(country: ICountry){
    setValue('country', country)
  }

  return (
    <div className='flex flex-col gap-4'>
        <Heading title="Pick a country" subtitle='Where is your listing located?!'/>

        <Select
            placeholder='Select a country'
            isClearable
            onChange={(value) => setCountry(value as ICountry)}
            value={country}
            options={countries}
            formatOptionLabel={(option) => (
                <div className='flex items-center gap-2'>
                    <div>{option.flag}</div>
                    <div>{option.value}, 
                      <span className="text-neutral-500">
                        &nbsp;{option.region}
                      </span>
                    </div>
                </div>
            )}
            classNames={{
              control: () => 'p-3 border-2',
              input: () => 'text-lg',
              option: () => 'text-lg',
              menu: () => 'z-50'
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 6,
              colors: {
                ...theme.colors,
                primary: 'black',
                primary25: '#ffe4e6'
              }
            })}
        />

        <Map center={country?.latlng} />
    </div>
  )
}

export default CountrySelect