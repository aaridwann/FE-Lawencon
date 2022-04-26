import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './Pages/Details/Details'
import Find from './Pages/Find/Find'
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/find/:name' element={<Find />} />
      </Routes>
    </BrowserRouter>
  )
}

