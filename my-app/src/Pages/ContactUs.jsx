import React, {useState} from "react";
import emailjs from "@emailjs/browser"

const ContactUs = (props) => {
    const [ data, setData ] = useState({name:"", email:"", phone:"", message:""})
    const [ result, showResult ] = useState(false)


    const Result = () => {
        return (
            <p>Your message has been successfully sent!</p>
        )
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name]:value})
    }

    const sendMail = (e) => { //EmailJS documentation
        e.preventDefault()

        emailjs
        .sendForm('service_0bd37pt', 'template_sasqli3', e.target, 'iauEh19za_KMIe1hP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setData("")
        showResult(true)
    };

    return (props.trigger) ? (
        <div className='fixed scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 inset-x-0 mx-auto h-screen w-1/2 bg-red-500 bg-opacity-95 rounded-xl'>
        {/* <div className="h-full w-full pl-10 text-3xl"> */}
        <form className="" method="post" onSubmit={sendMail}>
                <div className='flex justify-end pr-3 pt-3 text-lg'>    
                    <button  onClick={() => props.setTrigger(false)}>X</button>
                </div>
            <h1 className="flex text-black pl-10 text-7xl">Contact <span className="text-orange-300">Here</span></h1>
            
                
                <div className="text-lg text-black">Name:
                    <input className="m-3 w-6/12 p-5 flex border-solid border-2 border-black text-lg" 
                    type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
                </div>

                <div className="text-lg text-black">Email:
                    <input className="m-3 w-6/12 p-5 flex border-solid border-2 border-black text-lg" 
                    type='email' name='email' id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
                </div>

                <div className="text-lg text-black">Phone#:
                    <input className="m-3 w-6/12 p-5 flex border-solid border-2 border-black text-lg" 
                    type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
                </div>

                <div className="text-lg text-black">Message:
                    <textarea className="border-solid border-2 border-black m-3 w-6/12 p-5 flex border-solid text-lg" 
                    name='message' id='' cols='30' rows='10' onChange={handleChange} value={data.message} placeholder="Enter message here..."/>
                </div>
                <button className=" flex content-center text-lg bg-cyan-500 text-black" type='submit'>Send</button>
            
            <h2 className= "pt-5 text-lg text-black">{result ? <Result/> : null}</h2>  
         </form>  
    {/* </div> */}
    </div>
    ): ""
}

export default ContactUs