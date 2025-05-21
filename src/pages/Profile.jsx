import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/AuthContext'
import { auth } from '../components/firebase';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

async function handleLogout(){
    try{
        await auth.signOut();
        toast.success("You have been logged out!");
    }
    catch(err){
        console.log("Error from profile.jsx :",err.message);
        toast.error("Something Went wrong while logging out!");
        Navigate('/login');
    }
}
const Profile = () => {
    const {currentUser,userData}=useContext(AuthContext);
    if(!currentUser){
        return Navigate('/login');
    }
    else{
        console.log(currentUser);
        console.log(userData);
    }
    const current=currentUser;
  return (
    <div className='grid justify-items-center mt-50'>
        <div className=' rounded-lg bg-blue-400 text-white w-md flex flex-col space-y-10 p-2 items-center'>
    <h1 className='text-lg'>Welcome,<span className='font-mono'> {userData ?.userName}</span></h1>
    <p className=''>Email: <span className='text-lg font-light'>{userData ?.email}</span></p>
    <button onClick={handleLogout} className=' p-1 rounded-lg text-md bg-red-500 text-white hover:bg-red-600 cursor-pointer'>logout</button>
</div>
    </div>
  )
}

export default Profile