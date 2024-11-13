import React, { useEffect, useState } from 'react'
import Crown from "../../assets/crown.png"
import { useNavigate, useParams } from 'react-router-dom'
import { authOtherUserDetails } from '../../server/req/auth'

const Profile = ({ userData, isOther }) => {

  const { otherUsername } = useParams()

  const navigate = useNavigate()


  const [otherUserData, setotherUserData] = useState("")


  useEffect(() => {
    if (isOther) {

      if (otherUsername == userData?.username) {
        navigate("/home/profile")
      } else {
        const getOtherUserDetails = async () => {
          try {
            const data = await authOtherUserDetails(otherUsername)
            console.log(data)
            console.log("Get Other User Details Success!")

            setotherUserData(data)

          } catch (error) {
            console.log("Get Other User Details Error!")
          }
        }

        getOtherUserDetails()
      }


    }
  }, [])

  return (
    <div style={{ width: "100%" }}>

      <div style={{
        background: "url('https://wallpapercave.com/wp/wp6432734.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }} className='pp_banner'></div>

      <div className='profile_top_section' style={{ display: "flex", gap: 32, marginTop: -72 }}>




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

        <div className='profile_top_section_user_info'>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ marginRight: 24 }} className='midium_text'>{isOther ? otherUserData?.username : userData?.username}</div>
            <button style={{
              background: "linear-gradient(to right, var(--g64), var(--g53))",
              height: 32,
              width: 128
            }} className='Btn click'>Profili Düzenle</button>
            <div>
              <i className="bi bi-gear click"></i>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            <div>0 <span className='des_text'>Takip</span></div>
            <div>0 <span className='des_text'>Takipçi</span></div>
          </div>

          <div className='des_text' style={{ marginTop: 16 }}>Hey! Ben viraportal kullanıyorum.</div>
        </div>

      </div>

      <div style={{ paddingLeft: 16, paddingRight: 16, display: "flex", justifyContent: "center" }}>
        <div className='pp_options_3' style={{
          borderTop: "1px solid var(--g48)",
          display: "flex",
          justifyContent: "center",
          gap: 16,
          width: "100%",
          maxWidth: 960
        }}>
          <div className='pp_option'><span className='click'>Paylaşımlar</span></div>
          <div className='pp_option'><span className='click'>Beğeniler</span></div>
          <div className='pp_option'><span className='click'>Envanter</span></div>
        </div>
      </div>

    </div>
  )
}

export default Profile