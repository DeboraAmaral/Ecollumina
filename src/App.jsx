import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SectionBelowHeader from './components/SectionBelowHeader';
import ProductSection from './components/ProductSection';
import VantagensSection from './components/VantagensSection';
import MissaoSection from './components/MissaoSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import CreateAccountModal from './components/CreateAccountModal';

function App() {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header onShowCreateAccount={() => setShowCreateAccountModal(true)} />
        
        {/* Renderiza condicionalmente o CreateAccountModal */}
        {showCreateAccountModal && <CreateAccountModal onClose={() => setShowCreateAccountModal(false)} />}

        <Routes>
          <Route path="/" element={<SectionBelowHeader />} />
          <Route path="/produtos" element={<ProductSection />} />
          <Route path="/vantagens" element={<VantagensSection />} />
          <Route path="/missao" element={<MissaoSection />} />
          <Route path="/contato" element={<ContatoSection />} />
        </Routes>

        {/* Renderiza os componentes após o CreateAccountModal */}
        <ProductSection />
        <VantagensSection />
        <MissaoSection />
        <ContatoSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;