import React from 'react';
import './userPopUp.css';

const UserPopup = ({ onClose, onSignIn, onSignUp }) => {
  return (
    <div className="user-popup">
      <button onClick={onSignIn}>Sign In</button>
      <button onClick={onSignUp}>Sign Up</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default UserPopup;
