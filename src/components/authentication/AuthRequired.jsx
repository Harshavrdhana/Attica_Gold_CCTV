import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const AuthRequired = () => {
  const authenticated = false
    if (!authenticated) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export default AuthRequired
