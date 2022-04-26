import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './Pages/Details/Details'
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

