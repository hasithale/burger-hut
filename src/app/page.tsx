import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationsSection from "@/components/sections/LocationsSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burger Hut Makola - Good Food, Great Taste, Good Mood",
  description:
    "Experience the ultimate flavor explosion with our locally sourced, handcrafted burgers in Makola, Sri Lanka. Order via WhatsApp or visit us today.",
  keywords: "burger, Makola, Sri Lanka, street food, burgers, fast food",
};

export default function SinglePage() {
  return (
    <div style={{ backgroundColor: "#131313", color: "#e5e2e1" }}>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <LocationsSection />
        <ContactSection />
      </main>

      <Footer />
      <BottomNav />

      {/* Desktop floating order button */}
      <Link
        href="https://wa.me/94772019488"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 items-center gap-2 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform z-40"
        style={{
          backgroundColor: "#feb700",
          color: "#412d00",
          padding: "16px 24px",
          textDecoration: "none",
          fontWeight: 700,
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "13px",
          letterSpacing: "0.08em",
        }}
      >
        <span className="material-symbols-outlined">shopping_basket</span>
        Start Order
      </Link>
    </div>
  );
}
