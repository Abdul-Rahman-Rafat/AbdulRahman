import { GitHubIcon } from "../../components/Icons";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects({ text }) {
  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="section-label">{text.sectionProjects}</div>
        <h2 className="section-title">
          {text.projectsTitle} <em>{text.projectsTitleEm}</em>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.number} />
          ))}

          <a href="https://github.com/Abdul-Rahman-Rafat" target="_blank" rel="noreferrer" className="project-more">
            <span className="project-link"><GitHubIcon size={16} /></span>
            <div className="project-more-label">More on GitHub</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
