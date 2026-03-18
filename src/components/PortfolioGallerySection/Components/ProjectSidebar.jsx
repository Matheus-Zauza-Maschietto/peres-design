import { useEffect } from "react";

export default function ProjectSidebar({ project, onClose }) {
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

        <div className="h-full overflow-y-auto px-6 pt-16 pb-8 md:px-8">
          {project && (
            <div className="mx-auto max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-black">
                {project.title}
              </h3>

              <div className="mt-8 space-y-4">
                {(project.imageMatrix || []).map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="grid gap-4"
                    style={{
                      gridTemplateColumns: `repeat(${Math.max(row.length, 1)}, minmax(0, 1fr))`,
                    }}
                  >
                    {row.map((imageUrl, columnIndex) => (
                      <img
                        key={`image-${rowIndex}-${columnIndex}`}
                        src={imageUrl}
                        alt={`${project.title} - imagem ${rowIndex + 1}.${columnIndex + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
