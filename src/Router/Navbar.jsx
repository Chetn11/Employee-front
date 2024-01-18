import React, { useContext, useState } from 'react'
import {AuthContext} from "../context/AuthContext"
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

function Navbar() {
    const {providerState}=useContext(AuthContext);
  return (
    <div id={styles.main} >
      <Link to="/dashboard" style={{textDecoration:"none", padding:"20px", fontSize:"larger",color:"white"}} className='fun'>Employee Management</Link>
      {providerState.state.isAuth?<button onClick={()=>providerState.logout()}>Logout</button>:<Link to="/" className="fun" style={{textDecoration:"none", padding:"20px", fontSize:"larger",
      color:"white"}}>Login</Link>}
      
    </div>
  )
}

export default Navbar