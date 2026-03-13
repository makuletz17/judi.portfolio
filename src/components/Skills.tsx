export default function Skills() {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "PHP", level: 80 },
    { name: "React.JS", level: 30 },
    { name: "Laravel", level: 30 },
    { name: "Database Management", level: 90 },
    { name: "Network Management", level: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span className="font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded h-3">
                <div
                  className="bg-blue-500 h-3 rounded"
                  style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
