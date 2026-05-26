import { ExternalIcon, GitHubIcon } from "../../components/Icons";

function ProjectCard({ project }) {
  function openGithub(event) {
    event.preventDefault();
    event.stopPropagation();
    window.open(project.githubUrl, "_blank", "noreferrer");
  }

  return (
    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-card">
      <div className="project-preview">
        <div className="project-num-badge">{project.number}</div>
        <div className="project-preview-inner">{project.preview}</div>
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-footer">
        <span className="project-link">
          {project.githubUrl ? <ExternalIcon /> : <GitHubIcon />}
          {project.githubUrl ? "Live Demo" : "GitHub"}
        </span>
        {project.githubUrl && (
          <button className="project-link project-link-button" onClick={openGithub}>
            <GitHubIcon />
            GitHub
          </button>
        )}
      </div>
    </a>
  );
}

export default ProjectCard;
