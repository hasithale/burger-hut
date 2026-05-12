"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["home", "about", "menu", "gallery", "locations", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || menuOpen ? "rgba(19,19,19,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.05)" : "none",
        padding: scrolled ? "0.5rem 0" : "0.75rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          style={{ textDecoration: "none" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ backgroundColor: "#e31837" }}
          >
            <span className="material-symbols-outlined text-white" style={{ fontSize: "24px" }}>
              restaurant
            </span>
          </div>
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "24px",
              letterSpacing: "0.02em",
              color: "#fffaf9",
            }}
          >
            BURGER <span style={{ color: "#e31837" }}>HUT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className="relative py-2 transition-colors hover:text-white"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  color: isActive ? "#ffba20" : "#e6bdbb",
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5"
                    style={{ backgroundColor: "#ffba20" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/94772019488"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-bold transition-all active:scale-95 flex items-center gap-2"
            style={{
              backgroundColor: "#feb700",
              color: "#412d00",
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(254,183,0,0.2)",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              shopping_basket
            </span>
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#e6bdbb" }}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-[#131313] border-b border-white/5 ${
          menuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textDecoration: "none",
                color: activeSection === href.replace("#", "") ? "#ffba20" : "#e6bdbb",
              }}
            >
              {label}
            </a>
          ))}
          <Link
            href="https://wa.me/94772019488"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 rounded-xl font-bold flex items-center gap-2"
            style={{ backgroundColor: "#008544", color: "white", textDecoration: "none" }}
          >
            <span className="material-symbols-outlined">chat</span>
            Order WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}
