import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {

  return (
    <div>
        <footer className="inset-x-0 bottom-0 w-screen h-[200px] bg-lightning bg-stone-300 bg-texture bg-cover bg-center bg-blend-overlay">
            <div className="flex text-black justify-center space-x-20 pt-4">
                <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-7 w-7 cursor-pointer hover:text-white"/>
                </a>
                <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="h-7 w-7 cursor-pointer hover:text-white"/>
                </a>
                
                <p>QUALITY </p>
                <p>SERVICE</p>
                <p>PRICE</p>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="h-7 w-7 cursor-pointer hover:text-white"/>
                </a>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className="h-7 w-7 cursor-pointer hover:text-white"/>
                </a>
                
                
                
            </div>
            
                <p className='flex pt-32 text-xs text-black justify-center'>Copyright @2023 Just The Heads. All Rights Reserved.</p>
          
            
        </footer>
    </div>
  )
}

export default Footer