import { useEffect, useRef } from "react";
import me from "../assets/me.png";
import { cvLink, socialLinks } from "../data/personal";
import { orbitSkills } from "../data/skills";
import { SocialIcon } from "../components/Icons";

function Hero({ text }) {
  const heroCenterRef = useRef(null);

  useEffect(() => {
    const center = heroCenterRef.current;
    const nodes = Array.from(center.querySelectorAll(".skill-node"));
    const size = 54;
    const centerX = 260;
    const centerY = 260;
    const innerOrbit = 155;
    const outerOrbit = 218;
    let animationId;

    const nodeData = nodes.map((node) => ({
      node,
      orbit: node.dataset.orbit === "outer" ? outerOrbit : innerOrbit,
      angle: (Number(node.dataset.angle) * Math.PI) / 180,
      speed: Number(node.dataset.speed) * 0.012,
      hover: false,
    }));

    const timers = nodeData.map((item, index) =>
      setTimeout(() => item.node.classList.add("entered"), 600 + index * 100),
    );

    const cleanups = nodeData.map((item) => {
      const onEnter = () => {
        item.hover = true;
      };
      const onLeave = () => {
        item.hover = false;
      };
      item.node.addEventListener("mouseenter", onEnter);
      item.node.addEventListener("mouseleave", onLeave);
      return () => {
        item.node.removeEventListener("mouseenter", onEnter);
        item.node.removeEventListener("mouseleave", onLeave);
      };
    });

    function tick() {
      const scale = center.offsetWidth / 520;

      nodeData.forEach((item) => {
        if (!item.hover) item.angle += item.speed;

        const x = centerX + item.orbit * Math.cos(item.angle);
        const y = centerY + item.orbit * Math.sin(item.angle);

        item.node.style.left = `${x * scale - size / 2}px`;
        item.node.style.top = `${y * scale - size / 2}px`;

        const icon = item.node.querySelector("i");
        if (icon) icon.style.transform = `rotate(${(-item.angle * 180) / Math.PI}deg)`;
      });

      animationId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      timers.forEach(clearTimeout);
      cleanups.forEach((cleanup) => cleanup());
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="role-tag">{text.roleTag}</div>

        <div className="hero-center" ref={heroCenterRef}>
          <svg className="orbit-svg" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="260" cy="260" r="155" stroke="rgba(0,229,204,0.07)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="260" cy="260" r="220" stroke="rgba(139,92,246,0.05)" strokeWidth="1" strokeDasharray="3 10" />
            <circle cx="260" cy="105" r="3" fill="rgba(0,229,204,0.4)" />
            <circle cx="415" cy="260" r="3" fill="rgba(0,229,204,0.3)" />
            <circle cx="260" cy="415" r="3" fill="rgba(0,229,204,0.4)" />
            <circle cx="105" cy="260" r="3" fill="rgba(0,229,204,0.3)" />
          </svg>

          {orbitSkills.map((skill) => (
            <div
              className="skill-node"
              data-orbit={skill.orbit}
              data-angle={skill.angle}
              data-speed={skill.speed}
              key={skill.name}
            >
              <i className={skill.icon} style={{ color: skill.color }}></i>
              <span className="tooltip">{skill.name}</span>
            </div>
          ))}

          <div className="photo-ring">
            <div className="photo-circle">
              <div className="photo-placeholder">
                <img className="photo" src={me} alt="Abdulrahman Rafat" />
              </div>
            </div>
          </div>
        </div>

        <div className="social-strip">
          {socialLinks.map((link) => (
            <a href={link.url} target="_blank" rel="noreferrer" className="social-icon" aria-label={link.name} key={link.name}>
              <SocialIcon name={link.name} />
            </a>
          ))}
        </div>

        <h1 className="hero-name">Abdulrahman <em>Rafat</em></h1>
        <p className="hero-subtitle">{text.heroSubtitle}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">{text.viewWork}</a>
          <a href={cvLink} target="_blank" rel="noreferrer" className="btn-outline">{text.downloadCv}</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
