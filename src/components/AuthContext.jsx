import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth, db } from '../components/firebase';
import { getDoc,doc } from 'firebase/firestore';
export const AuthContext=createContext();
const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState(null);
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,async(user)=>{
            setCurrentUser(user);
            if(user){
                const docRef=doc(db,"Users",user.uid);
                const docSnap=await getDoc(docRef);
                if(docSnap.exists()){
                    setUserData(docSnap.data());
                }
            }
            else{
                setUserData(null);
            }
            setLoading(false);
        });
    },[]);
  return (
    <div>
        <AuthContext.Provider value={{currentUser,userData}}>
            {!loading && children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider;
