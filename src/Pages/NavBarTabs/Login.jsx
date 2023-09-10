import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
    const [ data, setData ] = useState({ email: '', password: ''});
    const [ error, setError ] = useState('')

    const { login } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        const { email, password } = data;
        try {
          console.log('it tried to run')
            const response = await axios.post ('http://localhost:4000/users/verify', {email, password})
            if (response.status === 200) {
              login()
                navigate('/')
            } else {
                setError('Invalid Username or Password')
            }
        }
        catch (err) {
            console.log(err)
            setError('Invalid Username or Password')
        }
    }
    return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-center bg-cover bg-color-background bg-allProducts bg-blend-lighten font-CabinSketch">
          <h1 className='text-2xl font-bold text-black'>Login Here</h1>
          
          <div className='text-red-700'>{error}</div>
          
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center"
          >
            <input
             className='pl-3 m-2 rounded-xl'
              type="email"
              placeholder="Email:"
              value={data.email}
              onChange={(e) => setData({...data, email:e.target.value})}
            />
            <input
             className='pl-3 m-2 rounded-xl'
              type="password"
              placeholder="Password:"
              value={data.password}
              onChange={(e) => setData({...data, password:e.target.value})}
            />
            <button className='absolute mt-32 m-6 w-[100px] text-center justify-center hover:bg-cyan-400 bg-color-primary border border-black border-solid rounded-xl'>Login</button> 
          </form>
          
          
          <div className='pt-12 text-stone-600'>
            Don't have an account? 
            <Link to="/signup" className='pl-4 underline text-stone-600 hover:text-stone-800'>Sign up right here!</Link>
          </div>
        </div>
      );
}

export default Login