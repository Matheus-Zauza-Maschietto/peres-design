import { socialMediaService } from '../../services/SocialMediaService.js';

const services = [
  {
    id: "identidade-visual",
    tag: "Mais completo",
    title: "Identidade Visual",
    description:
      "Construa uma marca memorável e coerente do zero. Receba todos os elementos visuais que sua empresa precisa para se comunicar com profissionalismo em qualquer canal.",
    deliverables: [
      "Pesquisa e estratégia de marca",
      "Logotipo + variações e versões",
      "Paleta de cores e tipografia",
      "Manual de uso da marca (brandbook)",
      "Aplicações em mockups reais",
    ],
    price: "A partir de R$ 699,90",
    accent: "primary1",
    ctaLabel: "Quero minha Identidade Visual",
  },
  {
    id: "designs-redes-sociais",
    tag: "Mais popular",
    title: "Designs para Redes Sociais",
    description:
      "Posts, stories e capas que param o scroll e traduzem a identidade da sua marca para o feed. Consistência visual que gera reconhecimento e engajamento.",
    deliverables: [
      "Pack mensal de posts e stories",
      "Templates editáveis no Canva",
      "Adaptação para Instagram e LinkedIn",
      "Revisões inclusas",
      "Entrega em até 5 dias úteis",
    ],
    price: "A partir de R$ 69,90",
    accent: "primary2",
    ctaLabel: "Quero designs para minhas redes sociais",
  },
];

const accentClasses = {
  primary1: {
    border: "border-primary1",
    tag: "bg-primary1 text-white",
    divider: "bg-primary1",
    bullet: "bg-primary1",
    button: "bg-primary1 text-white",
  },
  primary2: {
    border: "border-primary2",
    tag: "bg-primary2 text-white",
    divider: "bg-primary2",
    bullet: "bg-primary2",
    button: "bg-primary2 text-white",
  },
};

function buildWhatsAppUrl(packageName) {
  return socialMediaService.whatsapp.buildUrl(packageName);
}

function ServiceCard({ service }) {
  const cls = accentClasses[service.accent];

  return (
    <article
      className={`flex flex-col border ${cls.border} rounded-2xl p-8 md:p-10 bg-white`}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Tag de destaque */}
      <span
        className={`self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 ${cls.tag}`}
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
      <div className={`w-10 h-px ${cls.divider} mb-5`} aria-hidden="true" />

      {/* Descrição */}
      <p className="text-neutral text-sm leading-relaxed mb-7">
        {service.description}
      </p>

      {/* Entregáveis */}
      <ul className="flex flex-col gap-3 mb-10" aria-label="O que está incluso">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-black">
            <span
              className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${cls.bullet}`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Preço */}
      <p className="text-xs uppercase tracking-widest text-neutral mb-1">
        Investimento
      </p>
      <p className="text-2xl font-semibold text-black mb-8">{service.price}</p>

      {/* CTA */}
      <a
        href={buildWhatsAppUrl(service.title)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto w-full text-center text-sm font-semibold tracking-wide py-4 px-6 rounded-xl transition-opacity duration-200 hover:opacity-90 ${cls.button}`}
        aria-label={`${service.ctaLabel} — abre no WhatsApp`}
      >
        {service.ctaLabel}
      </a>
    </article>
  );
}

export default function ServicesOffersSection() {
  return (
    <section
      id="ofertas"
      className="w-full py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-white"
      aria-labelledby="services-heading"
    >
      {/* Cabeçalho da seção */}
      <div className="max-w-xl mx-auto text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral mb-4">
          Serviços
        </p>
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-light text-black leading-tight"
        >
          O que posso fazer{" "}
          <span className="italic font-normal">por você</span>
        </h2>
        <p className="mt-4 text-sm text-neutral leading-relaxed">
          Escolha o pacote que melhor se encaixa na sua necessidade. Cada entrega
          é desenvolvida com atenção, estratégia e um olhar único para a sua
          marca.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
