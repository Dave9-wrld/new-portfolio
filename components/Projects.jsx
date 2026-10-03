"use client";
import { useState } from "react";
import { projects } from "./portfolio-data";
const filters = [
  { id: "all", label: "All" },
  { id: "apps", label: "Web Apps" },
  { id: "sites", label: "Websites" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  return (
    <section className="panel" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured Projects</p>
          <h2>Selected Work</h2>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}{" "}
              <span>
                {item.id === "all"
                  ? projects.length
                  : projects.filter((project) => project.category === item.id)
                      .length}
              </span>
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} projects shown.
      </p>
      <div className="project-grid" key={filter}>
        {visible.map((project, index) => (
          <article
            key={project.name}
            className="project-card raised project-arrival"
            style={{ "--card-index": index }}
          >
            <a
              className="project-image"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
            >
              <img
                src={project.image}
                alt={`${project.name} website preview`}
                width="720"
                height="440"
                loading="lazy"
              />
              <span className="project-badge">{project.badge}</span>
            </a>
            <div className="project-copy">
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <a
                  className="round-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  ↗
                </a>
              </div>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-stack">{project.stack}</p>
              {project.source && (
                <a
                  className="project-source-link"
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source on GitHub`}
                >
                  View source on GitHub ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
