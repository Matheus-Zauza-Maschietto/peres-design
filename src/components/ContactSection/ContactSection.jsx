import { socialMediaService } from '../../services/SocialMediaService.js';
import ContactHeader from './Components/ContactHeader';
import ContactCard from './Components/ContactCard';

const { instagram, whatsapp, email } = socialMediaService;

const contacts = [
  {
    id: "email",
    icon: email.icon,
    label: email.label,
    description: "Prefere escrever? Me manda uma mensagem.",
    actionLabel: "Enviar e-mail",
    href: email.url,
    accent: "primary1",
  },
  {
    id: "instagram",
    icon: instagram.icon,
    label: instagram.label,
    description: "Acompanhe os projetos e fale pelo direct.",
    actionLabel: "Abrir Instagram",
    href: instagram.url,
    accent: "primary2",
  },
  {
    id: "whatsapp",
    icon: whatsapp.icon,
    label: whatsapp.label,
    description: "Resposta rápida? Me chama no WhatsApp.",
    actionLabel: "Abrir WhatsApp",
    href: whatsapp.url,
    accent: "primary1",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contato"
      aria-label="Contato"
      className="section-block px-6 md:px-12 lg:px-24"
    >
      <ContactHeader />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </section>
  );
}
