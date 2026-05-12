"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  }

  const inputStyle = {
    width: "100%", padding: "16px",
    borderRadius: "8px 8px 0 0",
    border: "none", borderBottom: "2px solid #5d3f3e",
    backgroundColor: "#353534", color: "#e5e2e1",
    fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "16px",
    outline: "none",
  };

  return (
    <section id="contact" style={{ scrollMarginTop: "72px", backgroundColor: "#0e0e0e", padding: "4rem 1.25rem" }}>
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffb3b1" }}>SAY HELLO</span>
        <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "0.02em", color: "white" }}>Get In Touch</h2>
        <p className="max-w-lg mx-auto mt-3" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "16px", lineHeight: 1.6, color: "#ffba20" }}>
          Good Food, Great Taste, Good Mood. We&apos;re here to serve you the best burgers in Makola.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="p-8 rounded-xl border shadow-2xl" style={{ backgroundColor: "#2a2a2a", borderColor: "rgba(255,255,255,0.05)" }}>
            <h3 className="mb-2" style={{ fontFamily: "Anton, sans-serif", fontSize: "36px", fontWeight: 400, lineHeight: 1.2, letterSpacing: "0.03em", color: "#ffb3b1" }}>Direct Channels</h3>
            <p className="mb-6" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "14px", color: "#e6bdbb" }}>Reach out to us for orders, deliveries, or quick questions.</p>

            <div className="space-y-4">
              {/* WhatsApp */}
              <Link href="https://wa.me/94772019488" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-lg border hover:opacity-90 transition-all duration-300"
                style={{ backgroundColor: "rgba(0,133,68,0.1)", borderColor: "rgba(0,133,68,0.2)", textDecoration: "none" }}>
                <div className="p-3 rounded-full flex items-center justify-center" style={{ backgroundColor: "#008544", color: "#eeffed" }}>
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <span className="block" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#61de8a" }}>WhatsApp Order</span>
                  <span className="block" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "20px", fontWeight: 700, color: "#e5e2e1" }}>077 201 9488</span>
                </div>
                <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#61de8a" }}>arrow_forward</span>
              </Link>

              {/* Call */}
              <Link href="tel:+94772019488"
                className="group flex items-center gap-4 p-4 rounded-lg border hover:opacity-90 transition-all duration-300"
                style={{ backgroundColor: "rgba(227,24,55,0.1)", borderColor: "rgba(227,24,55,0.2)", textDecoration: "none" }}>
                <div className="p-3 rounded-full flex items-center justify-center" style={{ backgroundColor: "#e31837", color: "#fffaf9" }}>
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <span className="block" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffb3b1" }}>Call Us Directly</span>
                  <span className="block" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "20px", fontWeight: 700, color: "#e5e2e1" }}>077 201 9488</span>
                </div>
                <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#ffb3b1" }}>arrow_forward</span>
              </Link>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h4 className="mb-4 uppercase" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffdb9d" }}>Follow the Vibe</h4>
              <div className="flex gap-4">
                {[{ icon: "social_leaderboard", label: "Facebook" }, { icon: "camera", label: "Instagram" }, { icon: "videocam", label: "TikTok" }].map(({ icon, label }) => (
                  <Link key={label} href="#" title={label}
                    className="p-3 rounded-lg border hover:scale-110 transition-all"
                    style={{ backgroundColor: "#201f1f", borderColor: "rgba(255,255,255,0.05)", color: "#e6bdbb", textDecoration: "none" }}>
                    <span className="material-symbols-outlined">{icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="relative overflow-hidden rounded-xl border shadow-2xl"
            style={{ backgroundColor: "#201f1f", borderColor: "rgba(255,255,255,0.05)", padding: "2rem 3rem" }}>
            <h3 className="uppercase mb-2" style={{ fontFamily: "Anton, sans-serif", fontSize: "36px", fontWeight: 400, lineHeight: 1.2, letterSpacing: "0.03em", color: "#ffdb9d" }}>Drop a Message</h3>
            <p className="mb-8" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "16px", lineHeight: 1.6, color: "#e6bdbb" }}>
              Whether it&apos;s a catering request or just to say thanks, we&apos;d love to hear from you.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg border" style={{ backgroundColor: "rgba(0,133,68,0.15)", borderColor: "rgba(0,133,68,0.3)", color: "#61de8a", fontFamily: "Be Vietnam Pro, sans-serif" }}>
                ✅ Message sent! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#e6bdbb" }}>Your Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" required style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#ffb3b1")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#5d3f3e")} />
                </div>
                <div>
                  <label className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#e6bdbb" }}>Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" required style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#ffb3b1")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#5d3f3e")} />
                </div>
              </div>
              <div>
                <label className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#e6bdbb" }}>What&apos;s on your mind?</label>
                <textarea rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your experience or ask about our special combos..."
                  required style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "#ffb3b1")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "#5d3f3e")} />
              </div>
              <button type="submit"
                className="hover:scale-105 active:scale-95 transition-all uppercase"
                style={{ backgroundColor: "#e31837", color: "#fffaf9", padding: "16px 48px", borderRadius: "0.5rem", fontFamily: "Anton, sans-serif", fontSize: "24px", fontWeight: 400, letterSpacing: "0.05em", border: "none", cursor: "pointer", boxShadow: "0 4px 0 0 #92001d" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
