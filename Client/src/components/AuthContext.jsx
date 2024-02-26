import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password, socket) => {
    socket.emit('login', { username, password });

    socket.on('login_response', (data) => {
        console.log('Login response from backend:', data);
        if (data.success) {
            setUser(data.user);
        } else {
            // Handle login failure
        }
    });
  };

  const logout = (socket) => {
    socket.emit('logout');

    socket.on('logout_response', (data) => {
      if (data.success) {
        setUser(null);
      } else {
        // Handle logout failure
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
