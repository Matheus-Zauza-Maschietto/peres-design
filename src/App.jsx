import Header from './components/HeaderSection/HeaderSection';
import AboutDesignerSection from './components/AboutDesignerSection/AboutDesignerSection';
import PortfolioGallerySection from './components/PortfolioGallerySection/PortfolioGallerySection';
import InstagramCarouselSection from './components/InstagramCarouselSection/InstagramCarouselSection';
import ServicesOffersSection from './components/ServicesOffersSection/ServicesOffersSection';
import FaqSection from './components/FaqSection/FaqSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/FooterSection/FooterSection';
import HeroSection from './components/HeroSection/HeroSection';

export default function App() {
  return (
    <div className="bg-white text-black">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PortfolioGallerySection />
        <InstagramCarouselSection />
        <ServicesOffersSection />
        <ContactSection />
        <AboutDesignerSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
