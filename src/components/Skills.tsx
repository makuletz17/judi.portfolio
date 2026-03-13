import { skills } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SkillBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div
    className="flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105 cursor-default"
    style={{
      background: "var(--accent-glow)",
      border: "1px solid var(--accent)",
      color: "var(--accent)",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "0.75rem",
    }}>
    <img src={icon} alt={name} className="w-4 h-4 object-contain" />
    <span>{name}</span>
  </div>
);

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-reveal">
          <div className="mb-14">
            <p
              className="text-sm font-medium mb-2"
              style={{
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
              skills
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <div
                key={group.category}
                className="card-hover p-6 rounded-xl"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{group.icon}</span>
                  <h3
                    className="font-semibold text-base"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillBadge
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
