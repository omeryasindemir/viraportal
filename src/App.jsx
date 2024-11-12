import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./routes/Auth/Login"
import Profile from "./routes/Home/Profile"
import Icon from "./assets/v.png"
import Options from "./components/Options"
import OptionsMobile from './components/OptionsMobile'

const App = () => {
  return (
    <Routes>

      <Route path='' element={
        <div className="auth_body">
          <Login />
        </div>
      } />

      <Route path='/auth/login' element={
        <div className="auth_body">
          <Login />
        </div>
      } />





      <Route path='/home/profile' element={<div style={{
        display: "flex",
        padding: 8,
        minHeight: "100vh",
        gap: 8
      }}>
        <Options />
        <OptionsMobile/>
        <Profile />
      </div>} />





      <Route path='*' element={<div style={{ gap: 16 }} className='auth_body'>

        <img style={{
          height: 128,
          width: 128
        }} src={Icon} alt="" />
        <div style={{
          marginTop: -48,
          fontSize: 48,
          fontWeight: 600
        }}>404</div>
        {/* <div class="typing-demo">Burada görülecek bir şey yok gibi duruyor...</div> */}
      </div>} />

    </Routes>
  )
}

export default App