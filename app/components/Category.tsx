import React, { useCallback } from 'react'
import { ICategory } from '../types'
import { useSearchParams, useRouter } from 'next/navigation';
import qs from 'query-string';

interface Props {
    category: ICategory;
    selected: boolean;
}

function Category({category, selected}: Props) {
  const router = useRouter();
  const params = useSearchParams()  
  const {label, description, icon: Icon} = category;

  const handleSelect = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, router, params])
  
  return (
    <div className={`
        flex
        flex-col
        p-3
        items-center
        transition
        cursor-pointer
        gap-2
        hover:text-neutral-800
        border-b-2
        ${selected ? 'border-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
       title={description}
       onClick={handleSelect}
    >
        <Icon size={22}/>
        <span className='text-sm'>{label}</span>
    </div>
  )
}

export default Category