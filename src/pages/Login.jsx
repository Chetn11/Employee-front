import React, { useContext, useState } from 'react'
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./Login.module.css"

function Login() {


  
  const[email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const {providerState}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogin=async(e)=>{
      e.preventDefault()
        try {
            const response=await axios.post("https://reqres.in/api/login",{
                email,
                password,
            });

            const token =response.data.token;

            localStorage.setItem('token',token);
            providerState.login(token);
            navigate('/dashboard');

        } catch (error) {
          console.log("Unable to Login",error); 
          alert("unable to login"); 
        }
    }
  return (
    <div className='container'>
      <h3>Login</h3>

      <form style={{display:"flex", flexDirection:"column", width:"300px", margin:"auto", gap:"30px", padding:"40px"}}>
        <input type='email' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='text' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' value="Login" onClick={handleLogin} style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"5px"}}/>
      </form>
      
      
    </div>
  )
}

export default Login
