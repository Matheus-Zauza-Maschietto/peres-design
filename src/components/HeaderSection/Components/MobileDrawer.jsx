export default function MobileDrawer({ navLinks, menuOpen, onLinkClick }) {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <nav
        className="flex flex-col px-6 pb-6 pt-4 gap-5 border-t border-black/5"
        aria-label="Menu mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className="text-[11px] tracking-widest uppercase text-neutral hover:text-black transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
