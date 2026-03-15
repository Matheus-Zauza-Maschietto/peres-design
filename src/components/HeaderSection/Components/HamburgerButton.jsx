export default function HamburgerButton({ menuOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary1"
      aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={menuOpen}
    >
      <i
        className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-base`}
        aria-hidden="true"
      />
    </button>
  );
}
