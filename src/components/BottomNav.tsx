import Link from "next/link";

export default function BottomNav() {
  const items = [
    { href: "tel:+94772019488", icon: "call", label: "Call Us" },
    { href: "https://wa.me/94772019488", icon: "chat", label: "WhatsApp" },
    { href: "#locations", icon: "location_on", label: "Location" },
    { href: "https://www.facebook.com/burgerhutmakola", icon: "thumb_up", label: "Facebook" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full flex justify-around items-center py-2 md:hidden z-50 border-t"
      style={{
        backgroundColor: "#000000",
        borderColor: "rgba(255,255,255,0.1)",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.5)",
      }}
    >
      {items.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          className="flex flex-col items-center gap-1 transition-all active:opacity-80"
          style={{ color: "#e6bdbb", textDecoration: "none" }}
          target={href.startsWith("http") || href.startsWith("tel") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "24px", color: "#ffdb9d" }}>
            {icon}
          </span>
          <span
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}
