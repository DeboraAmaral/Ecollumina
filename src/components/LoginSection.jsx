import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSection.scss'; 
import Logo from '../LOGOBRANCA.svg';
import GoogleLogo from '../GOOGLE.svg';
import FacebookLogo from '../FACEBOOK.svg';
import FUNDOC from '../FUNDOL.svg';

const LoginSection = ({ onClose }) => {
  return (
    <div className="login-section">
      <img className="background-image" src={FUNDOC} alt="Background" />
      <div className="content">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="form-container">
          <div className="form-header">
            <h2>Fazer Login</h2>
          </div>
          <div className="additional-options">
            <p className='p1'>Novo usuário? <Link style={{color: '#00DC5D', textDecoration: 'none'}} className='text1' to="/create-account">Crie uma conta</Link></p>
          </div>
          <form>
            <label htmlFor="email">Endereço de Email</label>
            <input type="email" id="email" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
            <div className="additional-options">
            <p className='p1'>Esqueceu sua senha? <Link className='text2' to="/create-account">Clique aqui</Link></p>
            </div>
            <div style={{width: '160px', border: '1px solid', position: 'relative', top: '70px'}}></div>
            <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'relative', top: '57px', left: '-30px'}}>
                <h6>ou</h6>
            </div>
            <div style={{width: '160px', border: '1px solid', position: 'relative', top: '42px', left: '220px'}}></div>
            <div className="button-container">
              <button className="google-button">
                <img src={GoogleLogo} alt="Google Logo" />
                <h6>Entrar com o Google</h6>
              </button>
              <button className="facebook-button">
                <img src={FacebookLogo} alt="Facebook Logo" />
                <h6>Entrar com o Facebook</h6>
              </button>
              <button className="continue-button">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;