import { socialMediaService } from '../../services/SocialMediaService.js';

export default function FloatingWhatsAppButton() {
  const { whatsapp } = socialMediaService;

  return (
    <a
      href={whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <i className="fa-brands fa-whatsapp text-3xl transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
    </a>
  );
}
