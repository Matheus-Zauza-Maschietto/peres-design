import { useState, useEffect } from 'react';
import NavBrand from './Components/NavBrand';
import DesktopNav from './Components/DesktopNav';
import HamburgerButton from './Components/HamburgerButton';
import MobileDrawer from './Components/MobileDrawer';

const navLinks = [
  { label: 'Galeria de Portfólio', href: '#galeria' },
  { label: 'Design para Redes Sociais', href: '#designs-rede-social' },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Contato', href: '#contato' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
];

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <NavBrand />
        <DesktopNav navLinks={navLinks} />
        <HamburgerButton menuOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
      </div>

      <MobileDrawer
        navLinks={navLinks}
        menuOpen={menuOpen}
        onLinkClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
