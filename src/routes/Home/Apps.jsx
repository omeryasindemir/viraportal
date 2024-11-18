import React, { useState } from 'react'

const Apps = () => {

    const [isCopy, setisCopy] = useState(false)

    const copyMcIp = () => {
        navigator.clipboard.writeText("46.202.129.34")
        setisCopy(true)

        setTimeout(() => {
            setisCopy(false)
        }, 640);
    }

    return (
        <div className='apps_container' style={{ display: "flex", gap: 8, width: "100%", overflowY: "scroll", paddingRight: 4 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 32, width: "100%", minHeight: 360, maxHeight: 360, justifyContent: "space-between" }} className="tBox">
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ textAlign: "center" }}><i style={{ fontSize: 64 }} className="bi bi-bezier2"></i></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ textAlign: "center", display: "flex", gap: 16, justifyContent: "center", alignItems: "center" }} className='midium_text'>virafic<span style={{ color: "gold" }} className='des_text'>4/5 <i className="bi bi-star-fill"></i></span></div>
                        <div style={{ textAlign: "center" }} className='des_text'>virafic sayesinde potansiyel müşterilerinize bir adım uzaktasınız!</div>
                    </div>
                </div>
                <div><button className='Btn click'>Kullanmaya Başla</button></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 32, width: "100%", minHeight: 360, maxHeight: 360, justifyContent: "space-between" }} className="tBox">
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ textAlign: "center" }}><i style={{ fontSize: 64 }} className="bi bi-wallet2"></i></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ textAlign: "center", display: "flex", gap: 16, justifyContent: "center", alignItems: "center" }} className='midium_text'>viracommerce<span style={{ color: "gold" }} className='des_text'>4/5 <i className="bi bi-star-fill"></i></span></div>
                        <div style={{ textAlign: "center" }} className='des_text'>viracommerce sayesinde mevcut mağazalarınız artık çok daha popüler!</div>
                    </div>
                </div>
                <div><button className='Btn click'>Kullanmaya Başla</button></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 32, width: "100%", minHeight: 360, maxHeight: 360, justifyContent: "space-between" }} className="tBox">
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ textAlign: "center" }}><i style={{ fontSize: 64 }} className="bi bi-hammer"></i></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ textAlign: "center", display: "flex", gap: 16, justifyContent: "center", alignItems: "center" }} className='midium_text'>MULA<span style={{ color: "gold" }} className='des_text'>4/5 <i className="bi bi-star-fill"></i></span></div>
                        <div style={{ textAlign: "center" }} className='des_text'>MULA'nın 2.0 sürümü ile ihaleleriniz artık çok daha pratik ve garanti!</div>
                    </div>
                </div>
                <div><button className='Btn click'>Talep Et</button></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 32, width: "100%", minHeight: 360, maxHeight: 360, justifyContent: "space-between" }} className="tBox">
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div style={{ textAlign: "center" }}><i style={{ fontSize: 64 }} className="bi bi-box"></i></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ textAlign: "center", display: "flex", gap: 16, justifyContent: "center", alignItems: "center" }} className='midium_text'>viramc<span style={{ color: "gold" }} className='des_text'>4/5 <i className="bi bi-star-fill"></i></span></div>
                        <div style={{ textAlign: "center" }} className='des_text'>viramc ile eğlenceyi doruklarına kadar yaşamak için Minecraft sunucumuza katıl!</div>
                    </div>
                </div>
                <div><button onClick={() => copyMcIp()} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }} className='Btn click'><span>{isCopy ? "Kopyalandı!" : "46.202.129.34"}</span><i className="bi bi-copy"></i></button></div>
            </div>

        </div>
    )
}

export default Apps