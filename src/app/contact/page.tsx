"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div
      style={{ backgroundColor: "#131313", color: "#e5e2e1", minHeight: "100vh" }}
    >
      <Navbar />

      <main style={{ minHeight: "100vh" }}>
        {/* Hero */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ height: "512px" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmyeRN_PWmBgrVr6obaOtMsL_wOz50wfyXL4OGlg4IVfakEbnNOAAnMY58G7g7brsU6DXWX_F6n7X44vuSQjElJWH3s4YE9z91qe8DtTckdf-ily--RNnTcxRFzPgrV4kMBG9Ni3dwf7mwRp6HBt0eGbUWrVS8XbX-wlmmPTPGCU4N6ElB6P-wI3RGbESV91s_PeITtTpHUKdxrR858b6ryll0w8IPs4HZ-oVitAtC2IcvRprkchKXWQWxC9oICHjmALohAHfLplE9"
              alt="Contact Hero"
              className="w-full h-full object-cover"
              style={{ opacity: 0.6 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #131313 0%, transparent 50%)",
              }}
            />
          </div>
          <div className="relative z-10 text-center" style={{ padding: "0 1.25rem" }}>
            <h1
              className="uppercase tracking-tighter mb-2"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(40px, 8vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "white",
              }}
            >
              Get In Touch
            </h1>
            <p
              className="max-w-lg mx-auto"
              style={{
                fontFamily: "Be Vietnam Pro, sans-serif",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#ffba20",
              }}
            >
              Good Food, Great Taste, Good Mood. We&apos;re here to serve you the
              best burgers in Makola.
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section
          className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 max-w-7xl mx-auto"
          style={{ padding: "3rem 1.25rem" }}
        >
          {/* Contact Info Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Direct Channels */}
            <div
              className="p-8 rounded-xl border shadow-2xl"
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <h2
                className="chalkboard-underline inline-block mb-2"
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "0.03em",
                  color: "#ffb3b1",
                }}
              >
                Direct Channels
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: "Be Vietnam Pro, sans-serif",
                  fontSize: "14px",
                  color: "#e6bdbb",
                }}
              >
                Reach out to us for orders, deliveries, or quick questions.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <Link
                  href="https://wa.me/94772019488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:opacity-90"
                  style={{
                    backgroundColor: "rgba(0,133,68,0.1)",
                    borderColor: "rgba(0,133,68,0.2)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="p-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#008544", color: "#eeffed" }}
                  >
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                    <span
                      className="block"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#61de8a",
                      }}
                    >
                      WhatsApp Order
                    </span>
                    <span
                      className="block"
                      style={{
                        fontFamily: "Be Vietnam Pro, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#e5e2e1",
                      }}
                    >
                      077 201 9488
                    </span>
                  </div>
                  <span
                    className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#61de8a" }}
                  >
                    arrow_forward
                  </span>
                </Link>

                {/* Call */}
                <Link
                  href="tel:+94772019488"
                  className="group flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:opacity-90"
                  style={{
                    backgroundColor: "rgba(227,24,55,0.1)",
                    borderColor: "rgba(227,24,55,0.2)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="p-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#e31837", color: "#fffaf9" }}
                  >
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span
                      className="block"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#ffb3b1",
                      }}
                    >
                      Call Us Directly
                    </span>
                    <span
                      className="block"
                      style={{
                        fontFamily: "Be Vietnam Pro, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#e5e2e1",
                      }}
                    >
                      077 201 9488
                    </span>
                  </div>
                  <span
                    className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#ffb3b1" }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3
                  className="mb-4 uppercase"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#ffdb9d",
                  }}
                >
                  Follow the Vibe
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: "social_leaderboard", label: "Facebook" },
                    { icon: "camera", label: "Instagram" },
                    { icon: "videocam", label: "TikTok" },
                  ].map(({ icon, label }) => (
                    <Link
                      key={label}
                      href="#"
                      title={label}
                      className="p-3 rounded-lg border hover:scale-110 transition-all"
                      style={{
                        backgroundColor: "#201f1f",
                        borderColor: "rgba(255,255,255,0.05)",
                        color: "#e6bdbb",
                        textDecoration: "none",
                      }}
                    >
                      <span className="material-symbols-outlined">{icon}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-xl overflow-hidden border shadow-2xl flex-1 relative"
              style={{
                minHeight: "300px",
                borderColor: "rgba(255,255,255,0.05)",
                backgroundColor: "#201f1f",
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB49nBCmgwBuXe8pIynVg49fo7Yqnjj6A6hUOM_7p-gcwuPVWOppJFkRAm_bdRQ8TmwWuGn46u6-F6wUV4NbnY_R8mdz99gEexr0Vea8-PE_QZKCBxYCt4ZrbkXQJy1lLH1as6uUjChyV8KOBQ5wMZlEkMGiL4AUa2HK8gCy9x1c5tiyifg7nXEcoSynwGdEzpb8_uco6O65hCn3EN-5FOu0ZtYEfkyPn97iMAQ2L1amzffbkQC7UQI5V2VgDE20pRr1FGFeBZzytEk"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-4 left-4 right-4 p-4 rounded-lg border"
                style={{
                  backgroundColor: "rgba(19,19,19,0.8)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined" style={{ color: "#ffdb9d" }}>
                    location_on
                  </span>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#e5e2e1",
                    }}
                  >
                    Find Us At
                  </span>
                </div>
                <p style={{ color: "#e6bdbb", fontSize: "14px" }}>
                  Makola Junction, Main Entrance, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:col-span-7">
            <div
              className="relative overflow-hidden rounded-xl border shadow-2xl h-full"
              style={{
                backgroundColor: "#201f1f",
                borderColor: "rgba(255,255,255,0.05)",
                padding: "2rem 3rem",
              }}
            >
              <div className="relative z-10">
                <h2
                  className="uppercase mb-2"
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "40px",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: "0.03em",
                    color: "#ffdb9d",
                  }}
                >
                  Drop a Message
                </h2>
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "Be Vietnam Pro, sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: "#e6bdbb",
                  }}
                >
                  Whether it&apos;s a catering request or just to say thanks,
                  we&apos;d love to hear from you.
                </p>

                {submitted && (
                  <div
                    className="mb-6 p-4 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(0,133,68,0.15)",
                      borderColor: "rgba(0,133,68,0.3)",
                      color: "#61de8a",
                      fontFamily: "Be Vietnam Pro, sans-serif",
                    }}
                  >
                    ✅ Message sent! We&apos;ll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block mb-2"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#e6bdbb",
                        }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                        className="w-full p-4 rounded-t-lg transition-colors focus:outline-none"
                        style={{
                          backgroundColor: "#353534",
                          border: "none",
                          borderBottom: "2px solid #5d3f3e",
                          color: "#e5e2e1",
                          fontFamily: "Be Vietnam Pro, sans-serif",
                          fontSize: "16px",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "#ffb3b1")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "#5d3f3e")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#e6bdbb",
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                        className="w-full p-4 rounded-t-lg transition-colors focus:outline-none"
                        style={{
                          backgroundColor: "#353534",
                          border: "none",
                          borderBottom: "2px solid #5d3f3e",
                          color: "#e5e2e1",
                          fontFamily: "Be Vietnam Pro, sans-serif",
                          fontSize: "16px",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "#ffb3b1")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "#5d3f3e")
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#e6bdbb",
                      }}
                    >
                      What&apos;s on your mind?
                    </label>
                    <textarea
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your experience or ask about our special combos..."
                      required
                      className="w-full p-4 rounded-t-lg transition-colors focus:outline-none resize-none"
                      style={{
                        backgroundColor: "#353534",
                        border: "none",
                        borderBottom: "2px solid #5d3f3e",
                        color: "#e5e2e1",
                        fontFamily: "Be Vietnam Pro, sans-serif",
                        fontSize: "16px",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#ffb3b1")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "#5d3f3e")
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="hover:scale-105 active:scale-95 transition-all uppercase tracking-wider"
                    style={{
                      backgroundColor: "#e31837",
                      color: "#fffaf9",
                      padding: "16px 48px",
                      borderRadius: "0.5rem",
                      fontFamily: "Anton, sans-serif",
                      fontSize: "24px",
                      fontWeight: 400,
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 4px 0 0 #92001d",
                      display: "inline-block",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
