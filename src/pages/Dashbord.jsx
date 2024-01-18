import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from "../context/AuthContext";
import axios from 'axios';
import styles from "./Dashbord.module.css"




function Dashbord() {

    const {providerState}=useContext(AuthContext);
    const[data,setData]=useState([]);
    const[email,setEmail]=useState("");
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[salary,setSalary]=useState("");
    const[department,setDepartment]=useState("");
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);
    const[limit,setLimit]=useState(5);
    const[toggle,setToggle]=useState(false);
    const[sort,setSort]=useState("default");
    const[filter,setFilter]=useState("default");
    const token=providerState.state.token;

    const fetchData= async (page,limit,sort)=>{
      let url=`https://employee-dma8.onrender.com/data?_page=${page}&&_limit=${limit}`

      if(sort!=="default"){
        url=`${url}&_sort=salary,${sort}`;
      }
        try {
          const req=await fetch(url);
          const res=await req.json();
          setData(res)
          console.log(res);
        } catch (error) {
          console.log(error);
          alert("Something Wrong")
        }  
    }

    console.log(data)
    useEffect(()=>{
        fetchData(page,limit,sort);
    },[page,sort])


    // add data
     const addData=async ()=>{
      if(firstName===null || lastName===null || email===null || department===null || salary===null){
        alert("Please check your information");

      }
      else{
        
        const payload={
          firstName:firstName,
          lastName:lastName,
          email:email,
          department:department,
          salary:salary
        }
        try {
           const res=await axios.post(`https://employee-dma8.onrender.com/data`,payload)
           console.log(res);
           fetchData(page,limit,sort)
           alert("Data Added")
           
        } catch (error) {
          alert(error);
        }
      }
      
     }

     const handelDelete=async (id)=>{
      try {
        const res=await axios.delete(`https://employee-dma8.onrender.com/data/${id}`);
        fetchData(page,limit,sort)
        alert("data Deleted");
      } catch (error) {
        
      }
     }

     console.log(sort);
  return (
    <div id='main'>
      <h1>Employee Management Software</h1>
      <div className='add'>
        {toggle?<div><div><input type='text' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
        <input type='text' placeholder='last Name' onChange={(e)=>setLastName(e.target.value)}/>
        <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <select onChange={(e)=>setDepartment(e.target.value)}>
        <option value="default">Select department</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
        <input type='text' placeholder='Salary' onChange={(e)=>setSalary(e.target.value)}/>
        </div> <button onClick={addData} className='btn' style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"3px", padding:"5px", margin:"10px"}} >Add Employee</button></div>
        :<button onClick={()=>setToggle(!toggle)} className='btn' style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"3px", padding:"5px", margin:"10px"}}>Add Employee</button>}
      </div>

     <div id="Filter">
          <select onChange={(e)=>setSort(e.target.value)}>
            <option value="default" >By Salary</option>
            <option value="asc">Low To High</option>
            <option value="desc">Hight To Low</option>

          </select>
     </div>
      <table className={styles.table}>
         <thead>
         <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Action</th>
        </tr>
         </thead>
         <tbody>
         {data?.map((ele,index)=>(
            <tr key={index}>
                <th>{index+1}</th>
                <th>{ele.firstName}</th>
                <th>{ele.lastName}</th>
                <th>{ele.email}</th>
                <th>{ele.salary}</th>
                <th>{ele.department}</th>
                <th><button style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"3px", padding:"5px"}}>Edit</button> 
                <button onClick={()=>handelDelete(ele.id)} style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"3px", padding:"5px"}}>Delete</button></th>
            </tr>
         ))}
         </tbody>
      </table>

     {/* pagination */}
      <div>
        <button onClick={()=>setPage(page-1)} disabled={page===1} style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"20px", padding:"10px", margin:"5px"}}>Pre</button>
        <button style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"3px", padding:"10px", margin:"10px"}}>{page}</button>
        <button onClick={()=>setPage(page+1)} style={{backgroundColor:"#0366ee", color:"white", border:"none", borderRadius:"20px", padding:"10px", margin:"5px"}}>Next</button>
      </div>
     
     
    </div>
  )
}

export default Dashbord
