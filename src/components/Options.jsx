import React from 'react'
import Icon from "../assets/v.png"
import { useNavigate } from 'react-router-dom'

const Options = () => {

  const navigate = useNavigate()

  return (
    <div className='oBox main_opt_bar' style={{
      minWidth: 320,
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 48
        }}>
          <img style={{
            height: 128,
            width: 128
          }} src={Icon} alt="" />
        </div>

        <div style={{ marginTop: 48, paddingLeft: 48, paddingRight: 48 }}>

          <div onClick={() => navigate("/home/home")} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i class="bi bi-house-door"></i>
              <div>Ana Sayfa</div>
            </div>
            <i class="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/profile")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i class="bi bi-person"></i>
              <div>Profil</div>
            </div>
            <i class="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/chat")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i class="bi bi-chat"></i>
              <div>Sohbet</div>
            </div>
            <i class="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/apps")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i class="bi bi-controller"></i>
              <div>Uygulamalar</div>
            </div>
            <i class="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/wiki")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i class="bi bi-info-circle"></i>
              <div>Wiki</div>
            </div>
            <i class="bi bi-caret-right"></i>
          </div>

          <div onClick={() => navigate("/home/offer")} style={{ marginTop: 32 }} className='optsOpt click'>
            <div style={{ display: "flex", gap: 16 }}>
              <i class="bi bi-pen"></i>
              <div>Öneriler</div>
            </div>
            <i class="bi bi-caret-right"></i>
          </div>

        </div>
      </div>

      <div style={{
        padding: 16
      }}>
        <button style={{
          background: "linear-gradient(to right, var(--light-red), var(--red))"
        }} className='Btn click'>Çıkış Yap</button>
      </div>

    </div>
  )
}

export default Options