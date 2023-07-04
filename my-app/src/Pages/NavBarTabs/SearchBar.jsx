import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { PRODUCTS } from '../../ProductsStore';
import { useNavigate } from 'react-router-dom';
import { useClickAway } from "@uidotdev/usehooks";


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
    <div className='fixed mt-20 lg:mt-0 inset-x-0 w-screen overflow-auto bg-gray-500 bg-opacity-75 h-[400px] lg:h-screen rounded-xl' ref={clickAway}>
            <div className='flex justify-end pr-12 text-2xl text-black'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
        <div className='flex lg:mt-[200px] mt-10 justify-center text-[18px]'>
            <input type='text' placeholder='Enter a product name...'
            className='bg-white text-[8px] lg:text-lg border-0 mb-20 lg:mb-0 p-8 h-[15px] lg:h-[30px] lg:w-[300px] w-[150px] justify-center'
            onChange={handleFilter}
            value={wordEntered}>
            </input>
            <div className='h-[64px] w-[50px] text-5xl bg-white place-items-center'>
                {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon className='cursor-pointer' onClick={clearInput}/>}
                
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='flex justify-center pr-[50px]'>
            <div className='lg:mt-[5px] lg:w-[300px] lg:h-[150px] bg-white overflow-hidden overflow-y-auto shadow-md'>
                { filteredData.slice(0,3).map((value, key) => {
                    return( <div className='flex w-full h-[50px] content-center hover:bg-gray-100 text-black cursor-pointer'
                    onClick={() => {
                        navigate(`/products/${value.webId}`)
                        props.setTrigger(false) }}>
                            <p className='ml-[10px]'>{value.productName}</p>       
                    </div>)
                })}
            </div>
        </div>
        )}
    </div>
  ):""
}

export default SearchBar