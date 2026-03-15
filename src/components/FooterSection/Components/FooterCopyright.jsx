export default function FooterCopyright() {
  return (
    <div className="border-t" style={{ borderColor: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
        <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
          © 2026 Peres Design. Todos os direitos reservados.
        </p>
        <p className="text-xs" style={{ color: "#333" }}>
          Design &amp; Desenvolvimento com ♥
        </p>
      </div>
    </div>
  );
}
