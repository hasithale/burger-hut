"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md shadow-lg transition-transform duration-200"
      style={{
        backgroundColor: "rgba(19,19,19,0.95)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="flex justify-between items-center py-4 mx-auto"
        style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-200"
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#ffb3b1",
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          Burger Hut Makola
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="hover:scale-105 transition-all duration-200"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  color: isActive ? "#ffba20" : "#e6bdbb",
                  borderBottom: isActive ? "2px solid #ffba20" : "none",
                  paddingBottom: isActive ? "4px" : "0",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Order Now CTA */}
        <Link
          href="https://wa.me/94772019488"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 active:opacity-80 active:scale-95 transition-all shadow-lg"
          style={{
            backgroundColor: "#e31837",
            color: "#fffaf9",
            padding: "8px 24px",
            borderRadius: "9999px",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
