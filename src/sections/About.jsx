import { cvLink } from "../data/personal";

function About({ text }) {
  const stats = [
    { number: "160+", label: text.statTraining },
    { number: "5+", label: text.statProjects },
    { number: "14", label: text.statTech },
    { number: "∞", label: text.statCuriosity },
  ];

  return (
    <section id="about">
      <div className="section-wrap">
        <div className="section-label">{text.sectionAbout}</div>
        <h2 className="section-title">
          {text.aboutTitle}<br /><em>{text.aboutTitleEm}</em>
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{text.aboutP1}</p>
            <p>{text.aboutP2}</p>
            <p>{text.aboutP3}</p>
            <div className="about-ctas">
              <a href="#contact" className="btn-primary about-btn">{text.getInTouch}</a>
              <a href={cvLink} target="_blank" rel="noreferrer" className="btn-outline about-btn">{text.downloadCv}</a>
            </div>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
