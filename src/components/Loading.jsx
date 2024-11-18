import React, { useEffect } from 'react'
import Loader from "../assets/loader.svg"
import { useNavigate } from 'react-router-dom'

const Loading = ({message, to}) => {

  const navigate = useNavigate()


  useEffect(() => {
    if (to == "/") {
      navigate("/")
    }
  },[to])
  
  return (
    <div style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.48)",
        height: 64,
        width: 64,
        borderRadius: 8,
        marginLeft: -32,
        marginTop: -32,
        zIndex: 999999999
    }}>

        <img style={{height: 32, width: 32}} src={Loader} alt="" />
        {
          message && <div style={{
            position: "absolute",
            textAlign: "center"
          }}>{message}</div>
        }
    </div>
  )
}

export default Loading