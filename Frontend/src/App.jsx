import React from 'react'
import Employee from './pages/Employee'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Employee />} />
        <Route path='/regsiter' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App