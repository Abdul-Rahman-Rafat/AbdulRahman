import { RiRocket2Line } from "@remixicon/react";

function RocketNavigator({ sections, onScrollToSection }) {
  return (
    <div className="rocket-nav" aria-label="Section navigation">
      {sections.map((section, index) => (
        <button
          className="rocket-nav-btn"
          type="button"
          onClick={() => onScrollToSection(section.ref)}
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
