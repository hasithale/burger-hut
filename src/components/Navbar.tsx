"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md shadow-lg"
        style={{
          backgroundColor: "rgba(19,19,19,0.95)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="flex justify-between items-center py-4"
          style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="hover:scale-105 transition-transform duration-200 shrink-0"
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

          {/* Right side: Order Now + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Order Now CTA — hidden on very small screens, shown from sm up */}
            <Link
              href="https://wa.me/94772019488"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block hover:scale-105 active:opacity-80 active:scale-95 transition-all shadow-lg"
              style={{
                backgroundColor: "#e31837",
                color: "#fffaf9",
                padding: "8px 20px",
                borderRadius: "9999px",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textDecoration: "none",
              }}
            >
              Order Now
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg border transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: menuOpen
                  ? "rgba(227,24,55,0.15)"
                  : "rgba(255,255,255,0.05)",
                borderColor: menuOpen
                  ? "rgba(227,24,55,0.3)"
                  : "rgba(255,255,255,0.1)",
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {/* Animated bars */}
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: menuOpen ? "#e31837" : "#e5e2e1",
                  transform: menuOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: menuOpen ? "#e31837" : "#e5e2e1",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: menuOpen ? "#e31837" : "#e5e2e1",
                  transform: menuOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col"
        style={{
          width: "280px",
          backgroundColor: "#0e0e0e",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-8px 0 32px rgba(0,0,0,0.6)",
        }}
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "1.1rem",
              color: "#ffb3b1",
              letterSpacing: "0.05em",
            }}
          >
            Burger Hut
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors active:scale-90"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#e6bdbb",
            }}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              close
            </span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 flex-1 gap-1">
          {navLinks.map(({ href, label }, i) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: isActive ? "#ffba20" : "#e6bdbb",
                  backgroundColor: isActive
                    ? "rgba(255,186,32,0.08)"
                    : "transparent",
                  borderLeft: isActive
                    ? "3px solid #ffba20"
                    : "3px solid transparent",
                  transition: "all 0.15s ease",
                  // Staggered reveal
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "18px",
                    color: isActive ? "#ffba20" : "#ad8886",
                  }}
                >
                  {href === "/"
                    ? "home"
                    : href === "/about"
                    ? "info"
                    : href === "/menu"
                    ? "restaurant_menu"
                    : href === "/gallery"
                    ? "photo_library"
                    : href === "/locations"
                    ? "location_on"
                    : "mail"}
                </span>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div
          className="px-4 pb-8 pt-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* WhatsApp Order */}
          <Link
            href="https://wa.me/94772019488"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl mb-3 transition-transform active:scale-95"
            style={{
              backgroundColor: "#008544",
              color: "#eeffed",
              textDecoration: "none",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              chat
            </span>
            Order via WhatsApp
          </Link>
          {/* Call */}
          <Link
            href="tel:+94772019488"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e6bdbb",
              textDecoration: "none",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              call
            </span>
            Call Us
          </Link>
        </div>
      </div>
    </>
  );
}
