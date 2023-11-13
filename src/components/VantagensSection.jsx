import React from 'react';
import './VantagensSection.scss'; // Certifique-se de importar o arquivo de estilo
import SETTINGS from '../SETTINGS.svg';
import DASH from '../DASH.svg';
import LIGHT from '../LIGHT.svg';
import EMOJI from '../EMOJI.svg';

const VantagensSection = () => {
  return (
    <div className="vantagens-section">
      <div className="text-container">
        <div className="category">VANTAGENS</div>
        <div className="title">Nossas vantagens</div>
      </div>

      <div className="content">
        {/* Quadrado e imagem 1 */}
        <div className="item">
          <div className="square">
            {/* Adicione o caminho da imagem como src */}
            <img src={EMOJI} alt="Vantagem 1" />
          </div>
          <p>
            <strong>Economia</strong><br />
            Nossos postes de iluminação solar oferecem uma opção econômica a longo prazo,
            reduzindo custos de eletricidade e manutenção em comparação com sistemas tradicionais,
            reforçando nosso compromisso com eficiência e sustentabilidade.
          </p>
        </div>

        {/* Quadrado e imagem 2 */}
        <div className="item">
          <div className="square">
            {/* Adicione o caminho da imagem como src */}
            <img src={SETTINGS} alt="Vantagem 2" />
          </div>
          <p>
            <strong>Facilidade de manutenção</strong><br />
            Nossos postes são cuidadosamente projetados com a finalidade de simplificar os processos
            de manutenção, assegurando que a iluminação permaneça em ótimo estado de funcionamento,
            promovendo assim ambientes seguros e bem-iluminados.
          </p>
        </div>

        {/* Quadrado e imagem 3 */}
        <div className="item">
          <div className="square">
            {/* Adicione o caminho da imagem como src */}
            <img src={DASH} alt="Vantagem 3" />
          </div>
          <p>
            <strong>Serviços integrados</strong><br />
            Além de realizar a instalação, proporcionamos aos nossos clientes um dashboard de monitoramento exclusivo.
            Esse recurso permite um gerenciamento eficaz e personalizado do sistema de iluminação,
            garantindo praticidade e controle.
          </p>
        </div>

        {/* Quadrado e imagem 4 */}
        <div className="item">
          <div className="square">
            {/* Adicione o caminho da imagem como src */}
            <img src={LIGHT} alt="Vantagem 4" />
          </div>
          <p>
            <strong>Sustentabilidade</strong><br />
            Desempenhamos um papel ativo e significativo na redução da pegada de carbono,
            priorizando o uso de fontes de energia renovável e sustentável.
            Nossas práticas refletem nosso compromisso contínuo com a preservação ambiental
            e o fomento de um futuro mais sustentável.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VantagensSection;