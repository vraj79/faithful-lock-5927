import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<p>Homepage</p>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes