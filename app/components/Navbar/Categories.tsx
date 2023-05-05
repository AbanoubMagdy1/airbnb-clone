'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'
import Container from '../Container';
import { categories } from '@/app/data';
import Category from '../Category';

function Categories() {
  const pathname = usePathname()
  const params = useSearchParams();
  const category = params?.get('category');
  const isMainPage = pathname === '/';
  

  if(!isMainPage) return null;

  return (
    <Container>
        <div className='flex justify-between gap-1 py-4 overflow-x-auto'>
            {categories.map((item, i) => (
                <Category key={i} category={item} selected={category === item.label }/>
            ))}
        </div>
    </Container>
  )
}

export default Categories