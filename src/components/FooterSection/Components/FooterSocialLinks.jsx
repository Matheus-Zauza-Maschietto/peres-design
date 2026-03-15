import { socialMediaService } from '../../../services/SocialMediaService';

const { instagram, behance, whatsapp } = socialMediaService;

const socialLinks = [
  { label: instagram.label, href: instagram.url, icon: instagram.icon },
  { label: behance.label, href: behance.url, icon: behance.icon },
  { label: whatsapp.label, href: whatsapp.url, icon: whatsapp.icon },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "var(--color-primary-1)" }}
      >
        Redes Sociais
      </h3>
      <div className="flex gap-5">
        {socialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200"
            style={{
              borderColor: "var(--color-neutral)",
              color: "var(--color-neutral)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-primary-2)";
              e.currentTarget.style.color = "var(--color-primary-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-neutral)";
              e.currentTarget.style.color = "var(--color-neutral)";
            }}
          >
            <i className={`${icon} text-sm`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
