import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { PRODUCTS } from '../ProductsStore';
import { useNavigate } from 'react-router-dom';


const SearchBar = (props) => {
    const navigate = useNavigate()
 
  return (props.trigger) ? (
    <div className='fixed overflow-auto inset-x-0 mx-auto w-screen h-screen bg-gray-500 bg-opacity-75 rounded-xl'>
            <div className='flex pr-12 justify-end text-2xl text-black'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
        <div className='flex mt-[200px] justify-center text-[18px]'>
            <input type='text' placeholder='Enter a product name...'
            className='bg-white border-0 p-8 h-[30px] w-[300px] justify-center'>
            </input>
            <div className='searchIcon h-[64px] w-[50px] text-5xl bg-white place-items-center'>
                <SearchIcon />
            </div>
        </div>
        <div className='justify-center align-center content-center mt-[5px] w-[300px] h-[50px] bg-white overflow-hidden overflow-y-auto shadow-md'>
            { PRODUCTS.map((value, key) => {
                return <div className='ml-[10px] hover:bg-gray-100'> 
                    <button onClick={() => navigate(`/products/${value.webId}`)}>
                        <p>{value.productName}</p>
                    </button>         
                </div>
            })}
        </div>
    </div>
  ):""
}

export default SearchBar