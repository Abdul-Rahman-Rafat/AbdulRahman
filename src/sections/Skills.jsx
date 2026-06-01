import { skills } from "../data/skills";

function Skills({ text, sectionRef }) {
  return (
    <section className="skills-bg" id="skills" ref={sectionRef}>
      <div className="section-wrap">
        <div className="section-label">{text.sectionSkills}</div>
        <h2 className="section-title">
          {text.skillsTitle} <em>{text.skillsTitleEm}</em>
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              {skill.name === "Shadcn/ui" ? (
                <img src="/src/assets/shadcnui.webp" alt={skill.name} />
              ) : (
                <i className={skill.icon} style={{ color: skill.color }}></i>
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
