import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const AuthRequired = () => {
  const [authenticated,setAuthenticated]=React.useState(false)
    if (!authenticated) {
        return <Navigate to="/login" state={{authenticate:setAuthenticated}} />
    }
    return <Outlet />
}

export default AuthRequired
