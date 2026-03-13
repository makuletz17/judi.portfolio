import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">{project.title}</h3>

            <p className="text-gray-600 mb-2">{project.description}</p>

            <div className="text-sm text-blue-500">
              {project.tech.join(" | ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
