import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/AuthContext'
import { auth } from '../components/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


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
        return <p>You are not logged in</p>
    }
    else{
        console.log(currentUser);
        console.log(userData);
    }
  return (
    <div className='mt-30'>
        <h1>Welcome,{userData ?.userName}</h1>
        <p>Email:{userData ?.email}</p>
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile