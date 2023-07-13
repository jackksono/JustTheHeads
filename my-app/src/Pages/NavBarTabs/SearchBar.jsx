import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
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
    <div className='fixed mt-20 lg:mt-0 inset-x-0 w-screen overflow-auto bg-gray-500 bg-opacity-75 h-[300px] lg:h-screen rounded-xl' ref={clickAway}>
            <div className='flex justify-end pr-12 text-black lg:text-4xl'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
        <div className='flex lg:mt-[100px] h-[50px] lg:h-1/4 mt-10 justify-center text-[18px]'>
            <input type='text' placeholder='Enter a product name...'
            className='bg-white text-[8px] lg:text-lg border-0 mb-0 lg:mb-0 p-4 lg:p-8 h-[20px] lg:h-[30px] lg:w-[300px] w-[150px] justify-center'
            onChange={handleFilter}
            value={wordEntered}>
            </input>
            <div className='lg:h-[64px] h-[32px] w-[40px] lg:w-[50px] lg:text-5xl bg-white place-items-center items-center justify-center flex pr-3'>
                {filteredData.length === 0 ? <BsSearch className='text-md lg:text-3xl' /> : <AiOutlineCloseCircle className='cursor-pointer' onClick={clearInput}/>}
                
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='flex justify-center pr-[40px] lg:pr-[50px]'>
            <div className='lg:mt-[5px] lg:w-[300px] w-[150px] lg:h-[150px] bg-white overflow-hidden overflow-y-auto shadow-md'>
                { filteredData.slice(0,3).map((value, key) => {
                    return( <div className='flex w-full h-[35px] p-2 content-center hover:bg-gray-100 text-black cursor-pointer'
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