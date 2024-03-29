import React, {useState} from "react";
import emailjs from "@emailjs/browser"
import { useClickAway } from "@uidotdev/usehooks";

import '../../index.css'
import { IoIosSend } from 'react-icons/io'

const ContactUs = (props) => {
    const [ data, setData ] = useState({name:"", email:"", phone:""})
    const [ message, setMessage ] = useState()
    const [ result, showResult ] = useState(false)
    const [ validEmail, setValidEmail ] = useState(false)

    const clickAway = useClickAway(() => {
        const close = () => props.setTrigger(false)
        const close2 = () => props.setContactUsActive(false);
        close2()
        close()
        
      });
    

    const Result = () => {
        return (
            <p>Your message has been successfully sent!</p>
        )
    }

    const EmailResponse = () => {
        return (
            <p>**Please enter a valid email**</p>
        )
    }

    const messageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // Handle email validation
        if (name === 'email') {
            let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setValidEmail(!re.test(value));
        }

        setData({ ...data, [name]: value });
    }

    const sendMail = (e) => { //EmailJS documentation
       // console.log(e)
        e.preventDefault()
        if(!validEmail) {
            emailjs
        .sendForm('service_0bd37pt', 'template_sasqli3', e.target, 'iauEh19za_KMIe1hP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setData("")
        setMessage("")
        showResult(true)
        }
        else (setValidEmail(true))  
    };

    return (props.trigger) ? (
        <div className="fixed overflow-auto lg:inset-x-0 lg:mx-auto w-84 lg:w-1/2 lg:h-[720px] bg-color-primary bg-opacity-80 rounded-xl shadow-2xl duration-500" ref={clickAway} >
            <form className="" method="post" onSubmit={sendMail}>
                <div className='flex justify-end pr-5 font-mono text-2xl duration-100 text-color-text hover:text-white '>    
                    <button  onClick={() => {
                        props.setContactUsActive(false);
                        props.setTrigger(false)}}>X</button>
                </div>
                <h1 className="flex justify-center pl-10 pr-10 font-mono text-2xl text-white lg:text-4xl">How's The <span className="justify-center font-mono italic underline duration-1000 text-color-text animate-bounce">Head?</span></h1>
                
                    
                <div className="pl-6 text-lg italic text-color-text ">
                    <span className="pl-3 font-mono text-sm lg:text-xl" >Name (required)</span>
                    <input className="flex justify-center p-1 m-1 lg:m-3 font-mono  border-2 h-[25px] lg:h-auto border-color-secondary border-solid shadow-lg w-11/12 text-md lg:text-lg focus:outline-none focus:border-color-secondary focus:border-4 bg-opacity-90 rounded-xl" 
                    type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="Enter name" required/>
                </div>

                <div className="pl-6 text-lg italic text-color-text ">
                    <span className="pl-3 font-mono text-sm lg:text-xl ">Email (required)</span>
                    <input className="flex font-mono  justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto border-2 border-color-secondary border-solid shadow-lg lg:text-lg focus:outline-none focus:border-color-secondary focus:border-4 rounded-xl" 
                    type='email' name='email' id="" onInput={handleChange}  value={data.email} placeholder="example@gmail.com" required/>
                    <h2 className= "font-semibold text-center text-red-900 underline text-md ">{validEmail ? <EmailResponse/> : null }</h2>
                </div>

                <div className="pl-6 text-lg italic text-color-text ">
                    <span className="pl-3 font-mono text-sm lg:text-xl ">Phone#</span>
                    <input className="flex font-mono  justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto text-md lg:text-lg border-2 border-color-secondary border-solid shadow-lg focus:outline-none focus:border-color-secondary focus:border-4 rounded-xl" 
                    type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
                </div>

                <div className="pl-6 text-lg italic text-color-text ">
                    <span className="pl-3 font-mono text-sm lg:text-xl ">Message (required)</span>
                    <textarea className="flex font-mono  justify-center w-11/12 p-1 m-1 lg:m-3 h-[75px] lg:h-auto text-md lg:text-lg border-2 border-color-secondary border-solid shadow-lg focus:outline-none focus:border-color-secondary focus:border-4 rounded-xl" 
                    name='message' id='' cols='30' rows='7' onChange={messageChange} value={message} placeholder="Enter message here..." required/>
                </div>
                
                <h2 className= "justify-center pb-2 font-mono text-lg text-center text-white">{result ? <Result/> : null}</h2>
                
                <div className="flex justify-center mt-4">
                    <button 
                        className="w-1/5 p-2 h-[40px] text-color-text  lg:w-1/4 bg-white rounded-xl hover:text-color-text hover:bg-color-secondary flex items-center justify-center space-x-2 lg:text-xl font-mono " type='submit'>Send
                        <IoIosSend className="ml-1 text-2xl"></IoIosSend>
                    </button>
                </div>    
            </form> 
    </div>
    ): ""
}

export default ContactUs