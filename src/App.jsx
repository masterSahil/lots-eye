import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Dashboard/Hero';
import AboutUs from './components/Dashboard/About';
import CoreServices from './components/Dashboard/Services';
import WhyChooseUs from './components/Dashboard/WhyChooseUs';
import CallToAction from './components/Dashboard/CallToAction';
import Footer from './components/Dashboard/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <CoreServices />
        <WhyChooseUs />
        <CallToAction />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
