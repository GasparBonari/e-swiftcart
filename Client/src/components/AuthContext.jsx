import React, { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          toast.error('Login failed. Please try again.');
        }
    });
  };

  const logout = (socket) => {
    socket.emit('logout');

    socket.on('logout_response', (data) => {
      if (data.success) {
        setUser(null);
      } else {
        toast.error('Log out failed. Please try again.');
      }
    });
  };

  const register = (username, password, socket) => {
    socket.emit('register', { username, password });

    socket.on('register_response', (data) => {
      console.log('Register response from backend:', data);
      if (data.success) {
        toast.success('Registration successful!');
      } else {
        toast.error('User already exist! Please try again.');
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
