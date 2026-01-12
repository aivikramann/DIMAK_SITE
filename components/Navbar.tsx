import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-lg glass border-b border-gray-100/50' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
             <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-md">
                 <div className="absolute inset-0 bg-gradient-to-br from-dimak-red to-red-800"></div>
                 <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-dimak-gold transform skew-x-[-12deg] translate-x-2"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-white font-display font-extrabold text-xl">D</div>
             </div>
             <div className="flex flex-col">
                <span className={`text-2xl font-display font-bold tracking-tight transition-colors ${scrolled ? 'text-dimak-dark' : 'text-white'}`}>
                    DIMAK
                </span>
             </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wider hover:text-dimak-red transition-colors relative group ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dimak-red transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
             onClick={onOpenContact}
             className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5 ${
                scrolled 
                ? 'bg-dimak-dark text-white hover:bg-dimak-red' 
                : 'bg-white text-dimak-dark hover:bg-dimak-gold'
             }`}
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${scrolled ? 'text-dimak-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-dimak-dark hover:text-dimak-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
               <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact();
                }}
                className="inline-block mt-4 px-6 py-3 bg-dimak-red text-white text-center rounded-lg font-bold w-full"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;