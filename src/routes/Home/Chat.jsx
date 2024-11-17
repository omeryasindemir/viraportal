import React, { useEffect, useState } from 'react'
import { chatGet, chatSend } from '../../server/req/chat'
import { authOtherUserDetails } from '../../server/req/auth'

import ChatBg from "../../assets/chat_bg.png"
import { useNavigate, useParams } from 'react-router-dom'

const Chat = ({ userData, isMesGet }) => {




  const { chatUsername } = useParams()

  const [message, setmessage] = useState("")

  const [messageTo, setmessageTo] = useState("")


  const [userID, setuserID] = useState("")

  const [isReady, setisReady] = useState(false)

  const [allMessages, setallMessages] = useState("")

  const [mesChange, setmesChange] = useState(0)

  const navigate = useNavigate()


  useEffect(() => {
    console.log("geldi")
    setmesChange(mesChange + 1)
  },[isMesGet])


  const sendMessage = async () => {
    console.log("message sent!")

    console.log(userID + " / " + message)


    const obj = {
      message: message,
      file: undefined
    }

    try {
      const data = await chatSend(obj, userID)
      console.log(data)
      console.log("message Success!")

      setmesChange(mesChange + 1)
      setmessage("")

    } catch (error) {
      console.log("message Error!")
    }

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



  useEffect(() => {
    if (chatUsername) {
      console.log(chatUsername)
      setmessageTo(chatUsername)
    }
  }, [chatUsername])



  useEffect(() => {
    if (messageTo && chatUsername) {
      getUserID()
    }
  }, [messageTo])



  useEffect(() => {
    if (isReady) {
      const getMessages = async () => {
        try {
          const mesData = await chatGet(userID)
          console.log(mesData)
          console.log("Get Messages Success!")

          setallMessages(mesData)

        } catch (error) {
          console.log("Get Messages Error!")
        }
      }

      getMessages()
    }
  }, [isReady, mesChange])



  const demoChatWithComp = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 640 }} className='tBox'>
      <div>Devam etmek için konuşmak istediğin kişinin kullanıcı adını gir!</div>
      <input onChange={(e) => setmessageTo(e.target.value)} style={{ marginTop: 16 }} className='inp' type="text" name="" id="" placeholder='Kullanıcı Adı' />
      <button onClick={() => { navigate(`/home/chat/${messageTo}`); window.location.reload() }} className='Btn click'>Başla</button>
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
                <img style={{ height: 48, width: 48 }} src={"https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"} alt="" />
              </div>
              <div>{messageTo}</div>
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

          <div className='chat_main' style={{
            flex: 1,
            marginTop: 8,
            borderRadius: 8,
            position: "relative"
          }}>


            <div style={{ height: "100%", overflowY: "scroll", paddingRight: 4, flexDirection: "column-reverse", display: "flex" }}>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  background: "url('https://png.pngtree.com/png-vector/20221123/ourmid/pngtree-geometric-doodle-pattern-seamless-png-image_6477514.png')",
                  opacity: 0.08,
                  pointerEvents: "none"
                }}
              ></div>

              <div>
                {
                  allMessages && allMessages.map((item, index) => {

                    const date = new Date(item.createdAt)

                    const timeString = date.toLocaleTimeString("tr-TR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return <div style={{
                      display: "flex",
                      justifyContent: item.sender == userData._id ? "end" : "start"
                    }} key={index}>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: item.sender == userData._id ? "end" : "start", marginBottom: 8 }}>
                        <div style={{ paddingBottom: item.sender == userData._id && 24 }} className={item.sender == userData._id ? "myMes Mes" : "urMes Mes"}>{item.message}</div>
                        {
                          item.sender == userData._id && <div style={{
                            height: 24,
                            width: 24,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingRight: 2,
                            marginTop: -22
                          }}><i className="bi bi-check-all"></i></div>
                        }
                        <div style={{marginTop: 2, paddingLeft: 4}} className='des_text'>{timeString}</div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>

          </div>

          <div className='chat_bottom_bar' style={{ marginLeft: 24, position: "relative", display: "flex", alignItems: "center", gap: 24 }}>
            <div><i className="bi bi-emoji-smile click"></i></div>
            <div><i className="bi bi-plus-lg click"></i></div>
            <div style={{ width: "100%" }}>
              <input value={message} onKeyDown={(e) => {
                if (e.key === "Enter" && message !== "") {
                  sendMessage()
                }
              }} onChange={(e) => setmessage(e.target.value)} style={{
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