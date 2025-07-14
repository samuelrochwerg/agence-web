import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PolitiqueConfidentialite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    L'agence web
                  </h1>
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'Accueil', id: 'accueil' },
                  { name: 'Tarifs', id: 'tarifs' },
                  { name: 'Nos réalisations', id: 'realisations' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { name: 'Accueil', id: 'accueil' },
                { name: 'Tarifs', id: 'tarifs' },
                { name: 'Nos réalisations', id: 'realisations' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              La présente politique de confidentialité a pour but d'informer les utilisateurs du site 
              des données personnelles que nous recueillons, ainsi que les informations suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Quelles données personnelles nous recueillons et pourquoi nous les recueillons</li>
              <li>Comment nous utilisons ces données personnelles</li>
              <li>Les choix offerts aux utilisateurs concernant ces données</li>
              <li>Les mesures de sécurité mises en place pour protéger ces données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Responsable du traitement</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>L'agence web</strong><br />
                Email : samuelrochwerg1@gmail.com<br />
                Téléphone : 06 43 86 13 60<br />
                Adresse : Paris, France
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Données collectées</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Données de contact</h3>
            <p className="text-gray-700 mb-4">
              Lorsque vous nous contactez via le formulaire de contact, nous collectons :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Votre nom</li>
              <li>Votre adresse email</li>
              <li>Le contenu de votre message</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Données de navigation</h3>
            <p className="text-gray-700 mb-4">
              Lors de votre navigation sur notre site, nous pouvons collecter automatiquement :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Votre adresse IP</li>
              <li>Le type de navigateur utilisé</li>
              <li>Les pages visitées et le temps passé sur le site</li>
              <li>La date et l'heure de votre visite</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Finalités du traitement</h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Répondre à vos demandes de contact et devis</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Analyser l'utilisation de notre site pour optimiser l'expérience utilisateur</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Base légale du traitement</h2>
            <p className="text-gray-700 mb-4">
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Votre consentement</strong> : pour l'envoi de communications marketing</li>
              <li><strong>L'exécution d'un contrat</strong> : pour la réalisation de prestations</li>
              <li><strong>L'intérêt légitime</strong> : pour l'amélioration de nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Durée de conservation</h2>
            <p className="text-gray-700 mb-4">
              Nous conservons vos données personnelles pendant les durées suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Données de contact</strong> : 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation</strong> : 13 mois maximum</li>
              <li><strong>Données contractuelles</strong> : 10 ans conformément aux obligations comptables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Partage des données</h2>
            <p className="text-gray-700 mb-4">
              Nous ne vendons, n'échangeons et ne transférons pas vos données personnelles à des tiers, 
              sauf dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec nos prestataires techniques (hébergement, maintenance) sous contrat de confidentialité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700">
                <strong>Pour exercer vos droits, contactez-nous :</strong><br />
                Email : samuelrochwerg1@gmail.com<br />
                Téléphone : 06 43 86 13 60
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Sécurité des données</h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
              vos données personnelles contre :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>L'accès non autorisé</li>
              <li>La divulgation</li>
              <li>La modification</li>
              <li>La destruction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Ces cookies nous permettent de :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic du site</li>
              <li>Améliorer nos services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications</h2>
            <p className="text-gray-700 mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications seront publiées sur cette page avec une date de mise à jour.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant cette politique de confidentialité, contactez-nous :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email :</strong> samuelrochwerg1@gmail.com<br />
                <strong>Téléphone :</strong> 06 43 86 13 60<br />
                <strong>Adresse :</strong> Paris, France
              </p>
            </div>
          </section>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <p className="text-sm text-yellow-800">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialite;