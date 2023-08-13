import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {

  return (
    <div>
        <footer className="inset-x-0 bottom-0 w-screen h-[75px] lg:h-[200px] bg-lightning bg-stone-300 bg-texture bg-cover bg-center bg-blend-overlay">
            <div className="flex flex-wrap items-center justify-center pt-1 space-x-2 lg:pt-4 lg:space-y-4 lg:space-x-6">
                <a href='https://twitter.com/' className='lg:pt-4 ' target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white"/>
                </a>
                <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white"/>
                </a>
                
                <p className='lg:text-sm text-[10px] text-black'>QUALITY </p>
                <p className='text-black text-[10px] lg:text-sm'>SERVICE</p>
                <p className='text-black text-[10px] lg:text-sm'>PRICE</p>
                
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white"/>
                </a>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white"/>
                </a>
            </div>
            
                <p className='flex justify-center text-[10px] lg:text-xs text-black pt-10 lg:pt-28'>Copyright @2023 Just The Heads. All Rights Reserved.</p>
          
            
        </footer>
    </div>
  )
}

export default Footer