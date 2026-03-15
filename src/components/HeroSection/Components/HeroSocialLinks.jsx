import { socialMediaService } from '../../../services/SocialMediaService';

const socialLinks = [
  { key: 'instagram', ...socialMediaService.instagram },
  { key: 'behance', ...socialMediaService.behance },
];

export default function HeroSocialLinks() {
  return (
    <div className="flex items-center gap-8 mt-3" role="list">
      {socialLinks.map(({ key, url, label, icon }) => (
        <a
          key={key}
          href={url}
          className="hero-social-link text-2xl"
          aria-label={label}
          role="listitem"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          <i className={icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
