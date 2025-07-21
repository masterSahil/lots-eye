import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import ServicesSection from './components/pages/Services';
import ContactPage from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import WhatsAppButton from './components/Whatsapp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<ServicesSection />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
