import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/ContactPage/ContactPage'
import GalleryPage from '../pages/GalleryPage/GalleryPage'
import HomePage from '../pages/HomePage/HomePage'
import SearchPage from '../pages/SearchPage/SearchPage'

const Navigation = () => {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/contact' element={<ContactPage/>} />
        <Route exact path='/gallery/:slug' element={<GalleryPage/>} />
        <Route exact path='/search/:search' element={<SearchPage/>} />
        <Route exact path='/search/' element={<SearchPage/>} />
    </Routes>
  )
}

export default Navigation