const resources = [
  { label: 'Behance', href: 'https://www.behance.net/' },
  { label: 'Canva', href: 'https://www.canva.com/' },
  { label: 'Adobe Color', href: 'https://color.adobe.com/' },
];

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl font-light tracking-widest uppercase text-white">
        Peres Design
      </span>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-neutral)" }}>
        Design Gráfico, Identidade Visual e Designs para Redes Sociais criados com
        intenção, estética e estratégia.
      </p>
      <div className="flex flex-col gap-1.5 mt-1">
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: 'var(--color-primary-1)', fontFamily: 'var(--font-sans)' }}
        >
          Ferramentas & Recursos
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
          {resources.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-2 transition-colors duration-150"
                style={{ color: 'var(--color-neutral)' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
