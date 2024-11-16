import { useEffect, useRef } from 'react';
import authToken from "../server/authToken"

const WebSocketComponent = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1];

    const csrfToken = localStorage.getItem(authToken);

    if (token && csrfToken) {
      const wsUrl = `ws://localhost:3001/ws/${token}/${csrfToken}`;
      socketRef.current = new WebSocket(wsUrl);

      socketRef.current.onopen = () => {
        console.log('WebSocket bağlantısı kuruldu.');
      };

      socketRef.current.onmessage = (event) => {
        console.log('Gelen mesaj:', event.data);
      };

      socketRef.current.onerror = (error) => {
        console.error('WebSocket hatası:', error);
      };

      socketRef.current.onclose = () => {
        console.log('WebSocket bağlantısı kapatıldı.');
      };

      return () => {
        socketRef.current?.close();
      };
    } else {
      console.error('Token veya CSRF bilgisi eksik!');
    }
  }, []);

  return <div>WebSocket Örneği</div>;
};

export default WebSocketComponent;
