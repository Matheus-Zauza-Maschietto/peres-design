import ProjectCard from "./Components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Café Bloom",
    category: "Identidade Visual",
    image: "https://dummyimage.com/600x750/CC99C2/ffffff",
  },
  {
    id: 2,
    title: "Studio Aura",
    category: "Branding",
    image: "https://dummyimage.com/600x750/82B2BE/ffffff",
  },
  {
    id: 3,
    title: "Clínica Serena",
    category: "Identidade Visual",
    image: "https://dummyimage.com/600x750/969696/ffffff",
  },
  {
    id: 4,
    title: "Arch Studio",
    category: "Branding",
    image: "https://dummyimage.com/600x750/1a1a1a/ffffff",
  },
  {
    id: 5,
    title: "Bela Arte",
    category: "Identidade Visual",
    image: "https://dummyimage.com/600x750/CC99C2/1a1a1a",
  },
  {
    id: 6,
    title: "Lume Co.",
    category: "Branding",
    image: "https://dummyimage.com/600x750/82B2BE/1a1a1a",
  },
];

export default function PortfolioGallerySection() {
  return (
    <section id="galeria" className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da seção */}
        <header className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: "var(--color-neutral)" }}
          >
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
            Identidades que contam histórias
          </h2>
        </header>

        {/* Grid de cards */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 list-none p-0 m-0">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
