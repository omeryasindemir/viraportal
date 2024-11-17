import React, { useState } from 'react'
import Icon from "../assets/v.png"
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { authLogout } from '../server/req/auth'

const OptionsMobile = () => {

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
    <div className='oBox main_opt_bar_mobile' style={{
      width: "calc(100% - 16px)",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      bottom: 8,
      height: 64
    }}>

      {
        isLoading && <Loading/>
      }

      <div>


        <div style={{ paddingLeft: 32, paddingRight: 32, display: "flex", gap: 24 }}>

          <div onClick={() => navigate("/home/home")} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-house-door"></i>
            </div>
            
          </div>

          <div onClick={() => navigate("/home/profile")}  className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-person"></i>
            </div>
            
          </div>

          <div onClick={() => {navigate("/home/chat"); window.location.reload()}}  className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-chat"></i>
            </div>
            
          </div>

          <div onClick={() => navigate("/home/apps")}  className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-controller"></i>
            </div>
            
          </div>

          <div onClick={() => navigate("/home/wiki")}  className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-info-circle"></i>
            </div>
            
          </div>

          <div onClick={() => navigate("/home/offer")}  className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i className="bi bi-pen"></i>
            </div>
            
          </div>

        </div>
      </div>

      <div style={{
        padding: 16
      }}>
        <button onClick={() => handleLogout()} style={{
          background: "linear-gradient(to right, var(--light-red), var(--red))",
          height: 32,
          width: 32
        }} className='Btn click'><i className="bi bi-door-open"></i></button>
      </div>

    </div>
  )
}

export default OptionsMobile