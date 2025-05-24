import React, { useState, useEffect } from 'react';
import Typography from '../components/core/Typography';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détecter la section active
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Ajuster selon la hauteur de votre navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-sm shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center group"
          >
            <div className="relative">
              <Typography variant="h3" font="familyTitle" className="text-2xl font-bold text-transparent bg-gradient-to-r from-fuchsia-900 via-violet-900 to-cyan-300 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                Michel B.
              </Typography>
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-900/20 via-violet-900/20 to-cyan-300/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-galaxy-light'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-900 via-violet-900 to-cyan-300 rounded-full" />
                )}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span 
                className={`absolute block w-6 h-0.5 bg-current top-3 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-galaxy-dark/95 backdrop-blur-sm`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-galaxy-light bg-galaxy-light/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 