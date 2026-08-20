import ServicesSectionHeader from './Components/ServicesSectionHeader';
import ServiceCard from './Components/ServiceCard';

const services = [
  {
    id: "designs-redes-sociais",
    tag: "Mais popular",
    title: "Designs para Redes Sociais",
    description:
      "Posts, stories e capas que param o scroll e traduzem a identidade da sua marca para o feed. Consistência visual que gera reconhecimento e engajamento.",
    deliverables: [
      "Posts e Stories individuais ou pacotes mensais",
      "Revisões inclusas",
      "Adaptação para diferentes formatos (feed, stories, capa)",
      "Desenvolvimento e estratégia de conteúdo (opcional)",
    ],
    accent: "primary2",
    ctaLabel: "Quero designs para minhas redes sociais",
  },
  {
    id: "alinhamento-visual",
    tag: "Novo",
    isNew: true,
    title: "Alinhamento Visual",
    description:
      "O alinhamento visual é a etapa que define o estilo do seu perfil nas redes sociais. Aqui organizamos a base visual da sua marca para que tudo tenha mais harmonia, organização e transmita sua essência de forma profissional.",
    deliverables: [
      "Criação de moodbard definindo o estilo fotográfico que o seu perfil irá seguir",
      "Definição de tipografia para seus posts",
      "Paleta de cores do perfil, que comunique a imagem que você deseja transmitir",
      "3 posts para fixar no perfil, apresentando você e seu trabalho de forma padronizada e profissional"
    ],
    accent: "primary1",
    ctaLabel: "Quero Alinhamento Visual",
  },
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
    accent: "primary2",
    ctaLabel: "Quero minha Identidade Visual",
  },
  {
    id: "landing-page",
    tag: "Lançamento",
    isNew: true,
    title: "Landing Page",
    description:
      "Uma página de alta conversão que apresenta sua marca, serviço ou produto de forma estratégica. Design elegante, responsivo e focado em transformar visitantes em clientes.",
    deliverables: [
      "Layout exclusivo e responsivo",
      "Seções que se adequam ao seu conteúdo",
      "Tipografia e cores da sua marca",
      "Otimização para dispositivos móveis",
      "Hospedagem e domínio (opcional)",
    ],
    accent: "primary1",
    ctaLabel: "Quero minha Landing Page",
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
