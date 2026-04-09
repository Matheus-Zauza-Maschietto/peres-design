import HeroSocialLinks from './HeroSocialLinks';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-5 text-center max-w-xl w-full">

      <span
        className="text-xs tracking-[0.45em] uppercase"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-neutral)',
        }}
      >
        Portfólio
      </span>

      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-light leading-none text-black"
        style={{
          fontFamily: 'var(--font-serif)',
          letterSpacing: '0.12em',
        }}
      >
        Peres Design
      </h1>

      <div
        className="w-10 h-px mt-1"
        style={{ backgroundColor: 'var(--color-primary-1)' }}
        role="presentation"
      />

      <p
        className="text-xs sm:text-sm tracking-[0.28em] uppercase leading-relaxed"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-neutral)',
        }}
      >
        Design Gráfico, Identidade Visual &amp; Designs para Redes Sociais
      </p>

      <HeroSocialLinks />

    </div>
  );
}
