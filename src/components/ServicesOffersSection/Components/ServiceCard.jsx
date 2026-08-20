import { socialMediaService } from '../../../services/SocialMediaService.js';

const accentStyles = {
  primary1: {
    border: { borderColor: 'var(--color-primary-1)' },
    tag: { backgroundColor: 'var(--color-primary-1)', color: 'var(--color-white)' },
    divider: { backgroundColor: 'var(--color-primary-1)' },
    bullet: { backgroundColor: 'var(--color-primary-1)' },
    button: { backgroundColor: 'var(--color-primary-1)', color: 'var(--color-white)' },
  },
  primary2: {
    border: { borderColor: 'var(--color-primary-2)' },
    tag: { backgroundColor: 'var(--color-primary-2)', color: 'var(--color-white)' },
    divider: { backgroundColor: 'var(--color-primary-2)' },
    bullet: { backgroundColor: 'var(--color-primary-2)' },
    button: { backgroundColor: 'var(--color-primary-2)', color: 'var(--color-white)' },
  },
};

function buildWhatsAppUrl(packageName) {
  return socialMediaService.whatsapp.buildUrl(packageName);
}

export default function ServiceCard({ service }) {
  const cls = accentStyles[service.accent];

  return (
    <article
      className="relative flex flex-col border rounded-2xl p-8 md:p-10 bg-white"
      style={cls.border}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Badge "Novo" com indicador pulsante */}
      {service.isNew && (
        <div
          className="absolute -top-3.5 right-5 flex items-center gap-2 bg-black text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
          aria-label="Serviço novo"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary2 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary2" />
          </span>
          Novo
        </div>
      )}
      {/* Tag de destaque */}
      <span
        className="self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
        style={cls.tag}
      >
        {service.tag}
      </span>

      {/* Título */}
      <h3
        id={`service-title-${service.id}`}
        className="text-2xl md:text-3xl font-light text-black mb-4 leading-snug"
      >
        {service.title}
      </h3>

      {/* Divisor */}
      <div className="w-10 h-px mb-5" style={cls.divider} aria-hidden="true" />

      {/* Descrição */}
      <p className="text-neutral text-sm leading-relaxed mb-7">
        {service.description}
      </p>

      {/* Entregáveis */}
      <ul className="flex flex-col gap-3 mb-10" aria-label="O que está incluso">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-black">
            <span
              className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
              style={cls.bullet}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

    
      {/* CTA */}
      <div className="mt-auto pt-4">
        <a
          href={buildWhatsAppUrl(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-sm font-semibold tracking-wide py-4 px-6 rounded-xl transition-opacity duration-200 hover:opacity-90"
          style={cls.button}
          aria-label={`${service.ctaLabel} — abre no WhatsApp`}
        >
          {service.ctaLabel}
        </a>
      </div>
    </article>
  );
}
