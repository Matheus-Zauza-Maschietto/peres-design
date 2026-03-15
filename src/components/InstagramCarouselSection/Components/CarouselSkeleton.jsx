export default function CarouselSkeleton({ posts }) {
  return (
    /* Skeleton SSR — grid estático visível antes da hidratação */
    <div className="flex gap-3 overflow-hidden px-4 justify-center">
      {posts.slice(0, 4).map((post) => (
        <div key={post.id} className="flex-none w-48 md:w-56">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral/20">
            <img
              src={post.img}
              alt={`${post.caption} — Peres Design | Design Gráfico, Identidade Visual e Designs para Redes Sociais`}
              loading="lazy"
              width="600"
              height="750"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
