import ServicesSectionHeader from './Components/ServicesSectionHeader';
import ServiceCard from './Components/ServiceCard';

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

export default function ServicesOffersSection() {
  return (
    <section
      id="ofertas"
      className="section-block px-6 md:px-12 lg:px-24"
      aria-labelledby="services-heading"
    >
      <ServicesSectionHeader />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
