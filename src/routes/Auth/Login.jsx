import React, { useState } from 'react'
import Icon from "../../assets/v.png"
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../../server/req/auth'
import authToken from "../../server/authToken"
import Loading from '../../components/Loading'

const Login = () => {

  const navigate = useNavigate()

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const [isPassSee, setisPassSee] = useState(false)

  const [isLoading, setisLoading] = useState(false)



  const LoginSubmit = async () => {
    console.log({
      email: email,
      password: password
    })

    const reqData = {
      email: email,
      password: password
    }

    try {
      const data = await authLogin(reqData)
      console.log(data)
      localStorage.setItem(authToken, data.csrfToken)

      console.log("Login Success!")

      setisLoading(true)
      
      setTimeout(() => {
        navigate("/home/profile")
        window.location.reload()
      }, 640);


      
      


    } catch (error) {
      console.log("Login Error!")
    }

  }


  return (
    <div className='tBox'>

      {
        isLoading && <Loading/>
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
        <div className="midium_text">Giriş Yap</div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 48,
        gap: 16
      }}>
        <input onChange={e => setemail(e.target.value)} className='inp' type="text" name="" id="" placeholder='Email' />
        <div style={{position: "relative"}}>
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
            <i onClick={() => setisPassSee(!isPassSee)} style={{color: "var(--g64)"}} className={!isPassSee ? "bi bi-eye-slash click" : "bi bi-eye click"}></i>
          </div>
        </div>
      </div>


      <div style={{
        marginTop: 32
      }}>
        <button onClick={() => LoginSubmit()} className='Btn click'>Giriş Yap</button>
      </div>


      <div style={{
        marginTop: 32,
        marginBottom: 24,
        textAlign: "center",
        fontSize: 14,
        color: "var(--g96)"
      }}>YA DA</div>


      <div onClick={() => navigate("/auth/register")} className='click' style={{ textAlign: "center", paddingBottom: 24 }}>Hesap oluştur!</div>

    </div>
  )
}

export default Login