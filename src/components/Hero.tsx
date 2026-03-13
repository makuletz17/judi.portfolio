import { profile } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>

        <p className="text-xl mb-6">{profile.title}</p>

        <a
          href="/resume.pdf"
          className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
          Download Resume
        </a>
      </div>
    </section>
  );
}
