const stats = [
  { value: "+5",   label: "Anos de experiência" },
  { value: "+80",  label: "Projetos entregues" },
  { value: "100%", label: "Clientes satisfeitos" },
];

export default function DesignerStats() {
  return (
    <div className="flex gap-12">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <p
            className="text-4xl font-extralight text-black"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {value}
          </p>
          <p
            className="text-[0.65rem] uppercase tracking-[0.2em] mt-1.5"
            style={{ color: "var(--color-neutral)" }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
