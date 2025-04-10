import React, { useContext } from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import { AuthContext } from './AuthContext'
const ProtectedRoute = ({children}) => {
    const {currentUser}=useContext(AuthContext);
    const location=useLocation();
    if(!currentUser){
        return <Navigate to="/login" replace state={{from:location}}/>;
    }
    return children;
}

export default ProtectedRoute