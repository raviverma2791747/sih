import React from 'react'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'

const Paths = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>} />
      </Routes>
  )
}

export default Paths