import React, { useContext } from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import { AuthContext } from './AuthContext'
const ProtectedRoute = ({children}) => {
    const {currentUser, loading}=useContext(AuthContext);
    const location=useLocation();
     if (loading) {
    return <p className="text-center mt-20 text-lg">Loading user...</p>;
  }
    if(!currentUser){
        return <Navigate to="/login" replace state={{from:location}}/>;
    }
    return children;
};

export default ProtectedRoute