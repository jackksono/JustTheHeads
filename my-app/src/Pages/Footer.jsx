import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {

  return (
    <div>
        <footer className="inset-x-0 bottom-0 w-screen h-[200px] bg-lightning bg-stone-300 bg-texture bg-cover bg-center bg-blend-overlay">
            <div className="flex flex-wrap items-center justify-center pt-4 space-y-4 sm:space-y-0 sm:space-x-6">
                <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="cursor-pointer h-7 w-7 hover:text-white"/>
                </a>
                <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="cursor-pointer h-7 w-7 hover:text-white"/>
                </a>
                
                <p className='text-sm text-black'>QUALITY </p>
                <p className='text-sm text-black'>SERVICE</p>
                <p className='text-sm text-black'>PRICE</p>
                
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="cursor-pointer h-7 w-7 hover:text-white"/>
                </a>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className="cursor-pointer h-7 w-7 hover:text-white"/>
                </a>
                
                
                
            </div>
            
                <p className='flex justify-center pt-16 text-xs text-black sm:pt-32'>Copyright @2023 Just The Heads. All Rights Reserved.</p>
          
            
        </footer>
    </div>
  )
}

export default Footer