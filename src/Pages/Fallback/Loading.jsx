import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='fixed flex flex-col items-center justify-center w-screen h-screen bg-color-background'>
        <p className='text-color-text'>Loading</p>
        <AiOutlineLoading3Quarters className='flex animate-spin'></AiOutlineLoading3Quarters>
    </div>
  )
}

export default Loading