import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Burger Hut Makola",
  description:
    "Find Burger Hut Makola at Makola Junction, Sri Lanka. Open daily 10 AM – 10 PM. Free parking available.",
};

export default function LocationsPage() {
  return (
    <div
      style={{ backgroundColor: "#131313", color: "#e5e2e1", minHeight: "100vh" }}
    >
      <Navbar />

      <main className="relative z-10">
        {/* Hero */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ height: "512px" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 10 }}
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAms65K3OcNxiVp3wDwGUZc9hYtIhMdG4YbcWCHg9xk2YhBXHhHh1GewYm4ljGsw7QLzT-bl8j5ggVMm8cWSQQKGXBybszhMllEk_chHtE0EjPP_xvcE8alA3OL5TiDCwZVVVhHsLwIDPl0esR9NRCqEF6iHMp_JtTJcd7AgpYWata4wIF4MkJylv9iOip-Wk1KvsXo9xniFkcDazQV1MOo_r9jePPrEmQ8Dv6f7dvfyAL1dkk64qq6bPlf7_BueXyAqhQU3eN2MrJG"
            alt="Burger Hut Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="relative w-full"
            style={{ padding: "0 1.25rem", zIndex: 20 }}
          >
            <span
              className="block mb-2 tracking-widest"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#ffba20",
              }}
            >
              FIND US
            </span>
            <h1
              className="uppercase"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "0.03em",
                color: "#e5e2e1",
              }}
            >
              Our Makola Branch
            </h1>
            <div
              style={{
                height: "4px",
                width: "96px",
                backgroundColor: "#e31837",
                marginTop: "16px",
              }}
            />
          </div>
        </section>

        {/* Content Grid */}
        <section style={{ padding: "3rem 1.25rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            {/* Details column */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Address & Hours Card */}
              <div
                className="relative overflow-hidden group rounded-xl border p-8 shadow-xl"
                style={{
                  backgroundColor: "#201f1f",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* Decorative circle */}
                <div
                  className="absolute top-0 right-0 rounded-full group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                  style={{
                    width: "128px",
                    height: "128px",
                    backgroundColor: "rgba(254,183,0,0.05)",
                    marginRight: "-64px",
                    marginTop: "-64px",
                  }}
                />
                {/* Address */}
                <div className="flex items-start gap-4 mb-8">
                  <div
                    className="p-3 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(227,24,55,0.2)",
                      borderColor: "rgba(227,24,55,0.3)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: "#e31837",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      location_on
                    </span>
                  </div>
                  <div>
                    <h2
                      className="uppercase mb-1"
                      style={{
                        fontFamily: "Be Vietnam Pro, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#e5e2e1",
                      }}
                    >
                      Address
                    </h2>
                    <p style={{ color: "#e6bdbb", lineHeight: 1.6 }}>
                      Makola, Sri Lanka
                      <br />
                      Main Junction Area
                    </p>
                  </div>
                </div>
                {/* Hours */}
                <div className="flex items-start gap-4 mb-8">
                  <div
                    className="p-3 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(255,186,32,0.2)",
                      borderColor: "rgba(255,186,32,0.3)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: "#ffba20",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      schedule
                    </span>
                  </div>
                  <div>
                    <h2
                      className="uppercase mb-1"
                      style={{
                        fontFamily: "Be Vietnam Pro, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#e5e2e1",
                      }}
                    >
                      Operating Hours
                    </h2>
                    <p style={{ color: "#e6bdbb", lineHeight: 1.6 }}>
                      Everyday
                      <br />
                      10:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <Link
                    href="tel:+94772019488"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-lg transition-all"
                    style={{
                      backgroundColor: "#e31837",
                      color: "#fffaf9",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                      boxShadow: "0 4px 0 0 #92001d",
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                    >
                      call
                    </span>
                    Call Us
                  </Link>
                  <Link
                    href="https://maps.google.com/?q=Makola+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-lg border hover:opacity-80 transition-colors"
                    style={{
                      backgroundColor: "#353534",
                      color: "#e5e2e1",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                    >
                      directions
                    </span>
                    Get Directions
                  </Link>
                </div>
              </div>

              {/* Bento mini highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "delivery_dining", label: "Home Delivery", color: "#ffba20" },
                  { icon: "local_parking", label: "Free Parking", color: "#e31837" },
                ].map(({ icon, label, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center justify-center rounded-xl border p-6"
                    style={{
                      backgroundColor: "#201f1f",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined mb-2"
                      style={{ color, fontSize: "32px" }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#e6bdbb",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Container */}
            <div
              className="md:col-span-7 relative rounded-xl overflow-hidden border shadow-2xl"
              style={{
                height: "500px",
                minHeight: "500px",
                borderColor: "rgba(255,255,255,0.1)",
                backgroundColor: "#201f1f",
              }}
            >
              <div className="absolute inset-0 z-10 pointer-events-none map-gradient" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzzohycqIbAp-_NmF6PC27z4WFfgNZdbAxKWVVvZORQPpEhGUgAHpHMqayxwV93YChOCTdlcBpdiWkgZ5dEsh7MIl7BpGKbxHdVY5zPaO89ekol4233OiCb1QzJe3NUq4lJgd1A-iVcmeClSjCdGzawcVOjBu1qwDYeHk1ujWVikY_HbrIu2iPCJ-kGQyRBRGnes2E9s4kvy9MkAaELwmevx4S71RYtC4T_dV79QabsR5fsDHCSidHkUQEYbvzX1CdUt1ckPP51RYh"
                alt="Makola Location Map"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(1) brightness(0.5)", opacity: 0.8 }}
              />
              {/* Map pin */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div
                  className="rounded-full p-4 animate-pulse"
                  style={{
                    backgroundColor: "#e31837",
                    boxShadow: "0 0 20px rgba(227,24,55,0.6)",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-white"
                    style={{
                      fontSize: "36px",
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    location_on
                  </span>
                </div>
              </div>
              {/* Info Chip */}
              <div
                className="absolute bottom-6 left-6 z-30 p-4 rounded-lg border max-w-48"
                style={{
                  backgroundColor: "rgba(19,19,19,0.8)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="block mb-1"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#ffba20",
                  }}
                >
                  INTERACTIVE MAP
                </span>
                <p
                  style={{
                    fontFamily: "Be Vietnam Pro, sans-serif",
                    fontSize: "14px",
                    color: "#e6bdbb",
                    lineHeight: 1.5,
                  }}
                >
                  Explore the neighborhood and find the quickest route to us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section
          className="border-y py-12"
          style={{
            backgroundColor: "#1c1b1b",
            borderColor: "rgba(255,255,255,0.05)",
            padding: "3rem 1.25rem",
          }}
        >
          <div className="text-center">
            <h3
              className="uppercase mb-6"
              style={{
                fontFamily: "Be Vietnam Pro, sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#e6bdbb",
              }}
            >
              Trusted by Local Foodies
            </h3>
            <div
              className="flex flex-wrap justify-center gap-12"
              style={{ opacity: 0.4, filter: "grayscale(1) contrast(1.25)" }}
            >
              {["FOODPANDA", "PICKME", "MAKOLA HUB", "TASTY.LK"].map((brand) => (
                <span
                  key={brand}
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "24px",
                    color: "#e5e2e1",
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
