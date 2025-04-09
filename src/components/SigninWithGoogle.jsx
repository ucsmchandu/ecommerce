import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const SigninWithGoogle = () => {
    function googleLogin(){
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(async(result)=>{
            console.log(result);
            const user=result.user;
            if(result.user){
                await setDoc(doc(db, 'Users', user.uid), {
                          email: user.email,
                          userName: user.displayName,
                        });
            }
        }).catch((err)=>console.log("Error from SigninWithGoogle.jsx :",err.message));
    }
  return (
    <div className="mt-3 flex justify-center">
    <button
    onClick={googleLogin}
    className="cursor-pointer hover:shadow-md flex items-center justify-center w-72 gap-3 border p-2 rounded-sm">
      <img
        src="https://res.cloudinary.com/dllvcgpsk/image/upload/v1743403171/google_zgmnav.png"
        className="h-5 w-5"
        alt="Google Logo"
      />
      <span>Sign in with Google</span>
    </button>
  </div>
  )
}

export default SigninWithGoogle