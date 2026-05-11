import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burger Hut Makola - Good Food, Great Taste, Good Mood",
  description:
    "Experience the ultimate flavor explosion with our locally sourced, handcrafted burgers. Visit us in Makola, Sri Lanka.",
};

const menuHighlights = [
  {
    name: "Hut Cheese Burger",
    desc: "Our flagship double-patty beef burger with triple cheese and secret house sauce.",
    price: "Rs. 950",
    badge: "Best Value",
    badgeBg: "#feb700",
    badgeText: "#412d00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMpZKTTRYmnuTr6mFy3dkPK1HRoJ7ykXU5ebk3raR5bl5UMvDGGqU811e-ZaJfcPWi56NT7eDRIm1jxIvGU0TPyaRugyK7LjFAsfzttz3ZWhqejqV2iUIBLoiMlJvp8NtlZ9dNLZvCjIyYJUWEzqp_PHZBKTq5kH693EE5DPbXTa5t_kQ-zLsu3_7_ZiwgIR0r503FC3ruspzbnYPwxx_89MMprzLmSpOyI2t6OX2-Cj5qDeUHJR3iCOoPENiGyLSELQcj56gpPa1C",
    alt: "Hut Cheese Burger",
  },
  {
    name: "Crispy Chicken Burger",
    desc: "Buttermilk fried chicken breast, spicy slaw, and honey mustard glaze.",
    price: "Rs. 850",
    badge: "New",
    badgeBg: "#008544",
    badgeText: "#eeffed",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdw4w5q29uC1GsTrbYJsSBpGVVbSwpmoQaIoThy1KXlS0mZrK1tCXK9fYo6TwxbsSpwVxDzeD8xHT7gWRVFrwberAyFF6eGH5ySdHKmZ4DJFq9BMcLuQgmM9YwVTF_O6ZOTj54lmvn2SBWAA2xIQibSf9o5lJWM-qZCjIvh3KCkTQBw1GJ1KgrYer6gLz2p8VPvxJSYHP-QAadDZTyfwuvyPyVXYDmZ1Xs7abCMq29K-Ua2zEI5fG-BD3-GL-LID_eZnjUa4NNfh9",
    alt: "Crispy Chicken Burger",
  },
  {
    name: "Club Sandwich",
    desc: "Triple-decker toasted sandwich with grilled chicken, egg, and fresh garden veggies.",
    price: "Rs. 750",
    badge: null,
    badgeBg: "",
    badgeText: "",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrIjAC_Pt26udijpExaG8tmR6euMdwomhQFYAqlBaD1laE6gvn8JT1frVe-dyhtBI77WIM2o7r04dkyTMpJb462L5LcBdcbjYB2S8h4skwKDNrTpHtIVLlftxLg6gcWoFBYcrG4_S1c5O91-WfBegIslIFP-C9L2o7buTpM8IgM_93KIeeIoc6zHiCSYog-DgjnrmlOMVaAu-0bZaRcZjpOAnuv-b7lGg0EM--rPyihTaaul-z4EfKIpBhNunLmwQJM8MDXpryrTuM",
    alt: "Club Sandwich",
  },
];

const valuePropItems = [
  {
    icon: "eco",
    title: "Fresh Ingredients",
    desc: "Handpicked daily from local farmers for peak flavor.",
    color: "#ffb3b1",
    bg: "rgba(255,179,177,0.1)",
  },
  {
    icon: "local_bar",
    title: "Tasty Drinks",
    desc: "Signature mocktails and chilled beverages to pair.",
    color: "#ffba20",
    bg: "rgba(255,186,32,0.1)",
  },
  {
    icon: "speed",
    title: "Fast Service",
    desc: "Quick turnaround without compromising on quality.",
    color: "#61de8a",
    bg: "rgba(97,222,138,0.1)",
  },
  {
    icon: "moped",
    title: "Fast Delivery",
    desc: "Hot and fresh delivered right to your doorstep.",
    color: "#e31837",
    bg: "rgba(227,24,55,0.1)",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#131313", color: "#e5e2e1", minHeight: "100vh" }}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ height: "670px" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDaFZWbjIQa3lh73HKc8f6t8DGjeium5lhO_CV8vq0w9JM2eX9jcI6Wh7CXGUcFLu_yj-E1IgpfEoO1zZ01xVcZyQPu67pZd8ufTEXce7d-1XAldHKwezSolg_RFyAjDs9jE0NswWCIja-bh4NyA_s79jWD9XmsoYrjmBfY1_uoDnvZ2izvg6igJS87AaKVmOssu8_iI9ugoxKhvj5JDg4kykQ8IE4_J_jTbHShNncZ1Ruy5ZRzmNrTsNj6nN0nZkKzn8WHtQtF9Vf"
              alt="Gourmet Burger"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>

          <div className="relative z-10 w-full max-w-4xl" style={{ padding: "0 1.25rem" }}>
            <p
              className="flex items-center gap-2 mb-2"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#ffba20",
              }}
            >
              <span
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "#ffba20",
                  display: "inline-block",
                }}
              />
              MAKOLA&apos;S FINEST
            </p>

            <h1
              className="text-shadow-sm mb-6"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(32px, 6vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "#fffaf9",
              }}
            >
              Delicious Burgers <br className="hidden md:block" />
              Made Fresh
            </h1>

            <p
              className="mb-6 max-w-lg"
              style={{
                fontFamily: "Be Vietnam Pro, sans-serif",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#e6bdbb",
              }}
            >
              Experience the ultimate flavor explosion with our locally sourced,
              handcrafted burgers. Every bite is a testament to our passion for
              premium ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/94772019488"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95 shadow-lg"
                style={{
                  backgroundColor: "#008544",
                  color: "#eeffed",
                  padding: "16px 32px",
                  borderRadius: "0.5rem",
                  fontFamily: "Be Vietnam Pro, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <span className="material-symbols-outlined">chat</span>
                Order via WhatsApp
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 hover:opacity-80 transition-colors"
                style={{
                  border: "2px solid #ffb3b1",
                  color: "#ffb3b1",
                  padding: "16px 32px",
                  borderRadius: "0.5rem",
                  fontFamily: "Be Vietnam Pro, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Operating Hours Banner */}
        <section
          className="py-3 overflow-hidden"
          style={{ backgroundColor: "#feb700" }}
        >
          <div
            className="flex items-center animate-marquee whitespace-nowrap"
            style={{ gap: "3rem" }}
          >
            {[1, 2].map((key) => (
              <div key={key} className="flex items-center gap-12 shrink-0">
                <div
                  className="flex items-center gap-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#412d00",
                    padding: "0 16px",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#412d00" }}>
                    schedule
                  </span>
                  OPEN DAILY 10:00 AM – 10:00 PM
                </div>
                <div
                  className="flex items-center gap-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#412d00",
                    padding: "0 16px",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#412d00" }}>
                    restaurant
                  </span>
                  FRESHLY GRILLED ON ORDER
                </div>
                <div
                  className="flex items-center gap-4"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#412d00",
                    padding: "0 16px",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: "#412d00" }}>
                    location_on
                  </span>
                  FIND US IN MAKOLA, SRI LANKA
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Propositions */}
        <section style={{ padding: "3rem 1.25rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {valuePropItems.map(({ icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center transition-colors rounded-xl p-8 border"
                style={{
                  backgroundColor: "#2a2a2a",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="rounded-full p-4 mb-4"
                  style={{ backgroundColor: bg }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color, fontSize: "36px" }}
                  >
                    {icon}
                  </span>
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "Be Vietnam Pro, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#e5e2e1",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "Be Vietnam Pro, sans-serif",
                    fontSize: "14px",
                    color: "#e6bdbb",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Highlights */}
        <section
          id="menu"
          style={{ padding: "3rem 1.25rem", backgroundColor: "#0e0e0e" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
            <div>
              <span
                className="block mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#ffb3b1",
                  borderLeft: "4px solid #ffb3b1",
                  paddingLeft: "16px",
                }}
              >
                SIGNATURE SELECTION
              </span>
              <h2
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "0.03em",
                  color: "#e5e2e1",
                }}
              >
                Our Crave-Worthy Highlights
              </h2>
            </div>
            <Link
              href="/menu"
              className="flex items-center gap-2 hover:underline font-bold"
              style={{ color: "#ffba20", textDecoration: "none" }}
            >
              View Full Menu{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map(({ name, desc, price, badge, badgeBg, badgeText, img, alt }) => (
              <div
                key={name}
                className="group rounded-xl overflow-hidden border transition-all duration-300 shadow-2xl"
                style={{
                  backgroundColor: "#201f1f",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="relative overflow-hidden" style={{ height: "256px" }}>
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {badge && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded font-bold text-sm shadow-md"
                      style={{ backgroundColor: badgeBg, color: badgeText }}
                    >
                      {badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      style={{
                        fontFamily: "Be Vietnam Pro, sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#e5e2e1",
                      }}
                    >
                      {name}
                    </h3>
                    <span style={{ color: "#ffba20", fontWeight: 700 }}>{price}</span>
                  </div>
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "Be Vietnam Pro, sans-serif",
                      fontSize: "14px",
                      color: "#e6bdbb",
                    }}
                  >
                    {desc}
                  </p>
                  <button
                    className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors hover:bg-[#e31837] hover:text-[#fffaf9]"
                    style={{
                      backgroundColor: "#353534",
                      color: "#e5e2e1",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      add_shopping_cart
                    </span>
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section style={{ padding: "3rem 1.25rem" }}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <span
                className="block mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#ffb3b1",
                }}
              >
                VISIT US
              </span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "0.03em",
                  color: "#e5e2e1",
                }}
              >
                Located in the Heart of Makola
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
                Conveniently located in Makola, Sri Lanka. Whether you&apos;re a local
                or just passing through, stop by for the best burger experience in town.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined" style={{ color: "#ffb3b1" }}>
                    pin_drop
                  </span>
                  <div>
                    <p className="font-bold">Address</p>
                    <p style={{ color: "#e6bdbb" }}>123 Makola Junction, Makola, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined" style={{ color: "#ffb3b1" }}>
                    call
                  </span>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p style={{ color: "#e6bdbb" }}>+94 77 201 9488</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 rounded-2xl overflow-hidden border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              style={{ height: "400px", borderColor: "rgba(255,255,255,0.1)" }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByh9slD5KgOSUaQ9lmVBH5bx83CU_qQ8nAL6teFx0WwoqOIjhAIsX4gCHAunwB7ZfGmHzxtHJN8WrdXrOLzU6iMb6etmIx3a3NenKoQFO1O5BMZ172QprDObhhlQq7HhvH7iL4WVjnGR2F_6jgd81ynnRBXyrzOzzC0Pw4qhs_LO0r_TT_XcmkKNBm9C0JX8gU9xJVrk17xuAhXfRP7bNQwWnhcpcPd-vkDw5GOzkZv_XwD3p_tfAh1PRf3gI7WDQL3-lMC_hLOs4X"
                alt="Makola Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />

      {/* Desktop FAB */}
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
        }}
      >
        <span className="material-symbols-outlined">shopping_basket</span>
        <span>Start Order</span>
      </Link>
    </div>
  );
}
