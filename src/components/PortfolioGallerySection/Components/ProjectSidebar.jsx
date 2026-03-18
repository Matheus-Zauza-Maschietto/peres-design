import { useEffect } from "react";

export default function ProjectSidebar({ project, onClose, children }) {
  const isOpen = Boolean(project);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          aria-hidden="true"
          onClick={onClose}
        />
      )}

      {/* Painel lateral */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={project ? `Detalhes: ${project.title}` : "Detalhes do projeto"}
        className={`fixed top-0 right-0 h-full w-full md:w-3/4 lg:w-1/2 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-black hover:opacity-60 transition-opacity"
          aria-label="Fechar"
        >
          <i className="fa-solid fa-xmark text-lg" aria-hidden="true" />
        </button>

        {children}
      </aside>
    </>
  );
}
