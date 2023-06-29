import React from 'react'
import {FaSnapchatGhost, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className="inset-x-0 bottom-0 w-screen h-[300px] bg-lightning bg-stone-300 bg-texture bg-cover bg-center bg-blend-overlay">
            <div className="flex text-black justify-center space-x-20 pt-4">
                <FaTwitter className="h-7 w-7"/>
                <FaYoutube className="h-7 w-7"/>
                <p>QUALITY </p>
                <p>SERVICE</p>
                <p>PRICE</p>
                <FaSnapchatGhost className="h-7 w-7"/>
                <FaInstagramSquare className="h-7 w-7"/>
                
                
            </div>
            
                <p className='flex pt-60 text-xs text-black justify-center'>Copyright @2023 Just The Heads. All Rights Reserved.</p>
          
            
        </footer>
    </div>
  )
}

export default Footer