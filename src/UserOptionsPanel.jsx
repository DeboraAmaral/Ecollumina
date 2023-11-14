import React from 'react';
import { useAuth } from './AuthContext';

const UserOptionsPanel = ({ onClose }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose(); 
  };

  return (
    <div className="user-options-panel">
      <div className="arrow-up"></div>
      <button style={{ backgroundColor: '#FFF', border: '0px', marginLeft: '8px' }} onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default UserOptionsPanel;