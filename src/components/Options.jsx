import React, { useState } from 'react'
import Icon from "../assets/v.png"
import { useNavigate } from 'react-router-dom'
import { authLogout } from '../server/req/auth'
import Loading from './Loading'

const Options = () => {

  const navigate = useNavigate()

  const [isLoading, setisLoading] = useState(false)


  const handleLogout = async () => {
    try {
      const data = await authLogout()
      console.log(data)
      console.log("Logout Success!")

      setisLoading(true)
      
      setTimeout(() => {
        navigate("/auth/login")
        window.location.reload()
      }, 640);

    } catch (error) {
      console.log("Logout Error!")
    }
  }


  return (
    <div className='oBox main_opt_bar' style={{
      minWidth: 320,
      flexDirection: "column",
      justifyContent: "space-between"
    }}>

      {
        isLoading && <Loading/>
      }

      <div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 48,
          flexDirection: "column",
          alignItems: "center"
        }}>
          <img style={{
            height: 144,
            width: 144
          }} src={Icon} alt="" />
          <div style={{marginTop: -32}} className='midium_text'>viraportal</div>
        </div>

        <div style={{ marginTop: 83, paddingLeft: 48, paddingRight: 48 }}>

          <div onClick={() => navigate("/home/home")} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-house-door"></i>
              <div>Ana Sayfa</div>
            </div>
            <i className="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/profile")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-person"></i>
              <div>Profil</div>
            </div>
            <i className="bi bi-caret-right"></i>
          </div>

          <div onClick={() => {navigate("/home/chat"); window.location.reload()}} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-chat"></i>
              <div>Sohbet</div>
            </div>
            <i className="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/apps")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-controller"></i>
              <div>Uygulamalar</div>
            </div>
            <i className="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/wiki")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-info-circle"></i>
              <div>Wiki</div>
            </div>
            <i className="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/offer")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-pen"></i>
              <div>Öneriler</div>
            </div>
            <i className="bi bi-caret-right"></i>
          </div>

        </div>
      </div>

      <div style={{
        padding: 16
      }}>
        <button onClick={() => handleLogout()} style={{
          background: "linear-gradient(to right, var(--light-red), var(--red))"
        }} className='Btn click'>Çıkış Yap</button>
      </div>

    </div>
  )
}

export default Options