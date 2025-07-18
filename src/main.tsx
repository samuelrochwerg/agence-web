import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App';
import SiteVitrine from './components/SiteVitrine';
import ApplicationWeb from './components/ApplicationWeb';
import SEO from './components/SEO';
import SEA from './components/SEA';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import Merci from './components/Merci';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/site-vitrine" element={<SiteVitrine />} />
        <Route path="/application-web" element={<ApplicationWeb />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/sea" element={<SEA />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/merci" element={<Merci />} />
      </Routes>
    </Router>
  </StrictMode>
);
