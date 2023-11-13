import React from 'react';
import './CreateAccountModal.scss';
import Logo from '../LOGOBRANCA.svg';
import GoogleLogo from '../GOOGLE.svg';
import FacebookLogo from '../FACEBOOK.svg';
import FUNDOC from '../FUNDOC.svg';

const CreateAccountModal = () => {
  return (
    <div className="create-account-modal">
      <img className="background-image" src={FUNDOC} alt="Background" />
      <div className="content">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="form-container">
          <div className="form-header">
            <h2>Criar conta</h2>
          </div>
          <form>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />

            <label htmlFor="nickname">Apelido</label>
            <input type="text" id="nickname" />

            <label htmlFor="email">Endereço de Email</label>
            <input type="email" id="email" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" />

            <div className="button-container">
              <button className="google-button">
                <img src={GoogleLogo} alt="Google Logo" />
              </button>
              <button className="facebook-button">
                <img src={FacebookLogo} alt="Facebook Logo" />
              </button>
              <button className="continue-button">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;