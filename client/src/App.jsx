import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/ui/ChatWidget';
import Home from './pages/Home';
import AIAutomations from './pages/AIAutomations';
import Marketplace from './pages/Marketplace';
import AppDevelopment from './pages/AppDevelopment';
import FinancialIntelligence from './pages/FinancialIntelligence';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ai-automations" element={<AIAutomations />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/financial-intelligence" element={<FinancialIntelligence />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="noise-overlay">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <ChatWidget />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
