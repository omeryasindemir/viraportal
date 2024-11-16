import React, { useState } from 'react'
import { chatSend } from '../../server/req/chat'
import { authOtherUserDetails } from '../../server/req/auth'


const Chat = () => {


  const [message, setmessage] = useState("")

  const [messageTo, setmessageTo] = useState("")


  const [userID, setuserID] = useState("")

  const [isReady, setisReady] = useState(false)


  const sendMessage = () => {
    console.log("message sent!")

    console.log(userID + " / " + message)
    
  }


  const getUserID = async () => {
    try {
      const data = await authOtherUserDetails(messageTo)
      console.log(data)
      console.log("Get Other User Details Success!")

      setuserID(data._id)

      console.log(data._id)

      setisReady(true)

    } catch (error) {
      console.log("Get Other User Details Error!")
    }
  }



  const demoChatWithComp = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 640 }} className='tBox'>
      <div>Devam etmek için konuşmak istediğin kişinin kullanıcı adını gir!</div>
      <input onChange={(e) => setmessageTo(e.target.value)} style={{ marginTop: 16 }} className='inp' type="text" name="" id="" placeholder='Kullanıcı Adı' />
      <button onClick={() => getUserID()} className='Btn click'>Başla</button>
    </div>
  )

  return (
    <>
      {
        !isReady && <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {demoChatWithComp()}
        </div>
      }

      {
        isReady && <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: 12,
            paddingLeft: 16,
            paddingRight: 32,
            justifyContent: "space-between",
            boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.16)"
          }} className='oBox'>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                height: 48,
                width: 48,
                overflow: "hidden",
                borderRadius: "50%",
                border: "1px solid var(--g53)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <img style={{ height: 48, width: 48 }} src={"https://i.pinimg.com/236x/d4/06/6d/d4066df9414e37e47739a84418971f36.jpg"} alt="" />
              </div>
              <div>Kullanici Adi</div>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 32
            }}>
              <div><i className="bi bi-search click"></i></div>
              <div><i className="bi bi-three-dots-vertical click"></i></div>
            </div>
          </div>
          <div className='chat_bottom_bar' style={{ margin: 16, marginLeft: 24, position: "relative", display: "flex", alignItems: "center", gap: 24 }}>
            <div><i className="bi bi-emoji-smile click"></i></div>
            <div><i className="bi bi-plus-lg click"></i></div>
            <div style={{ width: "100%" }}>
              <input onChange={(e) => setmessage(e.target.value)} style={{
                background: "linear-gradient(to right, var(--g24), var(--g20))"
              }} className='inp' type="text" name="" id="" placeholder='Bir mesaj gönder!' />
              <div style={{
                height: 48,
                width: 48,
                position: "absolute",
                right: 0,
                top: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0px 8px 8px 0px"
              }}><i onClick={() => sendMessage()} style={{ zIndex: 9, color: "var(--g64)" }} className="bi bi-send click"></i></div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Chat