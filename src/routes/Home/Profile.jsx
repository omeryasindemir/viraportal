import React from 'react'
import Crown from "../../assets/crown.png"

const Profile = () => {
  return (
    <div style={{ width: "100%" }}>

      <div style={{
        background: "url('https://wallpapercave.com/wp/wp6432734.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }} className='pp_banner'></div>

      <div style={{ display: "flex", gap: 32, paddingLeft: 83, marginTop: -72 }}>




        <div style={{ position: "relative" }}>
          <div className='pp_rank_info_box'>
            <img className='click pp_crown' style={{
              height: 32,
              position: "absolute",
              left: 64,
              top: 32
            }} src={Crown} alt="" />
            {/* <div className='rank_info'>Yabancı</div> */}
          </div>
          <div style={{
            height: 196,
            width: 196,
            overflow: "hidden",
            borderRadius: "50%",
            border: "1px solid var(--g53)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img style={{ height: 196, width: 196 }} src={"https://i.pinimg.com/236x/d4/06/6d/d4066df9414e37e47739a84418971f36.jpg"} alt="" />
          </div>
        </div>

        <div style={{ marginTop: 83 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ marginRight: 24 }} className='midium_text'>viraportal</div>
            <button style={{
              background: "linear-gradient(to right, var(--g64), var(--g53))",
              height: 32,
              width: 128
            }} className='Btn click'>Profili Düzenle</button>
            <div>
              <i class="bi bi-gear click"></i>
            </div>
          </div>

          <div style={{display: "flex", gap: 16, marginTop: 12}}>
            <div>0 <span className='des_text'>Takip</span></div>
            <div>0 <span className='des_text'>Takipçi</span></div>
          </div>

          <div className='des_text' style={{ marginTop: 16 }}>Hey! Ben viraportal kullanıyorum.</div>
        </div>

      </div>

      <div>profile bottom</div>

    </div>
  )
}

export default Profile