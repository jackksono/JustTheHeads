import React from 'react'

const SearchBar = (props, { data }) => {
  return (props.trigger) ? (
    <div className='fixed overflow-auto inset-x-0 mx-auto w-screen h-screen bg-gray-500 bg-opacity-75 rounded-xl'>
            <div className='flex pr-12 justify-end text-2xl text-black'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
        <div className='flex mt-[200px] justify-center'>
            <input type='text' placeholder='Enter a product name...'
            className='bg-white border-0 p-8 h-[30px] w-[300px] justify-center'>
            </input>
            <div className='searchIcon h-[64px] w-[50px] bg-white place-items-center'></div>
        </div>
        <div className='dataResult'></div>
    </div>
  ):""
}

export default SearchBar