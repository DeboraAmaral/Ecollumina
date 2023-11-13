import React from 'react';
import '../components/SectionBelowHeader.scss'; 
import SETAD from '../SETADIREITA.svg';
import FOTO1 from '../FOTO1.svg';
import FOTO2 from '../FOTO2.svg';
import FOTO3 from '../FOTO3.svg';
import FOTO4 from '../FOTO4.svg';

const SectionBelowHeader = () => {
  return (
    <section className="section-below-header">
      <div className="text-container">
        <h1 style={{marginTop: '65px', marginBottom: '30px'}}>
          Nossa motivação é impulsionada pela sua
          <span style={{ color: '#00DC5D' }}> energia!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="green-button">
            Entrar agora
          <div className="arrow-box">
            <img src={SETAD} alt="Seta" style={{display: 'flex', }}/>
          </div>
        </button>
      </div>
      <div className="images-container">
        <img className="img1" src={FOTO3} alt="Imagem 1" />
        <img className="img2" src={FOTO2} alt="Imagem 2" />
        <img className="img3" src={FOTO1} alt="Imagem 3" />
        <img className="img4" src={FOTO4} alt="Imagem 4" />
      </div>
    </section>
  );
};

export default SectionBelowHeader;