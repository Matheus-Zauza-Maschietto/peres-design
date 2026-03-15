export default function ProjectCard({ title, category, image }) {
  return (
    <li>
      <a
        href="#"
        aria-label={`Ver projeto ${title}`}
        className="group block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary1 rounded-2xl"
      >
        {/* Container da imagem com efeito hover */}
        <div className="relative overflow-hidden aspect-video rounded-2xl shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
          <img
            src={image}
            alt={`${title} — ${category} | Peres Design, Maringá PR`}
            loading="lazy"
            width="600"
            height="750"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay gradiente suave */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            aria-hidden="true"
          />

          {/* Label "Ver Projeto" revelado no hover */}
          <div
            className="absolute inset-0 flex items-end justify-start p-6 pointer-events-none"
            aria-hidden="true"
          >
            <span className="text-white text-xs font-light tracking-[0.2em] uppercase translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              Ver Projeto&nbsp;&rarr;
            </span>
          </div>
        </div>

        {/* Informações do card abaixo da imagem */}
        <div className="pt-4 pb-2 px-1">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-1"
            style={{ color: "var(--color-neutral)" }}
          >
            {category}
          </p>
          <h3 className="text-base font-light text-black tracking-tight">
            {title}
          </h3>
        </div>
      </a>
    </li>
  );
}
