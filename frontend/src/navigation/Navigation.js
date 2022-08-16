import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

const Navigation = () => {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
    </Routes>
  )
}

export default Navigation