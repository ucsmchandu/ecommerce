import { signInWithEmailAndPassword } from 'firebase/auth'; //this is used for sign,that means this gets the data from the backend of the firebase
import React, { useState,useContext } from 'react';
import { auth } from '../components/firebase'; //this is used for signin,signout and currentUser to get the user data
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SigninWithGoogle from '../components/SigninWithGoogle'; //function to signin
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
const Login = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/profile" />;
  }
  const [data, setData] = useState({ email: '', password: '' });
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      toast.warning('Enter valid details!',{
        position:'bottom-left',
      });
      return;
    }

    try {
      //this function checks the user exists or not
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Logged in successfully!',{
        position:'top-right',
      });
    } catch (err) {
      console.log('Error from Login.jsx :', err.message);
      toast.error('Invalid login credentials!',{
        position:'bottom-left',
      });
    }

    setData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="w-full mt-20 flex justify-center items-center py-12 px-4 bg-gray-100">
      <div className="w-96 max-w-3xl border border-gray-300 shadow-lg rounded-xl p-10 bg-white">
        <div className=" mb-6">
          <h2 className="text-3xl font-bold">Sign in</h2>
          <p className="text-gray-600">
            or{' '}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              create account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleData}
              className="border outline-none w-72 p-2 placeholder:text-md"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleData}
              className="border outline-none w-72 p-2 placeholder:text-md"
            />
          </div>

          {/* <div className="w-72 text-left pt-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="pl-2">
              Remember me
            </label>
          </div> */}

          <button
            type="submit"
            className="w-72 py-2 text-lg bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
        <div className='flex justify-center items-center mt-3'><p>or</p></div>
        <SigninWithGoogle/>
        
      </div>
    </div>
  );
};

export default Login;
