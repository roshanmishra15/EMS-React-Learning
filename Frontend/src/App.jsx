import React from 'react'
import Employee from './pages/Employee'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoutes from './ProtectedRoute'
function App() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Routes>

        <Route path='/dashboard' element={
          <ProtectedRoutes>
            <Employee/>
          </ProtectedRoutes>}/>

        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App