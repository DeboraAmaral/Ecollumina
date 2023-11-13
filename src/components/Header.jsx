import React from 'react';
import '../components/Header.scss'; 
import logoImage from '../LOGO.svg'; 

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="Logo" style={{ width: '200px', height: '59px', marginTop: '-10px'}} />
        </div>

        <div className="nav-links">
          <a href="/">Produtos</a>
          <a href="/">Vantagens</a>
          <a href="/">Missão</a>
          <a href="/">Sobre nós</a>
          <a href="/">Contato</a>
        </div>

        <div className="user-section">
          <a href="/" className="login-link">Login</a>
          <button className="btn-create-account">Criar conta</button>
        </div>
      </div>
    </header>
  );
};

export default Header;