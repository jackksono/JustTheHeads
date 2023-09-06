import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [ data, setData ] = useState({ name:'', email:'', password:''})
    const [ error, setError ] = useState('')

    const createUser = async (e) => {
        e.preventDefault()
        const { name, email, password } = data
        try {
            const response = await axios.post('http://localhost:4000/signup', { name, password, email })
            console.log("This is the button response", response.data)
            navigate('/login')
          } catch (err) {
            console.log("Error inside the POST signup button", err)
            setError('***Unable to Create Account***')
          }
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-center bg-cover bg-color-background bg-allProducts bg-blend-lighten font-CabinSketch">
        <h1 className='pb-4 text-2xl font-bold text-black'>Signup Here</h1>
        <div>
            <form className='flex flex-col items-center justify-items-center rounded-2xl'  onSubmit={createUser}>
                <input 
                    className='w-full pl-3 m-2 rounded-xl'
                    type='text' 
                    placeholder='Enter Name...' 
                    value={data.name} 
                    onChange={(e) => setData({...data, name: e.target.value})} 
                    required>
                </input>
                <input 
                    className='w-full pl-3 m-2 rounded-xl'
                    type='email' 
                    placeholder='Enter Email...' 
                    value={data.email} 
                    onChange={(e) => setData({...data, email: e.target.value})} 
                    required>
                </input>
                <input 
                    className='w-full pl-3 m-2 rounded-xl'
                    type='password'
                    placeholder='Create Password...' 
                    value={data.password} 
                    onChange={(e) => setData({...data, password: e.target.value})} 
                    required>
                </input>
                <button className='absolute mt-40 m-6 w-[100px] text-center justify-center hover:bg-cyan-400 bg-color-primary border border-black border-solid rounded-xl'>Sign Up</button>
            </form>
            <div className='flex justify-center text-red-700'>
                <p>{error}</p>
            </div> 
            <div className='pt-16 text-stone-600 '>
            Have an account already? 
            <Link to="/login" className='p-4 underline text-stone-600 hover:text-stone-800 '>
                Login right here!
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Register