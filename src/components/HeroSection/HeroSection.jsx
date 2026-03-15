import HeroContent from './Components/HeroContent';
import HeroScrollIndicator from './Components/HeroScrollIndicator';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-6"
      style={{ backgroundColor: '#FAFAFA' }}
      aria-label="Introdução — Peres Design"
    >
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
