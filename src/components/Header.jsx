import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../LOGO.svg';

const Header = ({ onShowCreateAccount }) => {
  return (
    <header className="custom-header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" style={{ width: '200px', height: '59px', marginTop: '-10px' }} />
        </div>

        <div className="nav-links">
          {/* Use links com âncoras para rolar até as seções */}
          <Link to="/#produtos">Produtos</Link>
          <Link to="/#vantagens">Vantagens</Link>
          <Link to="/#missao">Missão</Link>
          <Link to="#">Sobre nós</Link>
          <Link to="/#contato">Contato</Link>
        </div>

        <div className="user-section">
          {/* Adicione um link "Login" */}
          <Link to="/login" className="login-link">Login</Link>
          <button onClick={onShowCreateAccount} className="btn-create-account">Criar conta</button>
        </div>
      </div>
    </header>
  );
};

export default Header