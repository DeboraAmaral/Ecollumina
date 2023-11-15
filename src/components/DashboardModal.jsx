import React, { useState, useEffect } from 'react';
import './DashboardModal.scss';
import X from '../x.png';
import Moni from '../monitoring.svg';
import LineChart from './LineChart';
import Sol from '../Sol.svg';
import Nuvem from '../Nuvem.svg';
import NuvemSol from '../NuvemSol.svg';
import getTemperature from '../api';

const DashboardModal = ({ onClose }) => {
    const [switchStatus, setSwitchStatus] = useState({
        1: false,
        2: false,
        3: false,
    });

    const [temperature, setTemperature] = useState('N/A');

    const handleSwitchToggle = (switchNumber) => {
        setSwitchStatus((prevStatus) => ({
            ...prevStatus,
            [switchNumber]: !prevStatus[switchNumber],
        }));
    };

    useEffect(() => {
        // Quando o componente montar, obtém a temperatura
        getTemperature().then((temp) => setTemperature(temp));
    }, []);

    return (
        <div className="dashboard-modal-overlay" onClick={onClose}>
            <div className="dashboard-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <img src={X} alt="Fechar" className="close-icon" onClick={onClose} />
                </div>
                <div className="modal-content">
                    <div className="inter-modal">
                        <div className="area-1">
                            <div className="status">
                                <p style={{ fontWeight: 'bold' }}>Status</p>
                                <p style={{ color: '#FFF', fontSize: '16px' }}>Ativo</p>
                            </div>
                            <div className="capacidade">
                                <p style={{ fontWeight: 'bold' }}>Capacidade</p>
                                <p style={{ color: '#FFF', fontSize: '16px' }}>420 Kw/h</p>
                            </div>
                            <div className="total-produz">
                                <p style={{ fontWeight: 'bold' }}>Total Produz.</p>
                                <p style={{ color: '#FFF', fontSize: '16px' }}>1200 Kw/h</p>
                            </div>
                        </div>
                        <div className="area-2">
                            <div className="consumo">
                                <p style={{ position: 'relative', top: '5px', fontWeight: 'bold' }} >Consumo</p>
                                <p style={{ color: '#FFF', marginTop: '5px', fontSize: '16px' }}>320 Kw/h</p>
                            </div>
                        </div>
                        <div className="area-4">
                            <div className="consumo">
                                <p style={{ position: 'relative', top: '5px', fontWeight: 'bold' }} >Carga Total</p>
                                <p style={{ color: '#FFF', marginTop: '5px', fontSize: '16px' }}>2320 Kw/h</p>
                            </div>
                        </div>
                        <div className="area-3">
                            <div className="consumo">
                                <p style={{ position: 'relative', top: '5px', fontWeight: 'bold' }} >Uso Total no período</p>
                                <p style={{ color: '#FFF', marginTop: '5px', fontSize: '16px' }}>2320 Kw/h</p>
                                <img src={Moni} alt='monitoring' style={{ marginLeft: '150px', marginBottom: '25px' }} />
                                <p className='greent' style={{ color: '#FFF', marginTop: '5px', fontSize: '16px', color: '#00DC5D' }}>+20Kw/h</p>
                            </div>
                            <div className='area-5'>
                                <LineChart />
                            </div>
                            <div className='area-6'>
                                <div>
                                    <button style={{ color: '#9a9a9a', borderRadius: '8px', width: '80px', height: '25px', color: '#000', margin: '10px', border: '0px' }} className="panel-button">Painel 1
                                    </button>
                                    <p style={{ fontWeight: 'bold', position: 'relative', top: '140px' }}>Carga Total</p>
                                    <p style={{ color: '#FFF', fontSize: '16px', marginTop: '5px', position: 'relative', top: '141px' }}>2320 Kw/h</p>
                                    <p style={{ fontWeight: 'bold', position: 'relative', top: '90px', left: '130px' }}>Temperatura</p>
                                    <p style={{ color: '#FFF', fontSize: '16px', marginTop: '5px', position: 'relative', top: '94px', left: '140px' }}>
                                        {temperature} °C
                                    </p>
                                </div>
                            </div>
                            <div className="area-7">
                                <div className="rectangle">
                                    <p>Jan</p>
                                    <img src={Sol} alt='imagem-1' />
                                    <p>320Kw/h</p>
                                </div>
                                <div className="rectangle">
                                    <p>Fev</p>
                                    <img src={Nuvem} alt='imagem-2' />
                                    <p>320Kw/h</p>
                                </div>
                                <div className="rectangle">
                                    <p>Mar</p>
                                    <img src={NuvemSol} alt='imagem-3' />
                                    <p>320Kw/h</p>
                                </div>
                                <div className="text-below-rectangle">
                                    <div>
                                        <p style={{ color: '#949494', marginBottom: '5px', fontWeight: 'bold' }}>Max. Usado</p>
                                        <p style={{ fontWeight: 'bold', fontSize: '12px' }}>789Kw/h</p>
                                    </div>
                                    <div>
                                        <p style={{ color: '#949494', marginBottom: '5px', fontWeight: 'bold' }}>Min. Usado</p>
                                        <p style={{ fontWeight: 'bold', fontSize: '12px' }}>893Kw/h</p>
                                    </div>
                                    <div>
                                        <p style={{ color: '#949494', marginBottom: '5px', fontWeight: 'bold' }}>Carga Total</p>
                                        <p style={{ fontWeight: 'bold', fontSize: '12px' }}>1789Kw/h</p>
                                    </div>
                                </div>
                            </div>
                            <div className="switch-container">
                                <div className='fundo-cinza'>
                                    <div style={{ left: '-36px', position: 'relative' }} className="custom-switch" onClick={() => handleSwitchToggle(1)}>

                                        <div style={{ left: '-30px', position: 'relative' }} className={`switch-ball ${switchStatus[1] ? 'active' : ''}`} />
                                        <h6 className='textball'>Painel: ON</h6>
                                    </div>
                                </div>
                                <div className='fundo-cinza'>
                                    <div className="custom-switch" onClick={() => handleSwitchToggle(2)}>
                                        <div className={`switch-ball ${switchStatus[2] ? 'active' : ''}`} />
                                        <h6 className='textball' style={{ marginLeft: '40px' }}>Desligar painel solar</h6>
                                    </div>
                                </div>
                                <div className='fundo-cinza'>
                                    <div className="custom-switch" onClick={() => handleSwitchToggle(3)}>
                                        <div className={`switch-ball ${switchStatus[3] ? 'active' : ''}`} />
                                        <h6 className='textball' style={{ marginLeft: '40px' }}>Economia de energia</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardModal;