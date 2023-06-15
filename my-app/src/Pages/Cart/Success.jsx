import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {

    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center  pt-48 text-lg">
            <div className="justify-center items-center text-center w-[700px] h-[150px] shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px]">
                <div className="pt-4 relative text-2xl text-center">Thank you for your purchase!</div>
                <div className="pt-4">
                    <button 
                        onClick={() => navigate('/')} 
                        className="w-[200px] h-[50px] bg-black text-white rounded-[8px] m-[10px] cursor-pointer"> 
                        Home 
                    </button>
                    <button 
                        onClick={() => navigate('/all-products')} 
                        className="w-[200px] h-[50px] bg-black text-white rounded-[8px] m-[10px] cursor-pointer"> 
                        Continue Shopping 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Success