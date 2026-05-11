import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Burger Hut Makola",
  description:
    "Discover the art of the perfect burger through our lens. Fresh ingredients, fiery grills, and the vibrant spirit of Makola.",
};

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfEhnJmFM82Jy5oYSqym0nIX_ru7k_W7xJKATUtbIq28TARBundRFZHHcPDbRmmQg3hN7y3QEnlX_o96np_CJ8mKnWCKVsaBUqstGSDMJ8S4Qe4Xvo1LFOPv4Onrv0lOvsUO_Kz80lSFKcDv6bG7aT430PLxP202asmWY-IZItsbUcwUuueCEC-YDFYoMnkscRSGWLVwqYOer6WFvvT2KJmZU_-vOqwIqkmeXh0UFda_OxSYLymKDX8cdHbIWckyDINUPTotyMS5gO",
    alt: "Interior",
    caption: "THE MAKOLA VIBE",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJfcMDaBnEOxfXYMqEIAfQ3_cKwbdEJzHSE8femPzksHiWj8PVLmtkCK6RBg5uNo7t8jkHfP649tQavOt9OcTnX9iHOWYKfzIS2pKnhjclusMFGTxV-AMkefRcbRF_eH81icuUjDi8dJkqLbpU-R4GdyB__HClpMrgg6AJsxbFILmBY57Dh8R_6whZQQdB-4bhJLE_l__NU8h386_XlV2UQHj8FRLva31FHt4_HiuRbyAcLAOgvCtlNy3E5LwhzQaLrkqqZr4A0rGP",
    alt: "Signature Burger",
    caption: "SIGNATURE STACK",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjx2JX5YP8rfSx6t0I2ckoGtGRoIxHW4mPtCWo7fBlq92T5xyVlzYlapPKGsofELvQXoo5vqwaT28Sqq-P6p24LsyEE_0yKV5ICYWPh0sxCdprnNIzrl0K6Pc8SUgN5fQaeKWjhXZBDeRh1ekTVkrSNOMpXhBP2ZngQvyWw8Kc6uUyeG8xxUB_X_7q2z9UdxtEmfQsdG6kKKTcrM-_j3DHiIE3i9qytX-di0VL_ee3AwswD2RVNOXT20a5KVo5U1-4UstPo4AW3q0I",
    alt: "Golden Fries",
    caption: null,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUA4_aSRltaJFJ9_y1JCFWuZ0zGr69-Lp9_ghv-ZXWZRd29q83uRdoYJ8ribzqgQdoaZSva7lkbmM5e4mmXGHfVUt1EQPFZ_c5sVhbxeIDf10aDARil3mVpE4jAC3281ayCAMm0v6c-qE_QCTe4sR1YxJGmvYWJUdslX5QnzfiMJttfG-reHFnqf2-iQkBJSioqi176PC7JCUF-Ok94MjW2DxOvY0ZNRY73T1bP3ddCqf1NA2aYrYNHvAmD8XguUkZLwMt0ZIyYQGV",
    alt: "Chef at work",
    caption: null,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSwwehx1OqDUIbUsDDZ_4bSVZJ7rfLfxSWEpNMnJs9sBZaPNHx1MiEr6Er7QwCBkdPFS_sZSfNafoE0LSqxTFnT9brNYSdo6zqjGCDNFPA_cpjRxQ3B08xyggNxwCXxDA9K7oJQa7XkE3s4t11Bi7aKrmk0TSP0BqVk8xfuDvOrkpvvH3UFQGL7BLsg4_sMnFfoYvOAvYlQpXsa8vS2B1_sYjE0BvuUWTvwenZ9OQLYQWRt8TzXQ8tDOsYFLbxm_nuTXd37zP3-PWB",
    alt: "Outdoor night",
    caption: "NIGHTS AT MAKOLA",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCRsqZ9_bAyAnw-OXj3HKJEQ9tVXXIc7NpCRvcUxVEIk0MgXc2LWJuFTu30B_qs-B7u6j6WuuFv7vCchRxCK2h1kl6to0hB8hfbFxMN7l32yXMui40RdU6bCTJpkuKYjJNtWoQosbR5x2s4tKaGtTVH_S55YaUpcUPnirG9sy4v4SxkAhkQako9C5cRR_dZbLgyai904Wy50LzjnT6BOft6PEUml_c-yXEoxrM9wPw9_TEXuTWsfk0IcE15uGPqXNnXRpN9LJcyTK4",
    alt: "Milkshake",
    caption: null,
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: "#131313", color: "#e5e2e1", minHeight: "100vh" }}>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ height: "614px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}
          />
          <div className="relative z-10 text-center" style={{ padding: "0 1.25rem" }}>
            <h1
              className="text-shadow-glow mb-4"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(40px, 8vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "#ffb3b1",
              }}
            >
              FEAST YOUR EYES
            </h1>
            <p
              className="max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "Be Vietnam Pro, sans-serif",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#ffdea8",
              }}
            >
              Discover the art of the perfect burger through our lens. Fresh
              ingredients, fiery grills, and the vibrant spirit of Makola.
            </p>
            <div
              className="mx-auto"
              style={{ width: "96px", height: "4px", backgroundColor: "#feb700" }}
            />
          </div>
        </section>

        {/* Bento Gallery Grid */}
        <section
          style={{
            padding: "3rem 1.25rem",
            backgroundColor: "#131313",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
            style={{ gridTemplateRows: "auto" }}
          >
            {galleryItems.map(({ src, alt, caption, className }) => (
              <div
                key={alt}
                className={`group relative overflow-hidden rounded-xl border ${className}`}
                style={{ borderColor: "rgba(255,255,255,0.1)", minHeight: "200px" }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {caption && (
                  <div
                    className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#ffdea8",
                      }}
                    >
                      {caption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-12 text-center border-y"
          style={{
            backgroundColor: "#1c1b1b",
            borderColor: "rgba(255,255,255,0.05)",
            padding: "3rem 1.25rem",
          }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "0.03em",
              color: "#e5e2e1",
            }}
          >
            HUNGRY YET?
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{
              fontFamily: "Be Vietnam Pro, sans-serif",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#e6bdbb",
            }}
          >
            Don&apos;t just stare at the screen. Grab the real thing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="hover:scale-105 transition-transform"
              style={{
                backgroundColor: "#e31837",
                color: "#fffaf9",
                padding: "16px 40px",
                borderRadius: "0.5rem",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 20px rgba(227,24,55,0.2)",
              }}
            >
              VIEW MENU
            </Link>
            <Link
              href="/locations"
              className="hover:opacity-80 transition-colors"
              style={{
                border: "2px solid #ffba20",
                color: "#ffba20",
                padding: "16px 40px",
                borderRadius: "0.5rem",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              GET DIRECTIONS
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
