"use client";
import { useState, useEffect, useRef } from "react";

const galleryItems = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfEhnJmFM82Jy5oYSqym0nIX_ru7k_W7xJKATUtbIq28TARBundRFZHHcPDbRmmQg3hN7y3QEnlX_o96np_CJ8mKnWCKVsaBUqstGSDMJ8S4Qe4Xvo1LFOPv4Onrv0lOvsUO_Kz80lSFKcDv6bG7aT430PLxP202asmWY-IZItsbUcwUuueCEC-YDFYoMnkscRSGWLVwqYOer6WFvvT2KJmZU_-vOqwIqkmeXh0UFda_OxSYLymKDX8cdHbIWckyDINUPTotyMS5gO", alt: "Interior", caption: "THE MAKOLA VIBE" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJfcMDaBnEOxfXYMqEIAfQ3_cKwbdEJzHSE8femPzksHiWj8PVLmtkCK6RBg5uNo7t8jkHfP649tQavOt9OcTnX9iHOWYKfzIS2pKnhjclusMFGTxV-AMkefRcbRF_eH81icuUjDi8dJkqLbpU-R4GdyB__HClpMrgg6AJsxbFILmBY57Dh8R_6whZQQdB-4bhJLE_l__NU8h386_XlV2UQHj8FRLva31FHt4_HiuRbyAcLAOgvCtlNy3E5LwhzQaLrkqqZr4A0rGP", alt: "Signature Burger", caption: "SIGNATURE STACK" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjx2JX5YP8rfSx6t0I2ckoGtGRoIxHW4mPtCWo7fBlq92T5xyVlzYlapPKGsofELvQXoo5vqwaT28Sqq-P6p24LsyEE_0yKV5ICYWPh0sxCdprnNIzrl0K6Pc8SUgN5fQaeKWjhXZBDeRh1ekTVkrSNOMpXhBP2ZngQvyWw8Kc6uUyeG8xxUB_X_7q2z9UdxtEmfQsdG6kKKTcrM-_j3DHiIE3i9qytX-di0VL_ee3AwswD2RVNOXT20a5KVo5U1-4UstPo4AW3q0I", alt: "Golden Fries", caption: "PERFECT CRUNCH" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUA4_aSRltaJFJ9_y1JCFWuZ0zGr69-Lp9_ghv-ZXWZRd29q83uRdoYJ8ribzqgQdoaZSva7lkbmM5e4mmXGHfVUt1EQPFZ_c5sVhbxeIDf10aDARil3mVpE4jAC3281ayCAMm0v6c-qE_QCTe4sR1YxJGmvYWJUdslX5QnzfiMJttfG-reHFnqf2-iQkBJSioqi176PC7JCUF-Ok94MjW2DxOvY0ZNRY73T1bP3ddCqf1NA2aYrYNHvAmD8XguUkZLwMt0ZIyYQGV", alt: "Chef at work", caption: "CRAFTED WITH LOVE" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSwwehx1OqDUIbUsDDZ_4bSVZJ7rfLfxSWEpNMnJs9sBZaPNHx1MiEr6Er7QwCBkdPFS_sZSfNafoE0LSqxTFnT9brNYSdo6zqjGCDNFPA_cpjRxQ3B08xyggNxwCXxDA9K7oJQa7XkE3s4t11Bi7aKrmk0TSP0BqVk8xfuDvOrkpvvH3UFQGL7BLsg4_sMnFfoYvOAvYlQpXsa8vS2B1_sYjE0BvuUWTvwenZ9OQLYQWRt8TzXQ8tDOsYFLbxm_nuTXd37zP3-PWB", alt: "Outdoor night", caption: "NIGHTS AT MAKOLA" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCRsqZ9_bAyAnw-OXj3HKJEQ9tVXXIc7NpCRvcUxVEIk0MgXc2LWJuFTu30B_qs-B7u6j6WuuFv7vCchRxCK2h1kl6to0hB8hfbFxMN7l32yXMui40RdU6bCTJpkuKYjJNtWoQosbR5x2s4tKaGtTVH_S55YaUpcUPnirG9sy4v4SxkAhkQako9C5cRR_dZbLgyai904Wy50LzjnT6BOft6PEUml_c-yXEoxrM9wPw9_TEXuTWsfk0IcE15uGPqXNnXRpN9LJcyTK4", alt: "Milkshake", caption: "SWEET ESCAPE" },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slidesToDisplay = isMobile ? 1 : 3;
  const maxIndex = galleryItems.length - slidesToDisplay;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => resetTimeout();
  }, [currentIndex, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="gallery" style={{ scrollMarginTop: "60px", backgroundColor: "#0e0e0e", overflow: "hidden" }}>
      {/* Header */}
      <div className="text-center" style={{ padding: "4rem 1.25rem 2rem" }}>
        <span className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffb3b1" }}>OUR WORLD</span>
        <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "0.02em", color: "#ffb3b1" }}>
          FEAST YOUR EYES
        </h2>
        <div className="mx-auto mt-4" style={{ width: "80px", height: "4px", backgroundColor: "#feb700" }} />
      </div>

      {/* Slider Container */}
      <div className="relative group" style={{ padding: "1rem 1.25rem 5rem" }}>
        {/* Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          style={{ backgroundColor: "rgba(254,183,0,0.8)", color: "#1a0a00", border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          style={{ backgroundColor: "rgba(254,183,0,0.8)", color: "#1a0a00", border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToDisplay)}%)` }}
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="shrink-0 relative overflow-hidden rounded-2xl border"
                style={{
                  width: `calc(${100 / slidesToDisplay}% - ${(16 * (slidesToDisplay - 1)) / slidesToDisplay}px)`,
                  aspectRatio: "4/5",
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "#1a1a1a"
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
                >
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#feb700",
                      textTransform: "uppercase"
                    }}
                  >
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: currentIndex === idx ? "#feb700" : "rgba(255,255,255,0.2)",
                width: currentIndex === idx ? "24px" : "10px",
                border: "none",
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
