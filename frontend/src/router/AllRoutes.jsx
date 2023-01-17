import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<p>Homepage</p>}></Route>
    </Routes>
  )
}

export default AllRoutes