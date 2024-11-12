import React from 'react'
import Crown from "../../assets/crown.png"

const Profile = () => {
  return (
    <div>

      <div style={{ display: "flex", gap: 32, paddingLeft: 83, paddingTop: 48 }}>

        <div style={{ position: "relative" }}>
          <div className='pp_rank_info_box'>
            <img className='click pp_crown' style={{
              height: 32,
              position: "absolute",
              left: 32,
              top: 12
            }} src={Crown} alt="" />
            {/* <div className='rank_info'>Yabancı</div> */}
          </div>
          <div style={{
            height: 128,
            width: 128,
            overflow: "hidden",
            borderRadius: "50%"
          }}>
            <img style={{ height: 128, width: 128 }} src={"https://i.pinimg.com/236x/d4/06/6d/d4066df9414e37e47739a84418971f36.jpg"} alt="" />
          </div>
        </div>

        <div>
          <div className='midium_text'>viraportal</div>
        </div>

      </div>

      <div>profile bottom</div>

    </div>
  )
}

export default Profile