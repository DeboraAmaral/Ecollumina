import React from 'react';
import './MissaoSection.scss'; 

const MissaoSection = () => {
  return (
    <section id='missao'>
    <div className="missao-section">
      <div className="background-image"></div>

      <div className="text-container">
        <div className="category">MISSÃO</div>
        <div className="title">Nossa missão</div>
        <p>
          Nossa missão é liderar a transição para um amanhã mais limpo, aproveitando a energia solar como nossa ferramenta de transformação.
          Acreditamos que a sustentabilidade é o caminho para um futuro melhor e estamos empenhados em fazer nossa parte para criar um ambiente mais saudável para as gerações futuras.
        </p>
      </div>
    </div>
    </section>
  );
};

export default MissaoSection;