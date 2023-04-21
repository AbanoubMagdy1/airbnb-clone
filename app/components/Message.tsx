import React from 'react'

const colorsObject = {
    'success': 'bg-green-100 text-green-800 border-green-300',
    'danger': 'bg-red-100 text-red-800 border-red-300',
    'warning': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'info': 'bg-blue-100 text-blue-800 border-blue-300'
}

interface Props {
    children: React.ReactNode;
    variant: keyof typeof colorsObject;
}

function Message({children, variant}: Props) {
  return (
    <div className={`py-3 px-4 mb-3 rounded ${colorsObject[variant]} `}>
        {children}
    </div>
  )
}

Message.defaultProps = {
    variant: 'danger'
}

export default Message