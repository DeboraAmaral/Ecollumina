import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import SectionBelowHeader from './components/SectionBelowHeader.jsx';
import ProductSection from './components/ProductSection.jsx';
import VantagensSection from './components/VantagensSection.jsx';
import MissaoSection from './components/MissaoSection.jsx';
import ContatoSection from './components/ContatoSection.jsx';
import Footer from './components/Footer.jsx';
import CreateAccountModal from './components/CreateAccountModal.jsx';

function App() {
  const [isCreateAccountModalOpen, setCreateAccountModalOpen] = useState(false);

  const openCreateAccountModal = () => {
    setCreateAccountModalOpen(true);
  };

  const closeCreateAccountModal = () => {
    setCreateAccountModalOpen(false);
  };

  return (
    <div className="App">
      <Header openCreateAccountModal={openCreateAccountModal} />
      <SectionBelowHeader />
      <ProductSection />
      <VantagensSection />
      <MissaoSection />
      <ContatoSection />
      <Footer />

      {isCreateAccountModalOpen && <CreateAccountModal closeCreateAccountModal={closeCreateAccountModal} />}
    </div>
  );
}

export default App;