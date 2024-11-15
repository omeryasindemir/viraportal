import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./routes/Auth/Login"
import Profile from "./routes/Home/Profile"
import Icon from "./assets/v.png"
import Options from "./components/Options"
import OptionsMobile from './components/OptionsMobile'
import Register from './routes/Auth/Register'
import baseUrl from './server/env'
import { authMe } from './server/req/auth'
import Loading from './components/Loading'
import Home from "./routes/Home/Home"
import Chat from "./routes/Home/Chat"

const App = () => {


  const [isAuth, setisAuth] = useState(false)

  const [userData, setuserData] = useState("")


  useEffect(() => {
    const tokenControl = async () => {
      try {
        const data = await authMe()
        console.log(data)
        console.log("Auth Success!")

        setuserData(data)

        setisAuth(true)

      } catch (error) {
        console.log("Auth Error!")
      }
    }

    tokenControl()
  }, [])


  return (
    <Routes>

      {
        !isAuth && <Route path='' element={
          <div className="auth_body">
            <Login />
          </div>
        } />
      }


      {
        isAuth && <Route path='' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Home />
        </div>} />
      }



      {
        !isAuth && <Route path='/auth/login' element={
          <div className="auth_body">
            <Login />
          </div>
        } />
      }

      {
        !isAuth && <Route path='/auth/register' element={
          <div className="auth_body">
            <Register />
          </div>
        } />
      }



      {
        isAuth && <Route path='/home/profile' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Profile userData={userData} isOther={false} />
        </div>} />
      }

      {
        isAuth && <Route path='/users/:otherUsername' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Profile userData={userData} isOther={true} />
        </div>} />
      }


      {
        isAuth && <Route path='/home/home' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Home />
        </div>} />
      }

      {
        isAuth && <Route path='/home/chat' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Chat />
        </div>} />
      }




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
        {/* <div className="typing-demo">Burada görülecek bir şey yok gibi duruyor...</div> */}
      </div>} />

    </Routes>
  )
}

export default App