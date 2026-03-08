"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Services", "Why Us", "Case Studies", "Team"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M16 2L30 28H2L16 2Z" fill={scrolled ? "#0f172a" : "white"} />
              <path d="M16 10L24 28H8L16 10Z" fill="#92740a" />
            </svg>
          </div>
          <span className={`font-[family-name:var(--font-lora)] font-semibold text-lg tracking-tight transition-colors duration-200 ${scrolled ? "text-[#0f172a]" : "text-white"}`}>
            Meridian
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                scrolled
                  ? "text-slate-600 hover:text-[#0f172a]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm font-semibold px-5 py-2.5 bg-[#0f172a] text-white rounded-sm hover:bg-[#1e293b] transition-colors duration-200 tracking-wide"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-[#0f172a] block transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-px bg-[#0f172a] block transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-[#0f172a] block transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-slate-700 hover:text-[#0f172a] py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 text-sm font-semibold px-5 py-3 bg-[#0f172a] text-white text-center rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}