import React from "react";
import { useNavigate } from "react-router-dom";


const Cancel = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center pt-48 text-lg">
            <div className="justify-center items-center text-center w-[700px] h-[150px] rounded-[25px] m-[30px]">
                <div className="relative pt-4 text-2xl text-center lg:text-5xl">We're sorry to see you go...</div>
                <div className="flex flex-row justify-center w-auto pt-4">
                    <button 
                        onClick={() => navigate('/')} 
                        className="lg:w-[200px] lg:h-[50px] w-[100px] h-[50px] text-sm lg:text-lg bg-black text-white rounded-[8px] m-[10px] cursor-pointer"> 
                        Home 
                    </button>
                    <button 
                        onClick={() => navigate('/all-products')} 
                        className="lg:w-[200px] lg:h-[50px] w-[100px] h-[50px] lg:text-lg bg-black text-sm text-white rounded-[8px] m-[10px] cursor-pointer"> 
                        Continue Shopping 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cancel