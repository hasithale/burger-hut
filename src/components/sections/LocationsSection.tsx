import Link from "next/link";

export default function LocationsSection() {
  return (
    <section id="locations" style={{ scrollMarginTop: "72px", padding: "4rem 0" }}>
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-10">
          <span className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffb3b1" }}>FIND US</span>
          <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "0.02em", color: "#e5e2e1" }}>
            Located in the Heart of Makola
          </h2>
          <div style={{ height: "4px", width: "96px", backgroundColor: "#e31837", marginTop: "16px" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Details column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Address card */}
            <div className="relative overflow-hidden group rounded-xl border p-8 shadow-xl"
              style={{ backgroundColor: "#201f1f", borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="absolute top-0 right-0 rounded-full group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                style={{ width: "128px", height: "128px", backgroundColor: "rgba(254,183,0,0.05)", marginRight: "-64px", marginTop: "-64px" }} />

              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-lg border" style={{ backgroundColor: "rgba(227,24,55,0.2)", borderColor: "rgba(227,24,55,0.3)" }}>
                  <span className="material-symbols-outlined" style={{ color: "#e31837", fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <h3 className="uppercase mb-1" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "20px", fontWeight: 700, color: "#e5e2e1" }}>Address</h3>
                  <p style={{ color: "#e6bdbb", lineHeight: 1.6 }}>Makola, Sri Lanka<br />Main Junction Area</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-lg border" style={{ backgroundColor: "rgba(255,186,32,0.2)", borderColor: "rgba(255,186,32,0.3)" }}>
                  <span className="material-symbols-outlined" style={{ color: "#ffba20", fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <div>
                  <h3 className="uppercase mb-1" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "20px", fontWeight: 700, color: "#e5e2e1" }}>Operating Hours</h3>
                  <p style={{ color: "#e6bdbb", lineHeight: 1.6 }}>Everyday<br />10:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href="tel:+94772019488"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-lg transition-all active:scale-95"
                  style={{ backgroundColor: "#e31837", color: "#fffaf9", fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", boxShadow: "0 4px 0 0 #92001d" }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}>call</span>
                  Call Us
                </Link>
                <Link href="https://maps.google.com/?q=Makola+Sri+Lanka" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-lg border hover:opacity-80 transition-colors"
                  style={{ backgroundColor: "#353534", color: "#e5e2e1", fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", borderColor: "rgba(255,255,255,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}>directions</span>
                  Get Directions
                </Link>
              </div>
            </div>

            {/* Mini highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[{ icon: "delivery_dining", label: "Home Delivery", color: "#ffba20" }, { icon: "local_parking", label: "Free Parking", color: "#e31837" }].map(({ icon, label, color }) => (
                <div key={label} className="flex flex-col items-center text-center justify-center rounded-xl border p-6"
                  style={{ backgroundColor: "#201f1f", borderColor: "rgba(255,255,255,0.1)" }}>
                  <span className="material-symbols-outlined mb-2" style={{ color, fontSize: "32px" }}>{icon}</span>
                  <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#e6bdbb", textTransform: "uppercase" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-7 relative rounded-xl overflow-hidden border shadow-2xl"
            style={{ height: "500px", borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#201f1f" }}>
            <div className="absolute inset-0 z-10 pointer-events-none map-gradient" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzzohycqIbAp-_NmF6PC27z4WFfgNZdbAxKWVVvZORQPpEhGUgAHpHMqayxwV93YChOCTdlcBpdiWkgZ5dEsh7MIl7BpGKbxHdVY5zPaO89ekol4233OiCb1QzJe3NUq4lJgd1A-iVcmeClSjCdGzawcVOjBu1qwDYeHk1ujWVikY_HbrIu2iPCJ-kGQyRBRGnes2E9s4kvy9MkAaELwmevx4S71RYtC4T_dV79QabsR5fsDHCSidHkUQEYbvzX1CdUt1ckPP51RYh"
              alt="Makola Map" className="w-full h-full object-cover"
              style={{ filter: "grayscale(1) brightness(0.5)", opacity: 0.8 }} />
            {/* Pin */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="rounded-full p-4 animate-pulse" style={{ backgroundColor: "#e31837", boxShadow: "0 0 20px rgba(227,24,55,0.6)" }}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
            {/* Info chip */}
            <div className="absolute bottom-6 left-6 z-30 p-4 rounded-lg border max-w-48"
              style={{ backgroundColor: "rgba(19,19,19,0.8)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.1)" }}>
              <span className="block mb-1" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffba20" }}>FIND US</span>
              <p style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "14px", color: "#e6bdbb", lineHeight: 1.5 }}>Makola Junction, Main Entrance, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
