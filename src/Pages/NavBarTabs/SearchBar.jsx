import React, { useState, useEffect, useRef } from 'react'

import { PRODUCTS } from '../../ProductsStore';
import { useNavigate } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const SearchBar = (props) => {
    // console.log(props.trigger)
    const navigate = useNavigate()
    const [ filteredData, setFilteredData ] = useState([])
    const [ wordEntered, setWordEntered ] = useState('')
    const [focusedIndex, setFocusedIndex] = useState(-1);
    

    //Filter through input data for result
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
    //Function for arrows on keyboard
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocusedIndex((prevIndex) =>
                prevIndex < filteredData.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (focusedIndex >= 0 && focusedIndex < filteredData.length) {
                handleSearchItemClick(filteredData[focusedIndex]);
            }
        }
    };
  
    const handleSearchItemClick = async (value) => {
        await navigate(`/products/${value.webId}`);
        props.setTrigger(false);
    };
    
    // Prevent click from bubbling to outer div
    const handleInputClick = (e) => {
        e.stopPropagation(); 
    };
 
  return (props.trigger) ? (
    <div className='fixed lg:mt-0 inset-x-0 w-screen overflow-auto bg-gray-700 bg-opacity-75 lg:top-0 h-[300px] lg:h-screen rounded-xl' 
        onClick={() => props.setTrigger(false)}>
        <div className='flex justify-end text-black duration-100 lg:pr-16 lg:pt-16 lg:text-5xl ' >    
            <button 
            className='cursor-pointer hover:text-white'
            onClick={() => props.setTrigger(false)}>X</button>
        </div>
       
        <div className='flex sm:mt-[5%] h-[50px] lg:h-auto mt-10 justify-center text-[18px]' onClick={handleInputClick} >
            <input 
                type='text' 
                onKeyDown={handleKeyDown}
                placeholder='Enter a product name...'
                className='bg-white text-[8px] lg:text-lg border-0 mb-0 lg:mb-0 p-4 lg:p-8 h-[20px] lg:h-[30px] lg:w-[500px] w-[150px] justify-center'
                onChange={handleFilter}
                value={wordEntered}
                autoFocus>
            </input>
            <div className='lg:h-[64px] h-[32px] w-[40px] lg:w-[50px] lg:text-5xl bg-white place-items-center items-center justify-center flex pr-3'>
                {filteredData.length === 0 ? <BsSearch className='text-md lg:text-3xl' /> : <AiOutlineCloseCircle className='cursor-pointer' onClick={clearInput}/>}
                
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='flex justify-center lg:pt-5'> 
            <div 
            className='lg:mt-[5px] lg:w-[300px] w-[150px] lg:h-[150px] bg-white overflow-hidden overflow-y-auto shadow-md'
            onKeyDown={handleKeyDown}>
                { filteredData.slice(0,3).map((value, key) => {
                    return( 
                    <div 
                        key={key}
                        className={`flex w-full h-[35px] p-2 content-center hover:bg-gray-100 text-black cursor-pointer ${
                            focusedIndex === key ? 'bg-gray-200' : ''
                        }`}
                        onClick={ () => handleSearchItemClick(value)
                         }>
                            <p className='ml-[10px] text-xs lg:text-xl'>{value.productName}</p>       
                    </div>)
                })}
            </div>
        </div>
        )}
    </div>
 
  ):null
}

export default SearchBar