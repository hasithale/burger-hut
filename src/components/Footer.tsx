import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#0e0e0e",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-6 py-12"
        style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "40px",
              color: "#ffb3b1",
              lineHeight: 1.2,
            }}
          >
            Burger Hut
          </span>
          <p
            className="mt-2 text-center md:text-left"
            style={{
              fontFamily: "Be Vietnam Pro, sans-serif",
              fontSize: "14px",
              color: "#e6bdbb",
            }}
          >
            © 2024 Burger Hut Makola. Good Food, Great Taste, Good Mood.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {["Privacy Policy", "Terms of Service", "FAQ"].map((label) => (
            <Link
              key={label}
              href="#"
              className="transition-colors hover:text-[#ffb3b1]"
              style={{
                fontFamily: "Be Vietnam Pro, sans-serif",
                fontSize: "14px",
                color: "#e6bdbb",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link
            href="#"
            className="flex items-center justify-center rounded-full transition-colors hover:text-[#ffb3b1]"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#201f1f",
              color: "#e5e2e1",
              textDecoration: "none",
            }}
            title="Facebook"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              social_leaderboard
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center rounded-full transition-colors hover:text-[#ffb3b1]"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#201f1f",
              color: "#e5e2e1",
              textDecoration: "none",
            }}
            title="Instagram"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              camera_alt
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
