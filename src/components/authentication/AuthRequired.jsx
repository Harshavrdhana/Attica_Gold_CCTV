import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRequired = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    
    if (!isLoggedIn) {
        return <Navigate to="/login" replace/>;
    }
    return <Outlet />;
};

export default AuthRequired;