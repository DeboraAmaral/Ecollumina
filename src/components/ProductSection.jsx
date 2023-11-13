import React from 'react';
import './ProductSection.scss';
import SOLAR from '../SOLAR1.svg';

// Crie o componente
const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="content">
          {/* Imagem à esquerda */}
          <div className="image-container">
            <img src={SOLAR} alt="Produto" />
          </div>

          {/* Textos à direita */}
          <div className="text-container">
            <div className="category">PRODUTOS</div>
            <div className="title">Nossos produtos</div>
            <p>
              Oferecemos postes de iluminação com tecnologia de ponta, equipados com placas solares integradas.
              O diferencial é que esses postes podem ser monitorados através do nosso aplicativo dedicado.
              Essa solução não apenas ilumina as ruas e espaços públicos, mas também contribui para a preservação
              do meio ambiente, tornando a iluminação mais limpa e eficiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;