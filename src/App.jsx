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
import LoginSection from './components/LoginSection';


// MAIN ATUALIZADA
function App() {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [showLoginSection, setShowLoginSection] = useState(false);

  const openCreateAccount = () => {
    setShowCreateAccountModal(true);
    setShowLoginSection(false); 
  };

  const openLogin = () => {
    setShowLoginSection(true);
    setShowCreateAccountModal(false); 
  };

  const closeModals = () => {
    setShowCreateAccountModal(false);
    setShowLoginSection(false);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          onShowCreateAccount={openCreateAccount} 
          onShowLogin={openLogin} 
        />

        {showCreateAccountModal && <CreateAccountModal onClose={closeModals} />}
        {showLoginSection && <LoginSection onClose={closeModals} />}

        <Routes>
          <Route path="/" element={<SectionBelowHeader />} />
          <Route path="/#produtos" element={<ProductSection />} />
          <Route path="/#vantagens" element={<VantagensSection />} />
          <Route path="/#missao" element={<MissaoSection />} />
          <Route path="/#contato" element={<ContatoSection />} />
        </Routes>

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