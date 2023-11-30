import clsx from 'clsx'
import React from 'react'
interface ButtonProps{
    value:String,
    mode?:'dark' | 'light',
    varient?:'primary' | 'secondary',
    
}
export default function Button({value,mode,varient}:ButtonProps) {
  return (      
    <div className={clsx(
      "py-2 px-4 mx-2 my-2 rounded-lg capitalize text-white font-bold text-md bg-zinc-700 ",
      {
        'bg-zinc':mode === "dark",
        '':mode ==="light"
      },
      {
        
      }
    )}>
        {value}
    </div>
  )
}
