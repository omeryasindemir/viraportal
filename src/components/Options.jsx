import React from 'react'
import Icon from "../assets/v.png"

const Options = () => {
  return (
    <div className='oBox' style={{
      minWidth: 320
    }}>
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
    </div>
  )
}

export default Options