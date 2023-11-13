import './App.css';
import Header from './components/Header.jsx';
import SectionBelowHeader from './components/SectionBelowHeader.jsx';
import ProductSection from './components/ProductSection.jsx';
import VantagensSection from './components/VantagensSection.jsx';
import MissaoSection from './components/MissaoSection.jsx';
import ContatoSection from './components/ContatoSection.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <SectionBelowHeader/>
      <ProductSection/>
      <VantagensSection/>
      <MissaoSection/>
      <ContatoSection/>
      <Footer/>
    </div>
  );
}

export default App;
