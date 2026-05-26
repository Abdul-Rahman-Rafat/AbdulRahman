import { RiRocket2Line } from "@remixicon/react";

function RocketNavigator({ sections, activeSection, onScrollToSection }) {
  return (
    <div className="rocket-nav" aria-label="Section navigation">
      {sections.map((section, index) => (
        <button
          className={`rocket-nav-btn ${activeSection === section.id ? "active" : ""}`}
          type="button"
          onClick={() => onScrollToSection(section.ref, section.id)}
          aria-label={`Go to ${section.label}`}
          key={section.label}
        >
          {index === 0 ? <RiRocket2Line size={18} /> : String(index).padStart(2, "0")}
        </button>
      ))}
    </div>
  );
}

export default RocketNavigator;
