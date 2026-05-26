import { skills } from "../data/skills";

function Skills({ text }) {
  return (
    <div className="skills-bg">
      <div className="section-wrap">
        <div className="section-label">{text.sectionSkills}</div>
        <h2 className="section-title">
          {text.skillsTitle} <em>{text.skillsTitleEm}</em>
        </h2>
        <div className="skills-grid" id="skills">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <i className={skill.icon} style={{ color: skill.color }}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
