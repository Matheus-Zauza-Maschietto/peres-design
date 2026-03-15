export default function DesktopNav({ navLinks }) {
  return (
    <nav
      className="hidden lg:flex items-center gap-8"
      aria-label="Navegação principal"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative text-[11px] tracking-widest uppercase text-neutral after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-primary1 after:transition-all after:duration-300 hover:after:w-full hover:text-black transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
