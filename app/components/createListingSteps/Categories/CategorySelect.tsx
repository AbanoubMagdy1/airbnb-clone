import React, { memo } from 'react'
import Heading from '../../Heading'
import { categories } from '@/app/data'
import SingleCategory from './SingleCategory'

interface Props {
    setValue: (id: string, value: any) => void;
    category: string
}

function CategorySelect({category: selectedCategory, setValue} : Props) {
  function setCategory(category: string){
    setValue('category', category)
  }

  return (
    <div>
        <Heading
           title="Pick a category"
           subtitle='What most describe your listing?'
        />

        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 max-h-72 overflow-x-auto'>
            {categories.map(category => <SingleCategory 
                key={category.label}
                label={category.label}
                icon={category.icon}
                selected={selectedCategory == category.label}
                onSelect={setCategory}
            />)}
        </div>
    </div>
  )
}

export default memo(CategorySelect)