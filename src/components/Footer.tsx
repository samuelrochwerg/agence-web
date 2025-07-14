import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-gray-400">
          © 2024 L'agence web. Tous droits réservés.
        </p>
        <div className="mt-2 space-x-6">
          <a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
            Mentions légales
          </a>
          <a href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 