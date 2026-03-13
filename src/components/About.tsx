import { profile } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg">
          Hi, I’m {profile.name}. I am a self-taught Web Developer and Systems
          Administrator with over 3 years of experience building web
          applications and managing IT systems. I specialize in PHP, MySQL,
          React, and automating workflows while ensuring secure, reliable, and
          scalable technology solutions.
        </p>
      </div>
    </section>
  );
}
