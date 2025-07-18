import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const MentionsLegales = () => {
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
                    Agence web
                  </h1>
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'Accueil', id: 'accueil' },
                  { name: 'Nos réalisations', id: 'realisations' },
                  { name: 'Tarifs', id: 'tarifs' },
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
                { name: 'Nos réalisations', id: 'realisations' },
                { name: 'Tarifs', id: 'tarifs' },
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
            <p className="text-gray-700 mb-4">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 
              pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des 
              utilisateurs et visiteurs du site les informations suivantes :
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Éditeur du site :</h3>
              <p className="text-gray-700">
                <strong>Agence web</strong><br />
                Micro-entreprise<br />
                Adresse : Paris, France<br />
                Email : samuelrochwerg1@gmail.com<br />
                Téléphone : 06 43 86 13 60
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
            <p className="text-gray-700 mb-4">
              Le site est hébergé par :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Netlify, Inc.</strong><br />
                2325 3rd Street, Suite 296<br />
                San Francisco, CA 94107<br />
                États-Unis
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-gray-700 mb-4">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
              formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
              à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
            <p className="text-gray-700 mb-4">
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
              vouloir le signaler par email, à l'adresse samuelrochwerg1@gmail.com, en décrivant le problème 
              de la manière la plus précise possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liens hypertextes</h2>
            <p className="text-gray-700 mb-4">
              Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources 
              disponibles sur Internet. L'agence web ne dispose d'aucun moyen pour contrôler les sites en 
              connexion avec ses sites internet.
            </p>
            <p className="text-gray-700 mb-4">
              L'agence web ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. 
              Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant 
              du contenu de ces sites ou sources externes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Droit applicable</h2>
            <p className="text-gray-700 mb-4">
              Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit 
              français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec 
              de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents 
              pour connaître de ce litige.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email :</strong> samuelrochwerg1@gmail.com<br />
                <strong>Téléphone :</strong> 06 43 86 13 60
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;