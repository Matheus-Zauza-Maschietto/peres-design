import { socialMediaService } from '../../../services/SocialMediaService';

const { email } = socialMediaService;

const contactInfo = [
  { icon: email.icon, text: email.address },
  { icon: "fa-solid fa-phone", text: "+55 (44) 99732-4658" },
  { icon: "fa-solid fa-location-dot", text: "Maringá, PR — Brasil" },
];

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "var(--color-primary-1)" }}
      >
        Contato
      </h3>
      <ul className="flex flex-col gap-3">
        {contactInfo.map(({ icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-3 text-sm"
            style={{ color: "var(--color-neutral)" }}
          >
            <i
              className={`${icon} w-4 text-center`}
              style={{ color: "var(--color-primary-2)" }}
              aria-hidden="true"
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
