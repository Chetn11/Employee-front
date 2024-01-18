import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashbord from '../pages/Dashbord'
import Login from '../pages/Login'

function AllRouts() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashbord/>}></Route>
        <Route path="/" element={<Login/>}></Route>
    </Routes>
  )
}

export default AllRouts
