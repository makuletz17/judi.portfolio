import type { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

interface NavbarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-main border-b border-custom backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "'Syne', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-xl tracking-tight">
          <span className="text-accent">&lt;</span>
          <span className="text-main">Judi</span>
          <span className="text-accent">/&gt;</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-muted-custom hover:text-accent transition-colors duration-200 relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 rounded-full border border-custom bg-card-custom hover:border-accent transition-all duration-200"
            aria-label="Toggle theme">
            {dark ? (
              <Sun size={16} className="text-accent" />
            ) : (
              <Moon size={16} className="text-accent" />
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={20} className="text-accent" />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card-custom border-t border-custom px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm font-medium text-muted-custom hover:text-accent transition-colors">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
