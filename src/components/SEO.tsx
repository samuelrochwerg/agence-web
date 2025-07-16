import React from 'react';
import { Menu, X, Search, ArrowRight, CheckCircle, Mail, Phone, MapPin, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const SEO = () => {
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
    <>
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
        <section className="pt-16 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  SEO
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Référencement naturel
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Améliorez votre visibilité sur Google et attirez plus de clients qualifiés. 
                  Stratégie SEO complète pour dominer les résultats de recherche.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/#contact"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
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
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
              {/* Right Image */}
              <div className="mt-10 lg:mt-0 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SEO"
                  className="rounded-lg shadow-lg w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi investir dans le SEO ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Le référencement naturel est un investissement à long terme qui génère un trafic qualifié et durable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Trafic qualifié',
                  description: 'Attirez des visiteurs qui recherchent activement vos produits ou services.',
                  emoji: '🚦'
                },
                {
                  title: 'Visibilité durable',
                  description: 'Positionnement stable dans les résultats de recherche sur le long terme.',
                  emoji: '👀'
                },
                {
                  title: 'Crédibilité renforcée',
                  description: 'Être bien positionné sur Google renforce la confiance de vos prospects.',
                  emoji: '🏆'
                },
                {
                  title: 'ROI élevé',
                  description: 'Le SEO offre un excellent retour sur investissement comparé aux autres canaux.',
                  emoji: '💰'
                },
                {
                  title: 'Des leads qualifiés',
                  description: 'Attirez des prospects de qualité qui recherchent activement vos services.',
                  emoji: '🧲'
                },
                {
                  title: 'Trafic gratuit',
                  description: 'Réduisez votre dépendance à la publicité payante avec le trafic organique.',
                  emoji: '🆓'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors text-2xl">
                    {benefit.emoji}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nos services SEO
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une approche complète pour optimiser votre référencement naturel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Audit SEO complet',
                  description: 'Analyse technique approfondie de votre site pour identifier les points d\'amélioration.',
                  features: ['Analyse technique', 'Audit de contenu', 'Étude concurrentielle', 'Recommandations prioritaires'],
                  emoji: '🔍'
                },
                {
                  title: 'Optimisation technique',
                  description: 'Amélioration des performances et de la structure technique de votre site.',
                  features: ['Vitesse de chargement', 'Structure des URLs', 'Balisage HTML', 'Mobile-first'],
                  emoji: '🛠️'
                },
                {
                  title: 'Recherche de mots-clés',
                  description: 'Identification des mots-clés stratégiques pour votre secteur d\'activité.',
                  features: ['Analyse des volumes', 'Étude de la concurrence', 'Mots-clés longue traîne', 'Intention de recherche'],
                  emoji: '🔎'
                },
                {
                  title: 'Création de contenu',
                  description: 'Rédaction de contenus optimisés pour les moteurs de recherche et vos utilisateurs.',
                  features: ['Articles de blog', 'Pages de service', 'Fiches produits', 'Contenu evergreen'],
                  emoji: '📝'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <span className="mr-2 text-lg align-middle">{service.emoji}</span>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-left mx-auto w-max">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tarifs SEO
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Accompagnement SEO mensuel pour améliorer votre référencement naturel
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow max-w-md mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO - Référencement naturel</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-600">À partir de 299€</span>
                  <span className="text-gray-600 ml-2">/mois</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Audit SEO complet</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Optimisation technique</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Recherche de mots-clés</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Création de contenu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Suivi des performances</span>
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="w-full inline-block text-center bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
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
                Boostez votre référencement
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Contactez-nous pour analyser votre site et définir une stratégie SEO efficace
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">samuelrochwerg1@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">06 43 86 13 60</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Paris, France</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-green-600 rounded mr-3 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📅</span>
                    </div>
                    <a
                      href="https://calendly.com/samuelrochwerg1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 hover:underline transition-colors"
                    >
                      Prendre rendez-vous
                    </a>
                  </div>
                </div>
              </div>

              <form 
                action="https://formsubmit.co/26a35d63035bef831c58faa5615a012d"
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
      </div>
      <Footer />
    </>
  );
};

export default SEO;