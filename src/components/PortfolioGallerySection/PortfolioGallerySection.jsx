import { useState } from "react";
import ProjectCard from "./Components/ProjectCard";
import ProjectSidebar from "./Components/ProjectSidebar";
import { projectsService } from "../../services/ProjectsService";

const projects = projectsService.getAll();

export default function PortfolioGallerySection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="galeria" className="section-block px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho da seção */}
        <header className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: "var(--color-neutral)" }}
          >
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
            Identidades que contam histórias
          </h2>
        </header>

        {/* Grid de cards */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 list-none p-0 m-0">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </ul>
      </div>

      <ProjectSidebar project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
