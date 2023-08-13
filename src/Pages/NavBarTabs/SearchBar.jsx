import React, { useState } from 'react'

import { PRODUCTS } from '../../ProductsStore';
import { useNavigate } from 'react-router-dom';
import { useClickAway } from "@uidotdev/usehooks";

import { BsSearch } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const SearchBar = (props) => {
    const navigate = useNavigate()
    const [ filteredData, setFilteredData ] = useState([])
    const [ wordEntered, setWordEntered ] = useState('')

    const clickAway= useClickAway(() => {
        const close = () => props.setTrigger(false);
        close()
      });

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord)
        const newFilter = PRODUCTS.filter((value) => {
            return value.productName.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord === '') {
            setFilteredData([])
        }
        else {
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered('')
    }
 
  return (props.trigger) ? (
    <div className='fixed lg:mt-0 inset-x-0 w-screen overflow-auto bg-gray-700 bg-opacity-75 lg:top-0 h-[300px] lg:h-screen rounded-xl'>
        <div className='flex justify-end text-black duration-100 cursor-pointer lg:pr-16 lg:pt-16 lg:text-5xl hover:text-white'>    
            <button onClick={() => props.setTrigger(false)}>X</button>
        </div>
       
        <div className='flex lg:mt-[160px] h-[50px] lg:h-auto mt-10 justify-center text-[18px]' ref={clickAway}>
            <input 
                type='text' 
                placeholder='Enter a product name...'
                className='bg-white text-[8px] lg:text-lg border-0 mb-0 lg:mb-0 p-4 lg:p-8 h-[20px] lg:h-[30px] lg:w-[500px] w-[150px] justify-center'
                onChange={handleFilter}
                value={wordEntered}>
            </input>
            <div className='lg:h-[64px] h-[32px] w-[40px] lg:w-[50px] lg:text-5xl bg-white place-items-center items-center justify-center flex pr-3'>
                {filteredData.length === 0 ? <BsSearch className='text-md lg:text-3xl' /> : <AiOutlineCloseCircle className='cursor-pointer' onClick={clearInput}/>}
                
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='flex justify-center lg:pt-5'>
            <div className='lg:mt-[5px] lg:w-[300px] w-[150px] lg:h-[150px] bg-white overflow-hidden overflow-y-auto shadow-md'>
                { filteredData.slice(0,3).map((value, key) => {
                    return( 
                    <div 
                        key={key}
                        className='flex w-full h-[35px] p-2 content-center hover:bg-gray-100 text-black cursor-pointer'
                        onClick={() => {
                        navigate(`/products/${value.webId}`)
                        props.setTrigger(false) }}>
                            <p className='ml-[10px] text-xs lg:text-xl'>{value.productName}</p>       
                    </div>)
                })}
            </div>
        </div>
        )}
    </div>
 
  ):""
}

export default SearchBar