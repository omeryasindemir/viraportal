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
import WebSocketComponent from './demo/WebSocketComponent'
import authToken from './server/authToken'
import Apps from './routes/Home/Apps'

const App = () => {


  const [isAuth, setisAuth] = useState(false)

  const [userData, setuserData] = useState("")


  const [socket, setSocket] = useState(null);


  const [isMesGet, setisMesGet] = useState("")


  const [isLoad, setisLoad] = useState(false)


  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    const csrfToken = localStorage.getItem(authToken);

    if (!token || !csrfToken) {
      console.error("Token veya CSRF Token bulunamadı.");
      return;
    }

    console.log("TOKEN : " + token)

    // WebSocket bağlantısı oluştur
    const ws = new WebSocket(
      `ws://localhost:3001/ws/${token}/${csrfToken}`
    );

    ws.onopen = () => {
      console.log("WebSocket bağlantısı açıldı.");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log("Mesaj alındı:", event.data);
      setisMesGet(event.data)
    };

    ws.onerror = (error) => {
      console.error("WebSocket hatası:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket bağlantısı kapandı.");
      setSocket(null);
    };

    // Cleanup: Bileşen unmount olursa bağlantıyı kapat
    // return () => {
    //   ws.close();
    // };
  }, []);


  useEffect(() => {
    const tokenControl = async () => {
      try {
        const data = await authMe()
        console.log(data)
        console.log("Auth Success!")

        setuserData(data)

        setisAuth(true)
        setisLoad(true)

      } catch (error) {
        console.log("Auth Error!")
        setisLoad(true)
      }
    }

    tokenControl()
  }, [])






  if (isLoad) {return (
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
        !isAuth ? <Route path='/auth/login' element={
          <div className="auth_body">
            <Login />
          </div>
        } /> : <Route path='/auth/login' element={<Loading to="/" />} />
      }

      {
        !isAuth ? <Route path='/auth/register' element={
          <div className="auth_body">
            <Register />
          </div>
        } /> : <Route path='/auth/register' element={<Loading to="/" />} />
      }



      {
        isAuth ? <Route path='/home/profile' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Profile userData={userData} isOther={false} />
        </div>} /> : <Route path='/home/profile' element={<Loading to="/" />} />
      }

      {
        isAuth ? <Route path='/users/:otherUsername' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Profile userData={userData} isOther={true} />
        </div>} /> : <Route path='/users/:otherUsername' element={<Loading to="/" />} />
      }


      {
        isAuth ? <Route path='/home/home' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Home />
        </div>} /> : <Route path='/home/home' element={<Loading to="/" />} />
      }

      {
        isAuth ? <Route path='/home/apps' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Apps />
        </div>} /> : <Route path='/home/apps' element={<Loading to="/" />} />
      }

      {
        isAuth ? <Route path='/home/chat' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Chat userData={userData} isMesGet={isMesGet} />
        </div>} /> : <Route path='/home/chat' element={<Loading to="/" />} />
      }

      {
        isAuth ? <Route path='/home/chat/:chatUsername' element={<div style={{
          display: "flex",
          padding: 8,
          minHeight: "100vh",
          gap: 8
        }}>
          <Options />
          <OptionsMobile />
          <Chat userData={userData} isMesGet={isMesGet} />
        </div>} /> : <Route path='/home/chat/:chatUsername' element={<Loading to="/" />} />
      }




      <Route path='*' element={<div style={{ gap: 16 }} className='auth_body'>

        <img style={{
          height: 144,
          width: 144
        }} src={Icon} alt="" />
        <div style={{
          marginTop: -144,
          fontSize: 83,
          fontWeight: 600,
          display: "flex", gap: 96
        }}>
          <span>4</span>
          <span>4</span>
        </div>
        {/* <div className="typing-demo">Burada görülecek bir şey yok gibi duruyor...</div> */}
      </div>} />

    </Routes>
  )}
}

export default App