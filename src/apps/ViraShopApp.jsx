import React, { useState } from 'react';

function ViraShopApp() {
  const [background, setBackground] = useState(null);
  const [pattern, setPattern] = useState(null);
  const [result, setResult] = useState(null);

  const handleBackgroundChange = (e) => setBackground(e.target.files[0]);
  const handlePatternChange = (e) => setPattern(e.target.files[0]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('background', background);
    formData.append('pattern', pattern);

    try {
      const response = await fetch('https://viraportal.com/virashop/process-image', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Görsel işlenirken hata oluştu');
      const blob = await response.blob();
      setResult(URL.createObjectURL(blob));
    } catch (err) {
      console.error('Hata:', err);
      alert('Bir hata oluştu: ' + err.message);
    }
  };

  return (
    <div className='all_users_p72' style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", overflowY: "scroll", borderRadius: 8 }}>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "100%"
      }} className='tBox'>
        <div>
          <input type="file" onChange={handleBackgroundChange} accept="image/*" />
        </div>
        <div>
          <input type="file" onChange={handlePatternChange} accept="image/*" />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>

          {
            result && (
              <a style={{
                textDecoration: "none",
                width: 128,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16,
                background: "linear-gradient(to right, var(--g64), var(--g53))"
              }} className='Btn' href={result} download={result} >Görseli İndir!</a>
            )
          }

          <button style={{ width: 128 }} className='Btn click' onClick={handleSubmit}>Düzenle!</button>

        </div>
      </div>


      {result && (
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} className='tBox virashop_image_container'>
          <img className='virashop_image_img' style={{ borderRadius: 8 }} src={result} alt="Sonuç" />
        </div>
      )}

    </div>
  );
}

export default ViraShopApp;
