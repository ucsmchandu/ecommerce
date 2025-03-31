import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
     <div className='w-screen h-screen flex justify-center items-center '>
        <div className='border rounded flex flex-col justify-center items-center w-sm h-2/3'>
          <div className='relative -left-20 p-1 -top-6'>
            <p><span className='text-2xl font-semibold'>Sign in</span><br/>or <span className='text-blue-600 cursor-pointer hover:underline'><Link to="/register">create account</Link></span></p>
          </div>
          <form action="">
          <div className='flex flex-col space-y-3'>
            <label htmlFor="usernameOrEmail">Username or Email <span className='text-red-600'>*</span></label>
            <input id="usernameOrEmail" type="text" placeholder='Username or Email' required className='border outline-none w-72 p-2 placeholder:text-md'/>
            <label htmlFor="password">Password <span className='text-red-600'>*</span></label>
            <input id="password" type="password" placeholder='Password' required className='border outline-none w-72 p-2 placeholder:text-md'/>
          </div>

          <div className='space-y-6 pt-4   '><input type="checkbox" id="remember" /> <label htmlFor="remember" className='pl-1'>Remember me</label></div>
          
          <div className=''>
            <button type='submit' className=' w-72 p-1 text-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700'>Sign in</button>
          </div>
          </form>
          <div className='pt-4'>
          <button className="cursor-pointer hover:shadow-md  flex items-center justify-center w-72 gap-3 border p-1 rounded-sm">
              <img src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743403171/google_zgmnav.png" className="h-5 w-5" alt="Google Logo" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
        
     </div>
    
    </>
  )
}

export default Login