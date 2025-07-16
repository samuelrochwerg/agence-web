import React from 'react';
import { Menu, X, Code, ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import leadstrooperImg from '../assets/images/leadstrooper.png';

const ApplicationWeb = () => {
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
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  Accueil
                </button>
                <div className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50 transition-colors">
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
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  Nos réalisations
                </button>
                <button
                  onClick={() => scrollToSection('tarifs')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  Tarifs
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
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
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                Accueil
              </button>
              <div className="px-3 py-2">
                <span className="text-base font-medium text-gray-900">Nos services</span>
                <div className="mt-2 space-y-1 pl-4">
                  <Link to="/site-vitrine" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">Site vitrine</Link>
                  <Link to="/application-web" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">Application web</Link>
                  <Link to="/seo" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">SEO</Link>
                  <Link to="/sea" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">SEA</Link>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('realisations')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                Nos réalisations
              </button>
              <button
                onClick={() => scrollToSection('tarifs')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Application web
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  sur mesure
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Développement d'applications web complexes et performantes. 
                Solutions sur mesure avec fonctionnalités avancées et architecture évolutive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/#contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
            {/* Right Image */}
            <div className="mt-10 lg:mt-0 flex justify-center">
              <img
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Application web"
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi une application web ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les applications web offrent des fonctionnalités avancées et une expérience utilisateur riche pour répondre aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fonctionnalités sur mesure',
                description: 'Développement de fonctionnalités spécifiques adaptées à vos processus métier.',
                emoji: '⚙️'
              },
              {
                title: 'Interface interactive',
                description: 'Expérience utilisateur riche avec des interactions dynamiques et intuitives.',
                emoji: '🖱️'
              },
              {
                title: 'Gestion de données',
                description: 'Base de données robuste pour stocker et gérer vos informations critiques.',
                emoji: '🗄️'
              },
              {
                title: 'Intégrations API',
                description: 'Connexion avec vos outils existants et services tiers via des APIs.',
                emoji: '🔗'
              },
              {
                title: 'Évolutivité',
                description: 'Architecture conçue pour grandir avec votre entreprise et vos besoins.',
                emoji: '📈'
              },
              {
                title: 'Sécurité avancée',
                description: 'Protection des données avec les meilleures pratiques de sécurité web.',
                emoji: '🔒'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4 group-hover:bg-teal-200 transition-colors text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types d'applications web
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques exemples d'applications web que nous développons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CRM personnalisé',
                description: 'Gestion de la relation client adaptée à vos processus commerciaux.',
                image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png' // laptop emoji
              },
              {
                title: 'Plateforme e-learning',
                description: 'Système de formation en ligne avec suivi des progrès et certifications.',
                image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f393.png' // graduation cap emoji
              },
              {
                title: 'Outil de gestion',
                description: 'Application métier pour optimiser vos processus internes.',
                image: 'https://img.icons8.com/color/96/000000/task.png'
              },
              {
                title: 'Marketplace',
                description: 'Plateforme de mise en relation entre vendeurs et acheteurs.',
                image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6d2.png' // shopping cart emoji
              },
              {
                title: 'Dashboard analytique',
                description: 'Tableaux de bord interactifs pour visualiser vos données.',
                image: 'https://img.icons8.com/color/96/000000/combo-chart--v2.png'
              },
              {
                title: 'Système de réservation',
                description: 'Gestion des réservations et plannings en temps réel.',
                image: 'https://img.icons8.com/color/96/000000/calendar--v2.png'
              }
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <img src={example.image} alt={example.title} className="w-12 h-12 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Project Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Exemple de réalisation d'une application web sur mesure
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col items-center justify-center">
              <img src={leadstrooperImg} alt="Application Leadstrooper" className="rounded-lg shadow-lg w-full max-w-lg h-80 object-contain bg-white" />
              <div className="w-full flex justify-center mt-4">
                <a
                  href="https://www.leadstrooper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Visiter le site
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H19.5V12M19.5 6L10.5 15M4.5 18H19.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Besoin du client :</h3>
                <p className="text-gray-700">Créer une application web pour extraire des données de Google Maps et générer des fichiers Excel/CSV pour la prospection B2B.</p>
              </div>
              <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Avis du client :</h3>
                <p className="italic text-gray-800">"Application web sur mesure parfaitement réalisée. L'équipe technique est compétente et à l'écoute. Le projet a été livré dans les temps et fonctionne parfaitement."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tarifs application web
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque projet étant unique, nous établissons un devis personnalisé selon vos besoins
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow max-w-md mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Web sur mesure</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-teal-600">Devis sur demande</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Application web complexe</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Architecture évolutive</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Base de données avancée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">APIs et intégrations tierces</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Hébergement et maintenance</span>
                </li>
              </ul>
              <a
                href="/#contact"
                className="w-full inline-block text-center bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discutons de votre projet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contactez-nous pour analyser vos besoins et définir la solution technique adaptée
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">samuelrochwerg1@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">06 43 86 13 60</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Paris, France</span>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 bg-teal-600 rounded mr-3 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📅</span>
                  </div>
                  <a
                    href="https://calendly.com/samuelrochwerg1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Décrivez votre projet d'application web..."
                  required
                />
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nouveau message du formulaire de contact !" />
              <input type="hidden" name="_next" value="/merci" />
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ApplicationWeb;