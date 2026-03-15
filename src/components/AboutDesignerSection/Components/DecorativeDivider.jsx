export default function DecorativeDivider() {
  return (
    <div className="flex items-center gap-3 my-10" aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: "var(--color-primary-1)", opacity: 0.5 }} />
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: "var(--color-primary-2)" }}
      />
      <div className="flex-1 h-px" style={{ background: "var(--color-primary-1)", opacity: 0.5 }} />
    </div>
  );
}
