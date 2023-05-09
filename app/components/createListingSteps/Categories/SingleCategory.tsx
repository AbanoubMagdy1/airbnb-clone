import React, { memo } from 'react'
import { IconType } from 'react-icons'

interface Props {
    icon: IconType;
    label: string;
    onSelect: (category: string) => void
    selected?: boolean;
}

function SingleCategory({label, selected, icon : Icon, onSelect}: Props) {
  return (
    <div 
        onClick={() => onSelect(label)}
        className={`
            flex
            items-center
            justify-center
            transition
            gap-2
            p-4
            cursor-pointer
            border-2
            rounded-2
            hover:bg-zinc-200
            hover:border-zinc-600
            ${selected ? 'bg-zinc-300' : 'bg-zinc-50'}
            ${selected ? 'border-zinc-800' : 'border-zinc-400'}
    `}>
        <Icon size={26}/>
        <p>{label}</p>
    </div>
  )
}

export default memo(SingleCategory)