import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../LOGO.svg';

const Header = ({ onShowCreateAccount, onShowLogin }) => {
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
          <button onClick={onShowLogin} className="login-link">Login</button> 
          <button onClick={onShowCreateAccount} className="btn-create-account">Criar conta</button>
        </div>
      </div>
    </header>
  );
};

export default Header;