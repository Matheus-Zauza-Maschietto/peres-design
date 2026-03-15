import { socialMediaService } from '../../../services/SocialMediaService.js';

export default function CarouselHeader() {
  return (
    <div className="text-center mb-12 px-4">
      <a
        href={socialMediaService.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar perfil no Instagram Peres Designs"
        className="inline-block text-[#969696] text-xs tracking-[0.25em] uppercase mb-3 transition-colors duration-300 hover:text-[#CC99C2]"
      >
        @{socialMediaService.instagram.handle}
      </a>
      <h2 className="text-2xl font-light tracking-wide text-black">
        Designs para Redes Sociais
      </h2>
      <div className="w-8 h-px bg-[#82B2BE] mx-auto mt-4" />
    </div>
  );
}
