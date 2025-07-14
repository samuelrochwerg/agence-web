import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SiteVitrine from './components/SiteVitrine';
import ApplicationWeb from './components/ApplicationWeb';
import SEO from './components/SEO';
import SEA from './components/SEA';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/site-vitrine" element={<SiteVitrine />} />
        <Route path="/application-web" element={<ApplicationWeb />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/sea" element={<SEA />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>
    </Router>
  </StrictMode>
);
