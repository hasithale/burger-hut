import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Burger Hut Makola",
  description:
    "Learn the story of Burger Hut Makola — from a small grill on the corner of Makola Market to the local legend we are today.",
};

const whyUsItems = [
  {
    icon: "workspace_premium",
    title: "Premium Quality",
    desc: "We use only 100% prime beef and artisanal buns baked fresh every single day.",
    color: "#ffb3b1",
  },
  {
    icon: "location_on",
    title: "Local Roots",
    desc: "We aren't just a business; we are part of the Makola community fabric since day one.",
    color: "#ffba20",
  },
  {
    icon: "bolt",
    title: "Efficiency",
    desc: "Fast-paced food for a fast-paced life, without ever compromising on the craft.",
    color: "#61de8a",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#131313", color: "#e5e2e1", minHeight: "100vh" }}>
      <Navbar />

      <main className="chalkboard-texture">
        {/* Hero Section */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "716px" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_uAQ-ZEAAK0TnZ-t2JIKvTZRswyZTuftXMxJUxy7NhynfkWSE_qVwu--FygVj5Z43FZvEfp8U4K1RNfs6VGx5C0DW8AwVf6Gi3w9tmJOfaKU_IhvoStFbycLD2U-otUrpD7_rRm8O54u6eE0rFRlBkOqUiE21L0lvlDOeaGnI8zVNrNzigAbAZsbjbq6IuWRZskiNCd2ucYawjzSh0b6X47uhiwPL10WfsaX81jr_TTS8ikUXOrGTj3sJ-ipSPidlJVyy85bqwOYB7"
              alt="Burger Hut Story"
              className="w-full h-full object-cover"
              style={{ opacity: 0.4 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.6) 50%, transparent 100%)",
              }}
            />
          </div>

          <div
            className="relative z-10 max-w-4xl"
            style={{ padding: "0 1.25rem" }}
          >
            <span
              className="block mb-4 tracking-[0.2em]"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#ffba20",
              }}
            >
              OUR STORY
            </span>
            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(40px, 7vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "#e5e2e1",
              }}
            >
              BORN IN THE{" "}
              <span style={{ color: "#e31837" }}>HEART</span> OF MAKOLA.
            </h1>
            <p
              className="max-w-2xl"
              style={{
                fontFamily: "Be Vietnam Pro, sans-serif",
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#e6bdbb",
              }}
            >
              From a small grill on the corner of Makola Market to the local legend
              we are today, Burger Hut has always been about one thing: the perfect
              bite. We started with a mission to bring premium, artisanal burger
              quality to the vibrant streets of Sri Lanka.
            </p>
          </div>
        </section>

        {/* Philosophy Bento Grid */}
        <section style={{ padding: "3rem 1.25rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Philosophy Card */}
            <div
              className="md:col-span-2 relative overflow-hidden group rounded-xl border flex flex-col justify-between"
              style={{
                backgroundColor: "#2a2a2a",
                borderColor: "rgba(255,255,255,0.1)",
                padding: "1.5rem",
                minHeight: "300px",
              }}
            >
              <div className="relative z-10">
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "40px",
                    fontWeight: 400,
                    color: "#e5e2e1",
                  }}
                >
                  The Philosophy
                </h2>
                <div className="flex gap-4 items-center flex-wrap">
                  <span
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontSize: "40px",
                      color: "#ffb3b1",
                    }}
                  >
                    GOOD FOOD,
                  </span>
                  <span
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontSize: "40px",
                      color: "#ffba20",
                    }}
                  >
                    GREAT TASTE,
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "clamp(48px, 8vw, 80px)",
                    lineHeight: 1,
                    color: "#61de8a",
                  }}
                >
                  GOOD MOOD.
                </div>
              </div>
              <p
                className="relative z-10"
                style={{
                  fontFamily: "Be Vietnam Pro, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#e6bdbb",
                  maxWidth: "448px",
                }}
              >
                We believe that a burger is more than just a meal; it&apos;s an
                experience that fuels the soul and brightens the day.
              </p>
              {/* Decorative icon */}
              <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "300px",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  sentiment_satisfied
                </span>
              </div>
            </div>

            {/* THE HEAT Card */}
            <div
              className="rounded-xl flex flex-col justify-center items-center text-center"
              style={{
                backgroundColor: "#e31837",
                padding: "1.5rem",
              }}
            >
              <span
                className="material-symbols-outlined mb-4"
                style={{
                  fontSize: "60px",
                  color: "white",
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                local_fire_department
              </span>
              <h3
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "40px",
                  color: "white",
                  fontWeight: 400,
                }}
              >
                THE HEAT
              </h3>
              <p
                style={{
                  fontFamily: "Be Vietnam Pro, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Every patty is flame-grilled to order, locking in the smoky
                Makola flavor that defines us.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ padding: "3rem 1.25rem" }}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Photo Grid */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="rounded-xl overflow-hidden border shadow-2xl"
                  style={{
                    aspectRatio: "1/1",
                    borderColor: "rgba(255,255,255,0.05)",
                    backgroundColor: "#201f1f",
                  }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5xJAR9FGmlqOhVMGHxxWEJudpOzLPsY81dw8lIHIAMj0W4j-SBn-LnVhtuGYvOtm0Onve2nR6ak_2-5WTRR1WJUtwrPkoheeHAm-ToIgm2gXX1eusdp_6-wjTlLxt4ZoxzhQ09Rm6iy111Agzz0cwbzF5TurU0pdIWRnKfB2x8z8EwQK0C9UEDjfZV0sWWF55PEkya1Rj7y_XTVvf-l7qcUrQaiVLdP8FaoJbKV5Js3hpVyLQCgYYbgwPDDAnUwRaS5b3WDGMUpyq"
                    alt="Fresh Ingredients"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: "#353534",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Be Vietnam Pro, sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#ffba20",
                    }}
                  >
                    FRESH DAILY
                  </h4>
                  <p
                    style={{
                      fontFamily: "Be Vietnam Pro, sans-serif",
                      fontSize: "14px",
                      color: "#e6bdbb",
                    }}
                  >
                    Veggies sourced every morning from Makola Market.
                  </p>
                </div>
              </div>
              <div className="space-y-4" style={{ paddingTop: "3rem" }}>
                <div
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: "#353534",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Be Vietnam Pro, sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#ffb3b1",
                    }}
                  >
                    SPEEDY SERVICE
                  </h4>
                  <p
                    style={{
                      fontFamily: "Be Vietnam Pro, sans-serif",
                      fontSize: "14px",
                      color: "#e6bdbb",
                    }}
                  >
                    Hot burgers in your hands in record time.
                  </p>
                </div>
                <div
                  className="rounded-xl overflow-hidden border shadow-2xl"
                  style={{
                    aspectRatio: "3/4",
                    borderColor: "rgba(255,255,255,0.05)",
                    backgroundColor: "#201f1f",
                  }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB--Q7tcqYi0qvURylqKjxMYoNm6aklA794rL96nwAWztf0wGeDg0BMzHpUyPLxlXOIB-bX-UQlnuLEcxZvSoiDWBv6u1e-yfrFcpIcykBqxLVLGUnLodulvOE2iADieFgryhsPxTxUAxnkPwA9wFf8fDnve1nzgDKdClOEL_MR8Rj5eT5ATXCi6NZrq8zgLHK1POaH7A781F4Pi1uuCWtCqmewTEYdCzDDyNVyjAIYkxxB4ErQJVVuXrfZikJZYmCqvCVGMC-8t-UM"
                    alt="Chef at grill"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Why Us Text */}
            <div className="w-full md:w-1/2">
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#e5e2e1",
                }}
              >
                WHY MAKOLA CHOOSES{" "}
                <span style={{ color: "#ffba20" }}>US.</span>
              </h2>
              <div className="space-y-6">
                {whyUsItems.map(({ icon, title, desc, color }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="shrink-0 flex items-center justify-center rounded-lg border"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#353534",
                        borderColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color }}>
                        {icon}
                      </span>
                    </div>
                    <div>
                      <h5
                        style={{
                          fontFamily: "Be Vietnam Pro, sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#e5e2e1",
                        }}
                      >
                        {title}
                      </h5>
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
                  </div>
                ))}
              </div>
              <div
                className="mt-8 p-6 rounded-xl border relative overflow-hidden flex items-center gap-4"
                style={{
                  backgroundColor: "rgba(254,183,0,0.1)",
                  borderColor: "rgba(254,183,0,0.3)",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "36px",
                    color: "#feb700",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#feb700",
                    textTransform: "uppercase",
                  }}
                >
                  The Makola Gold Standard
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: "3rem 1.25rem", marginBottom: "3rem" }}>
          <div
            className="rounded-3xl relative overflow-hidden text-center border"
            style={{
              backgroundColor: "#2a2a2a",
              borderColor: "rgba(255,255,255,0.1)",
              padding: "3rem",
            }}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "clamp(32px, 5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "0.02em",
                  color: "#e5e2e1",
                }}
              >
                READY FOR THE{" "}
                <span style={{ color: "#ffb3b1" }}>ULTIMATE</span> BITE?
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
                Join us at our location or order via WhatsApp to experience the
                true taste of Burger Hut Makola.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/menu"
                  className="hover:scale-105 transition-all"
                  style={{
                    backgroundColor: "#e31837",
                    color: "#fffaf9",
                    padding: "16px 40px",
                    borderRadius: "9999px",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 4px 20px rgba(227,24,55,0.3)",
                  }}
                >
                  VIEW OUR MENU
                </Link>
                <Link
                  href="/locations"
                  className="hover:opacity-80 transition-all"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid rgba(255,255,255,0.2)",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: "9999px",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  OUR LOCATIONS
                </Link>
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
