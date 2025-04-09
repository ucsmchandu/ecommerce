import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'//this is for singin through the google to get the google the popup
import React from 'react'
import { auth, db } from './firebase';//auth is used for signin,signout and currentUser,db is used to get the details that stored in firestore
import { doc, setDoc } from 'firebase/firestore';//this is used for store the user data in firestore in docs

const SigninWithGoogle = () => {
    function googleLogin(){
        const provider=new GoogleAuthProvider();//this initializes the google authentication data
        signInWithPopup(auth,provider).then(//popup is used for to get the google signin dash board
            async(result)=>{ 
            // console.log(result);
            const user=result.user; //this gets the user data like uid,email,displayName,extra stuff
            if(result.user){
                await setDoc(doc(db, 'Users', user.uid), { //this part stores the data in firestore
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