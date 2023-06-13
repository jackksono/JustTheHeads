import React, {useState} from "react";
import emailjs from "@emailjs/browser"

const ContactUs = (props) => {
    const [ data, setData ] = useState({name:"", email:"", phone:""})
    const [ message, setMessage ] = useState()
    const [ result, showResult ] = useState(false)


    const Result = () => {
        return (
            <p>Your message has been successfully sent!</p>
        )
    }

    const messageChange = (e) => {
        setMessage(e.target.value)
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
        setMessage("")
        showResult(true)
    };

    return (props.trigger) ? (
        <div className="fixed overflow-auto inset-x-0 mx-auto h-screen w-1/2 bg-red-500 bg-opacity-75 rounded-xl">
       
        <form className="" method="post" onSubmit={sendMail}>
            <div className='flex pr-5 justify-end text-2xl text-black'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
            <h1 className="flex justify-center text-black pl-10 text-4xl ">How's The <span className="text-orange-300">Head?</span></h1>
            
                
            <div className="text-lg text-black pl-6">
                <span className="pl-3">Name:</span>
                <input className="m-3 justify-center w-11/12 p-1 flex border-solid border-2 border-black text-lg" 
                type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
            </div>

            <div className="text-lg text-black pl-6">
                <span className="pl-3">Email:</span>
                <input className="m-3 justify-center w-11/12 p-1 flex border-solid border-2 border-black text-lg" 
                type='email' name='email' id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
            </div>

            <div className="text-lg text-black pl-6">
                <span className="pl-3">Phone#:</span>
                <input className="m-3 justify-center w-11/12 p-1 flex border-solid border-2 border-black text-lg" 
                type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
            </div>

            <div className="text-lg text-black pl-6">
                <span className="pl-3">Message:</span>
                <textarea className="border-solid border-2 p-1 border-black m-3 justify-center w-11/12  flex border-solid text-lg" 
                name='message' id='' cols='30' rows='10' onChange={messageChange} value={message} placeholder="Enter message here..."/>
            </div>
            
            <h2 className= "pt-5 text-lg text-black text-center justify-center">{result ? <Result/> : null}</h2>  {/*Hidden message has been sent*/}
            <div className="justify-center items-center text-center">
                <button className="w-1/4 bg-cyan-500 text-white rounded-xl hover:text-cyan-500 hover:bg-white" type='submit'>Send</button>
            </div>    
         </form>  
    </div>
    ): ""
}

export default ContactUs