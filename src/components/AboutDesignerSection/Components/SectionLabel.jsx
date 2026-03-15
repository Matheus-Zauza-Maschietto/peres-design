export default function SectionLabel({ children }) {
  return (
    <span
      className="text-xs uppercase tracking-[0.28em] font-semibold mb-6 block"
      style={{ color: "var(--color-primary-1)" }}
    >
      {children}
    </span>
  );
}
