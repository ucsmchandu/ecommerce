import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
   });
   const handleData=(e)=>{
    setData({...data,[e.target.name]:e.target.value.trim()});
   }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!data.username || !data.email || !data.password){
            alert("enter valid data!");
            return;
        }
        if(!emailRegex.test(data.email)){
            alert("enter valid mail!");
            return;
        }
        if(data.password!==data.confirmPassword){
            alert("password does not match!");
            return;
        }
        if(data.username.length<5){
            alert("username must be atleast have five characters!");
            return;
        }
        else if(data.password.length<5){
            alert("password must be atleast five characters!");
            return;
        }
        console.log(data);
        setData({
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        });
    }
  return (
  
      <div className='w-screen h-screen flex justify-center items-center '>
         <div className='border rounded flex flex-col justify-center items-center w-sm h-2/3'>
           <div className='relative -left-15 p-1 -top-6'>
             <p><span className='text-2xl font-semibold'>Register</span><br/>or <span className='text-blue-600 cursor-pointer hover:underline'><Link to="/login">already have account</Link></span></p>
           </div>
 
          <form onSubmit={handleSubmit} >
          <div className='flex flex-col space-y-1'>
             <label htmlFor="username">Username <span className='text-red-600'>*</span></label>
             <input id="username" type="text" name='username' value={data.username} onChange={handleData} placeholder='Username or Email' required className='border outline-none w-72 p-2 placeholder:text-md'/>
             <label htmlFor="email">Email <span className='text-red-600'>*</span></label>
             <input id="email" type="email" name='email' value={data.email} onChange={handleData} placeholder='Username or Email' required className='border outline-none w-72 p-2 placeholder:text-md'/>             
             <label htmlFor="password">Password <span className='text-red-600'>*</span></label>
             <input id="password" type="password" name='password' value={data.password} onChange={handleData} placeholder='Password' required className='border outline-none w-72 p-2 placeholder:text-md'/>
             <label htmlFor="confirmPassword">Confirm Password <span className='text-red-600'>*</span></label>
             <input id="confirmPassword" type="password" name='confirmPassword' value={data.confirmPassword} onChange={handleData} placeholder='Confirm Password' required className='border outline-none w-72 p-2 placeholder:text-md'/>
            {data.password!==data.confirmPassword ? <p className='text-sm text-red-700'>passwords not matching </p>:null}
           </div>
            
           <div className='flex items-center justify-center mt-10'>
            <button type='submit' name='submit'  className='text-white text-lg p-1 cursor-pointer rounded-3xl px-4 bg-green-600 hover:bg-green-700'>Register</button>
           </div>
          </form>
 
         </div>
      </div>
  )
}

export default Register