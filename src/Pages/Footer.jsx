import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {

  return (
    <div>
        <footer className="inset-x-0 bottom-0 w-screen h-[75px] lg:h-[200px] bg-lightning bg-stone-700 out bg-texture bg-cover bg-center bg-blend-overlay">
            <div className="flex flex-wrap items-center justify-center pt-1 space-x-2 text-white lg:pt-4 lg:space-y-4 lg:space-x-6">
                <a href='https://twitter.com/' className='lg:pt-4 ' target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:scale-125"/>
                </a>
                <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white hover:scale-125"/>
                </a>
                
                <p className='lg:text-sm text-[10px] text-white'>QUALITY </p>
                <p className='text-white text-[10px] lg:text-sm'>SERVICE</p>
                <p className='text-white text-[10px] lg:text-sm'>PRICE</p>
                
                <a href='https://www.facebook.com/profile.php?id=61550237744732' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white hover:scale-125"/>
                </a>
                <a href='https://www.instagram.com/justtheheadz/' target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className="w-3 h-3 duration-100 cursor-pointer lg:h-7 lg:w-7 hover:text-white hover:scale-125"/>
                </a>
            </div>
            
                <p className='flex justify-center text-[10px] lg:text-xs text-white pt-10 lg:pt-28'>Copyright @2023 Just The Heads. All Rights Reserved.</p>
          
            
        </footer>
    </div>
  )
}

export default Footer