export default function DesignerQuote() {
  return (
    <blockquote
      className="border-l-2 pl-6 italic text-lg font-normal leading-relaxed text-black"
      style={{ fontFamily: "var(--font-sans)", borderColor: "var(--color-primary-2)" }}
    >
      Mais do que design, meu trabalho é transformar ideias em identidades que fazem marcas serem vistas e lembradas com
      {" "}<span style={{ color: "var(--color-primary-1)" }}>presença</span>,{" "}
      <span style={{ color: "var(--color-primary-2)" }}>personalidade</span> e{" "}
      <span style={{ color: "var(--color-neutral)" }}>propósito</span>.
    </blockquote>
  );
}
