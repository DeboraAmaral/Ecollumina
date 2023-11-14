import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../LOGO.svg';
import { useAuth } from '../AuthContext.js';
import UserOptionsPanel from '../UserOptionsPanel';

const Header = ({ onShowCreateAccount, onShowLogin }) => {
  const { user, logout } = useAuth();
  const [showOptionsPanel, setShowOptionsPanel] = useState(false);

  const handleToggleOptionsPanel = () => {
    setShowOptionsPanel(!showOptionsPanel);
  };

  const handleCloseOptionsPanel = () => {
    setShowOptionsPanel(false);
  };

  return (
    <header className="custom-header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" style={{ width: '200px', height: '59px', marginTop: '-10px' }} />
        </div>

        <div className="nav-links">
          <Link to="/#produtos">Produtos</Link>
          <Link to="/#vantagens">Vantagens</Link>
          <Link to="/#missao">Missão</Link>
          <Link to="/#sobre-nos">Sobre nós</Link>
          <Link to="/#contato">Contato</Link>
        </div>

        <div className="user-section">
          {user ? (
            <>
              <div style={{marginTop: '25px'}} className="user-info" onClick={handleToggleOptionsPanel}>
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold', marginRight: '8px', marginTop: '20px' }}>{user.apelido}</p>
                <span style={{ fontSize: '12px', cursor: 'pointer', position: 'relative', fontWeight: 'bold', top: '-47px', left: '57px'}}>v</span>
              </div>
              {showOptionsPanel && <UserOptionsPanel onClose={handleCloseOptionsPanel} />}
            </>
          ) : (
            <>
              <button onClick={onShowLogin} className="login-link">Login</button>
              <button onClick={onShowCreateAccount} className="btn-create-account">Criar conta</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;