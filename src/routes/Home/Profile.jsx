import React, { useEffect, useState } from 'react'
import Crown from "../../assets/crown.png"
import { useNavigate, useParams } from 'react-router-dom'
import { authOtherUserDetails } from '../../server/req/auth'
import { userManage, userManagePP } from '../../server/req/user'
import Loading from "../../components/Loading"
import baseUrl from '../../server/env'

const Profile = ({ userData, isOther }) => {

  const { otherUsername } = useParams()

  const navigate = useNavigate()


  const [otherUserData, setotherUserData] = useState("")


  const [isEditing, setisEditing] = useState(false)



  const [isPassword, setisPassword] = useState(false)


  const [isPassSee, setisPassSee] = useState(false)


  const [isLoading, setisLoading] = useState(false)


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

  const [userUsername, setuserUsername] = useState(userData ? userData.username : "")
  const [userPassword, setuserPassword] = useState("")
  const [userName, setuserName] = useState(userData ? userData.name : "")
  const [userBirthdate, setuserBirthdate] = useState(userData ? userData.birthdate : "")
  const [userCity, setuserCity] = useState(userData ? userData.city : "")
  const [userGender, setuserGender] = useState(userData ? userData.gender : "")
  const [userBio, setuserBio] = useState(userData ? userData.biography : "")
  const [userDiscord, setuserDiscord] = useState(userData ? userData.discord : "")
  const [userInstagram, setuserInstagram] = useState(userData ? userData.instagram : "")
  const [userTwitter, setuserTwitter] = useState(userData ? userData.twitter : "")

  const handleEditProfile = () => {
    console.log("saved!")

    console.log(userBio)

    const obj = {
      username: userUsername,
      password: userPassword,
      name: userName,
      birthdate: userBirthdate,
      city: userCity,
      gender: userGender,
      biography: userBio,
      discord: userDiscord,
      instagram: userInstagram,
      twitter: userTwitter
    }

    try {
      const data = userManage(obj)
      console.log(data)
      console.log("Profile Edit Success!")

      setisLoading(true)

      setTimeout(() => {
        window.location.reload()
      }, 640);

    } catch (error) {
      console.log("Profile Edit Error!")
    }

    setisEditing(false)
  }


  const [filePP, setfilePP] = useState(null)

  const handleFileChange = async (event) => {
    const selectedFilePP = event.target.files[0]
    setfilePP(selectedFilePP)

    if (selectedFilePP) {
      const formData = new FormData()
      formData.append("profilepicture", selectedFilePP)

      console.log(formData.get('profilepicture'));

      try {
        const data = userManagePP(formData)
        console.log(data)
        console.log("Profile Picture Change Success!")

        setisLoading(true)

        setTimeout(() => {
          window.location.reload()
        }, 640);

      } catch (error) {
        console.log("Profile Picture Change Error!")
      }
    }
  }

  return (
    <div style={{ width: "100%" }}>

      {
        isLoading && <Loading />
      }


      {
        isPassword && <div style={{
          zIndex: 999999,
          position: "fixed",
          left: "50%",
          top: "50%",
          height: 150,
          width: 320,
          marginTop: -75,
          marginLeft: -160
        }} className='tBox'>
          <div>Devam etmek için parolanı gir!</div>
          <div style={{ marginTop: 16 }}>
            <div style={{ position: "relative" }}>
              <input style={{
                letterSpacing: userPassword.length > 0 && !isPassSee && 4,
                height: 32,
                paddingLeft: 12,
                paddingRight: 12
              }} onChange={e => setuserPassword(e.target.value)} className='inp' type={isPassSee ? "text" : "password"} name="" id="" placeholder='Parola' />
              <div style={{
                height: 32,
                width: 32,
                backgroundColor: "transparent",
                borderRadius: "0px 8px 8px 0px",
                position: "absolute",
                right: 0,
                top: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <i onClick={() => setisPassSee(!isPassSee)} style={{ color: "var(--g64)" }} className={!isPassSee ? "bi bi-eye-slash click" : "bi bi-eye click"}></i>
              </div>
            </div>

            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => { setisPassword(false); setisEditing(false); setuserPassword("") }} style={{ height: 32, width: 128, background: "linear-gradient(to right, var(--light-red), var(--red))" }} className='Btn click'>Vazgeç</button>
              <button onClick={() => handleEditProfile()} style={{ height: 32, width: 128 }} className='Btn click'>Devam Et</button>
            </div>

          </div>
        </div>
      }

      <div style={{
        background: "url('https://wallpapercave.com/wp/wp6432734.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }} className='pp_banner'></div>

      <div className='profile_top_section' style={{ display: "flex", gap: 32, marginTop: -72 }}>




        <div style={{ position: "relative" }}>
          {/* <div className='pp_rank_info_box'>
            {
              !userData?.profilepicture && <img className='click pp_crown' style={{
                height: 32,
                position: "absolute",
                left: 64,
                top: 32
              }} src={Crown} alt="" />
            }
            {
              isOther && !otherUserData?.profilepicture && <img className='click pp_crown' style={{
                height: 32,
                position: "absolute",
                left: 64,
                top: 32
              }} src={Crown} alt="" />
            }
            <div className='rank_info'>Yabancı</div>
          </div> */}
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
            {
              !isOther && <img style={{ height: 196, width: 196 }} src={userData?.profilepicture ? `${baseUrl}/images/avatars/${userData?.profilepicture}` : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} alt="" />
            }
            {
              isOther && <img style={{ height: 196, width: 196 }} src={otherUserData?.profilepicture ? `${baseUrl}/images/avatars/${otherUserData?.profilepicture}` : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} alt="" />
            }
          </div>

          {
            !isOther && <div className='click' style={{
              height: 196,
              width: 196,
              overflow: "hidden",
              borderRadius: "50%",
              border: "1px solid var(--g53)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.16)",
              position: "absolute",
              left: 0,
              top: 0
            }}>
              <input onChange={handleFileChange} style={{
                height: 196,
                width: 196,
                overflow: "hidden",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0,
                cursor: "pointer"
              }} type="file" name="" id="" />
              <i style={{ fontSize: 24 }} className="bi bi-pen"></i>
            </div>
          }

        </div>

        <div className='profile_top_section_user_info'>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ marginRight: 24 }} className='midium_text'>{isOther ? otherUserData?.username : userData?.username}</div>
            {
              !isOther && <button onClick={() => isEditing ? setisPassword(true) : setisEditing(true)} style={{
                background: "linear-gradient(to right, var(--g64), var(--g53))",
                height: 32,
                width: 128
              }} className='Btn click'>{isEditing ? "Kaydet" : "Profili Düzenle"}</button>
            }
            {
              isOther && <button style={{
                // background: "linear-gradient(to right, var(--g64), var(--g53))",
                height: 32,
                width: 96
              }} className='Btn click'>Takip Et</button>
            }
            {
              !isOther && <div>
                <i className="bi bi-gear click"></i>
              </div>
            }
            {
              isOther && <div>
                <i className="bi bi-chat click"></i>
              </div>
            }

          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            <div>0 <span className='des_text'>Takip</span></div>
            <div>0 <span className='des_text'>Takipçi</span></div>
          </div>

          {
            isEditing && <input style={{
              marginTop: 13,
              height: 24,
              border: "1px solid var(--g48)",
              paddingLeft: 4,
              paddingRight: 4,
              fontSize: 14,
              borderRadius: 4
            }} onChange={(e) => setuserBio(e.target.value)} className='inp' type="text" name="" id="" placeholder={userData?.biography} />
          }

          {
            !isEditing && <div className='des_text' style={{ marginTop: 16 }}>{isOther ? otherUserData?.biography : userData?.biography}</div>
          }

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