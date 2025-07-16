import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Code, Search, TrendingUp, ArrowRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Footer from './components/Footer';
import laVagabondeImg from './assets/images/la-vagabonde.png';
import leadstrooperImg from './assets/images/leadstrooper.png';
import atlantiqueTravauxImg from './assets/images/atlantique-travaux-services.png';
import heroBannerImg from './assets/images/hero-banner.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'tarifs', 'realisations', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  L'agence web
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('accueil')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'accueil'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Accueil
                </button>
                <div className="relative group">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  >
                    Nos services
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link to="/site-vitrine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Site vitrine</Link>
                      <Link to="/application-web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Application web</Link>
                      <Link to="/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEO</Link>
                      <Link to="/sea" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SEA</Link>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => scrollToSection('realisations')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'realisations'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Nos réalisations
                </button>
                <button
                  onClick={() => scrollToSection('tarifs')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'tarifs'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Tarifs
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'contact'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </button>
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
              <button
                onClick={() => scrollToSection('accueil')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === 'accueil'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Accueil
              </button>
              <div className="px-3 py-2">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Nos services
                </button>
                <div className="mt-2 space-y-1 pl-4">
                  <Link to="/site-vitrine" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">Site vitrine</Link>
                  <Link to="/application-web" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">Application web</Link>
                  <Link to="/seo" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">SEO</Link>
                  <Link to="/sea" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">SEA</Link>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('realisations')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === 'realisations'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Nos réalisations
              </button>
              <button
                onClick={() => scrollToSection('tarifs')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === 'tarifs'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === 'contact'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left pt-8">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Sites internet et marketing
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  sur-mesure
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl lg:max-w-none">
                Nous concevons des sites internet et des applications web sur mesure pour renforcer votre présence digitale, attirer du trafic qualifié et générer des leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a
                  href="https://calendly.com/samuelrochwerg1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Prendre un rdv gratuit
                </a>
              </div>
            </div>

            {/* Right Hero Image - Replace with hero-banner */}
            <div className="mt-10 lg:mt-0 flex justify-center">
              <img
                src={heroBannerImg}
                alt="Hero banner"
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des technologies modernes pour des solutions web performantes et évolutives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Site internet vitrine',
                description: 'Sites web professionnels pour présenter votre entreprise et vos services avec élégance',
                link: '/site-vitrine',
                image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'Application web',
                description: 'Solutions web sur mesure avec fonctionnalités avancées et interfaces interactives',
                link: '/application-web',
                image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'SEO',
                description: 'Optimisation pour les moteurs de recherche pour améliorer votre visibilité naturelle',
                link: '/seo',
                image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'SEA',
                description: 'Campagnes publicitaires Google Ads pour générer du trafic qualifié rapidement',
                link: '/sea',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                onClick={() => window.scrollTo(0, 0)}
                className="group block hover:transform hover:scale-105 transition-all duration-200"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md group-hover:bg-blue-700 transition-colors">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="realisations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos réalisations
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents et l'expertise technique mise en œuvre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Site vitrine La Vagabonde',
                description: 'Maison d\'hôtes dans le Sud de la France',
                image: laVagabondeImg,
                link: 'https://fascinating-queijadas-b3e277.netlify.app/'
              },
              {
                title: 'Web app Leadstrooper',
                description: 'Extraction de données de Google Maps',
                image: leadstrooperImg,
                link: 'https://www.leadstrooper.com/'
              },
              {
                title: 'Site internet artisan',
                description: 'Ramonage, nettoyage, dépannage, entretien...',
                image: atlantiqueTravauxImg,
                link: 'https://www.atlantiquetravauxservices.fr/'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain bg-white"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Visiter le site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <button className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-md cursor-not-allowed">
                      Bientôt disponible
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos tarifs
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins, du site vitrine à l'application sur mesure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Site Vitrine */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Populaire
                </span>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Site vitrine classique</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">À partir de 499€</span>
                  <span className="text-gray-600 ml-2">HT</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Design responsive</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Jusqu'à 5 pages</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Optimisation SEO</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Formulaire de contact</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Hébergement 1 an inclus</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Demander un devis
                </button>
              </div>
            </div>

            {/* Site sur mesure */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Site sur mesure</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-teal-600">Devis sur demande</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Design unique et personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Fonctionnalités sur mesure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Intégrations spécifiques</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">CMS personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Support et maintenance</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
                >
                  Demander un devis
                </button>
              </div>
            </div>

            {/* Application Web sur mesure */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Web sur mesure</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-700">Devis sur demande</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Application web complexe</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Architecture évolutive</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Base de données avancée</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">APIs et intégrations tierces</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Hébergement et maintenance</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition-colors font-medium"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* SEO - Référencement naturel */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">SEO - Référencement naturel</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-600">À partir de 299€</span>
                  <span className="text-gray-600 ml-2">/mois</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Audit SEO complet</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Optimisation technique</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Recherche de mots-clés</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Création de contenu</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Suivi des performances</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Demander un devis
                </button>
              </div>
            </div>

            {/* SEA - Référencement payant */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">SEA - Référencement payant</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-orange-600">À partir de 299€</span>
                  <span className="text-gray-600 ml-2">/mois</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Configuration Google Ads</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Gestion des campagnes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Optimisation des enchères</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Création d'annonces</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Rapports mensuels</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-50 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'une solution personnalisée ?
            </h4>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir un devis personnalisé adapté à votre budget.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Obtenir un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Les avis de nos clients
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de nos services et de notre accompagnement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie-Annick Poulin',
                company: 'La Vagabonde',
                review: 'Excellent travail sur notre site de maison d\'hôtes ! L\'équipe a su comprendre nos besoins et créer un site élégant qui nous ressemble. Nous recevons beaucoup plus de réservations depuis.',
                rating: 5
              },
              {
                name: 'Pierre Schockert',
                company: 'Atlantique Travaux',
                review: 'Son site vitrine et sa fiche Google My Business lui ont permis d\'obtenir des clients dans son périmètre d\'action.',
                rating: 5
              },
              {
                name: 'Gregory Tyshchenko',
                company: 'Leadstrooper',
                review: 'Application web sur mesure parfaitement réalisée. L\'équipe technique est compétente et à l\'écoute. Le projet a été livré dans les temps et fonctionne parfaitement.',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{review.review}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prêt à démarrer votre projet ? Discutons de vos besoins et trouvons la solution parfaite
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Informations de contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">samuelrochwerg1@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">06 43 86 13 60</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Paris, France</span>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 bg-blue-600 rounded mr-3 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📅</span>
                  </div>
                  <a
                    href="https://calendly.com/samuelrochwerg1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    Prendre un rendez-vous gratuit
                  </a>
                </div>
              </div>
            </div>

            <form 
              action="https://formsubmit.co/samuelrochwerg1@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nouveau message du formulaire de contact !" />
              <input type="hidden" name="_next" value="https://agence-web-beige.vercel.app/merci" />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;