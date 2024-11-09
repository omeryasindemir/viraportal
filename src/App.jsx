import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./routes/Login"

const App = () => {
  return (
    <Routes>

      <Route path='/' element={
          <div className="auth_body">
            <Login />
          </div>
      } />
      
    </Routes>
  )
}

export default App