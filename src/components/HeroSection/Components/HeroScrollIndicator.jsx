export default function HeroScrollIndicator() {
  return (
    <div
      className="absolute bottom-10 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span
        className="text-xs tracking-[0.3em] uppercase"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-neutral)',
        }}
      >
        scroll
      </span>
      <div
        className="w-px h-8"
        style={{ backgroundColor: 'var(--color-primary-1)' }}
      />
    </div>
  );
}
