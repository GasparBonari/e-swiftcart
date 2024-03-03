import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Register = ({ socket }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();

  const handleRegister = () => {
    // Call the register function from the AuthContext
    register(username, password, socket);
  };

  return (
    <>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </>
  );
};

export default Register;
