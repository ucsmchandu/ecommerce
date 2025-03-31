import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
   <form>
      <div className='w-screen h-screen flex justify-center items-center '>
         <div className='border rounded flex flex-col justify-center items-center w-sm h-2/3'>
           <div className='relative -left-15 p-1 -top-6'>
             <p><span className='text-2xl font-semibold'>Register</span><br/>or <span className='text-blue-600 cursor-pointer hover:underline'><Link to="/login">already have account</Link></span></p>
           </div>
 
           <div className='flex flex-col space-y-2'>
             <label htmlFor="username">Username <span className='text-red-600'>*</span></label>
             <input id="username" type="text" placeholder='Username or Email' required className='border outline-none w-72 p-2 placeholder:text-md'/>
             <label htmlFor="email">Email <span className='text-red-600'>*</span></label>
             <input id="email" type="email" placeholder='Username or Email' required className='border outline-none w-72 p-2 placeholder:text-md'/>             
             
             <label htmlFor="password">Password <span className='text-red-600'>*</span></label>
             <input id="password" type="password" placeholder='Password' required className='border outline-none w-72 p-2 placeholder:text-md'/>
           </div>
            
           <div className='flex items-center mt-10'>
            <button type='submit' className='text-white text-lg p-1 cursor-pointer rounded-3xl px-4 bg-green-600 hover:bg-green-700'>Register</button>
           </div>
 
         </div>
      </div>
     </form>
  )
}

export default Register