import React, { useState } from 'react'
import Icon from "../../assets/v.png"
import { useNavigate } from 'react-router-dom'
import { authRegister } from '../../server/req/auth'
import Loading from '../../components/Loading'

const Register = () => {

  const navigate = useNavigate()

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const [isPassSee, setisPassSee] = useState(false)

  const [isLoading, setisLoading] = useState(false)

  const LoginSubmit = async () => {
    console.log({
      username: username,
      email: email,
      password: password
    })

    const reqData = {
      username: username,
      email: email,
      password: password
    }

    try {
      const data = await authRegister(reqData)
      console.log(data)
      console.log("Register Success!")


      setisLoading(true)

      setTimeout(() => {
        navigate("/auth/login")
      }, 640);

    } catch (error) {
      console.log("Register Error!")
    }

  }


  return (
    <div className='tBox'>

      {
        isLoading && <Loading />
      }

      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        marginTop: 32
      }}>
        <img style={{
          height: 83,
          width: 83
        }} src={Icon} alt="" />
        <div className="midium_text">Hesap Oluştur!</div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 48,
        gap: 16
      }}>
        <input onChange={e => setusername(e.target.value)} className='inp' type="text" name="" id="" placeholder='Kullanıcı Adı' />
        <input onChange={e => setemail(e.target.value)} className='inp' type="text" name="" id="" placeholder='Email' />
        <div style={{ position: "relative" }}>
          <input style={{
            letterSpacing: password.length > 0 && !isPassSee && 4
          }} onChange={e => setpassword(e.target.value)} className='inp' type={isPassSee ? "text" : "password"} name="" id="" placeholder='Parola' />
          <div style={{
            height: 48,
            width: 48,
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
      </div>


      <div style={{
        marginTop: 32
      }}>
        <button onClick={() => LoginSubmit()} className='Btn click'>Hesap Oluştur</button>
      </div>


      <div style={{
        marginTop: 32,
        marginBottom: 24,
        textAlign: "center",
        fontSize: 14,
        color: "var(--g96)"
      }}>YA DA</div>


      <div onClick={() => navigate("/auth/login")} className='click' style={{ textAlign: "center", paddingBottom: 24 }}>Giriş yap!</div>

    </div>
  )
}

export default Register