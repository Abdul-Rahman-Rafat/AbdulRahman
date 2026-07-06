import { skills } from "../data/skills";
import shad from "../assets/shadcnui.webp";
import zodicon from "../assets/zod.webp";
import reacthookform from "../assets/reacthookform.webp";

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
                <img src={shad} alt={skill.name} />
              ) : skill.name === "Zod" ? (
                <img src={zodicon} alt={skill.name} />
              ) : skill.name === "React Hook Form" ? (
                <img src={reacthookform} alt={skill.name} />
              ) : (
                <i className={skill.icon} style={{ color: skill.color }}></i>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
