export default function ProjectCard({ title, category, image, onClick }) {
  return (
    <li>
      <a
        href="#"
        aria-label={`Ver projeto ${title}`}
        className="group block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary1 rounded-2xl"
        onClick={(e) => { e.preventDefault(); onClick?.(); }}
      >
        {/* Stack effect wrapper */}
        <div className="relative">
          {/* Camada traseira da stack */}
          <div
            className="absolute inset-0 rounded-2xl rotate-1 translate-y-1 transition-transform duration-500 ease-out group-hover:rotate-3 group-hover:translate-y-4 group-hover:translate-x-2"
            style={{ backgroundColor: "var(--color-primary-2)", opacity: 0.4 }}
            aria-hidden="true"
          />
          {/* Camada do meio da stack */}
          <div
            className="absolute inset-0 rounded-2xl transition-transform duration-500 ease-out group-hover:-rotate-1 group-hover:translate-y-2 group-hover:-translate-x-1"
            style={{ backgroundColor: "var(--color-primary-1)", opacity: 0.35 }}
            aria-hidden="true"
          />

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
        </div>{/* fim stack wrapper */}

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
