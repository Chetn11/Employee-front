import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function PrivateRoute({children}) {
    const{isAuth}=useContext(AuthContext)
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
