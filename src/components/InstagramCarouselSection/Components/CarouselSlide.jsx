export default function CarouselSlide({ post }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer rounded-2xl">
      {/* Proporção 4:5 — formato retrato (Instagram padrão) */}
      <div className="aspect-[4/5] w-full">
        <img
          src={post.img}
          alt={`${post.caption} — Peres Design | Design Gráfico, Identidade Visual e Designs para Redes Sociais`}
          loading="lazy"
          width="600"
          height="750"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Overlay hover — gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-6">
        <span className="text-white text-xs font-light tracking-[0.2em] uppercase">
          {post.caption}
        </span>
      </div>
    </div>
  );
}
