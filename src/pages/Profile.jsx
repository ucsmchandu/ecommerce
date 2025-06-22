import { useContext} from 'react'
import { AuthContext } from '../components/AuthContext'
import { auth } from '../components/firebase';
import { toast } from 'react-toastify';
import { useNavigate ,Navigate } from 'react-router-dom';

const Profile = () => {
    const { currentUser, userData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            toast.success("You have been logged out!");
            setTimeout(() => {
                navigate('/login');
            }, 1000); 
        } catch (err) {
            console.log("Error from profile.jsx :", err.message);
            toast.error("Something went wrong while logging out!");
        }
    };

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='grid justify-items-center mt-50'>
            <div className='rounded-lg bg-blue-500 text-white w-md flex flex-col space-y-10 p-2 items-center'>
                <h1 className='text-lg'>Welcome,<span className='font-mono'> {userData?.userName}</span></h1>
                <p>Email: <span className='text-lg font-light'>{userData?.email}</span></p>
                <button onClick={handleLogout} className='p-1 rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer'>Logout</button>
            </div>
        </div>
    )
}

export default Profile