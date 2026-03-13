import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700 mb-6">
          Feel free to reach out to me via email or phone. I’m available for
          freelance or full-time work.
        </p>
        <div className="space-y-2 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${profile.email}`} className="text-blue-500">
              {profile.email}
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +639303930875
          </p>
          <p>
            <strong>Location:</strong> {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
