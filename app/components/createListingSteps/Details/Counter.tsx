import React, {memo} from 'react'
import Heading from '../../Heading';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface Props {
    title: string;
    subtitle: string;
    value: number;
    setValue: (value: number) => void;
}

function Counter({title, subtitle, value, setValue}: Props) {
    function handleIncrease(){
        setValue(value + 1)
    }

    function handleDecrease(){
        if(value <= 1) return;
        setValue(value - 1)
    }

  return (
    <div className='flex justify-between items-center'>
        <div className="flex flex-col">
            <div className="font-medium">{title}</div>
            <div className="font-light text-gray-600">
            {subtitle}
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <button onClick={handleDecrease} 
            className='w-10 h-10 rounded-full flex items-center justify-center border-2 p-2 transition hover:bg-neutral-100'>
                <AiOutlineMinus/>
            </button>
            <div className='font-medium'>{value}</div>
            <button onClick={handleIncrease} 
            className='w-10 h-10 rounded-full flex items-center justify-center border-2 p-2 transition hover:bg-neutral-100'>
                <AiOutlinePlus/>
            </button>
        </div>
    </div>
  )
}

export default memo(Counter)