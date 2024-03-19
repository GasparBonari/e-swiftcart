import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import io from 'socket.io-client';

const WebSocketComponent = () => {
  const { user } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const newSocket = io('http://localhost:5000');
      setSocket(newSocket);
      return () => newSocket.close();
    }
  }, [user]);

  useEffect(() => {
    if (socket) {
      socket.on('login', (response) => {
        console.log('Login response from backend:', response);
      });
    }
  }, [socket]);

  return null; // Since WebSocketComponent doesn't render any UI
};

export default WebSocketComponent;
