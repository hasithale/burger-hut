import Link from "next/link";

const features = [
  { icon: "lunch_dining", title: "FRESH BURGERS", desc: "Made with quality ingredients", color: "#feb700" },
  { icon: "local_bar", title: "FRESH DRINKS", desc: "Smoothies & milkshakes", color: "#feb700" },
  { icon: "room_service", title: "FAST SERVICE", desc: "Quick & friendly service", color: "#feb700" },
  { icon: "delivery_dining", title: "FAST DELIVERY", desc: "Quick service to your doorstep", color: "#feb700" },
];

const menuItems = [
  { name: "HUT CHEESE BURGER", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMpZKTTRYmnuTr6mFy3dkPK1HRoJ7ykXU5ebk3raR5bl5UMvDGGqU811e-ZaJfcPWi56NT7eDRIm1jxIvGU0TPyaRugyK7LjFAsfzttz3ZWhqejqV2iUIBLoiMlJvp8NtlZ9dNLZvCjIyYJUWEzqp_PHZBKTq5kH693EE5DPbXTa5t_kQ-zLsu3_7_ZiwgIR0r503FC3ruspzbnYPwxx_89MMprzLmSpOyI2t6OX2-Cj5qDeUHJR3iCOoPENiGyLSELQcj56gpPa1C" },
  { name: "CRISPY CHICKEN BURGER", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdw4w5q29uC1GsTrbYJsSBpGVVbSwpmoQaIoThy1KXlS0mZrK1tCXK9fYo6TwxbsSpwVxDzeD8xHT7gWRVFrwberAyFF6eGH5ySdHKmZ4DJFq9BMcLuQgmM9YwVTF_O6ZOTj54lmvn2SBWAA2xIQibSf9o5lJWM-qZCjIvh3KCkTQBw1GJ1KgrYer6gLz2p8VPvxJSYHP-QAadDZTyfwuvyPyVXYDmZ1Xs7abCMq29K-Ua2zEI5fG-BD3-GL-LID_eZnjUa4NNfh9" },
  { name: "CLUB SANDWICH", price: "Rs. 1,050", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrIjAC_Pt26udijpExaG8tmR6euMdwomhQFYAqlBaD1laE6gvn8JT1frVe-dyhtBI77WIM2o7r04dkyTMpJb462L5LcBdcbjYB2S8h4skwKDNrTpHtIVLlftxLg6gcWoFBYcrG4_S1c5O91-WfBegIslIFP-C9L2o7buTpM8IgM_93KIeeIoc6zHiCSYog-DgjnrmlOMVaAu-0bZaRcZjpOAnuv-b7lGg0EM--rPyihTaaul-z4EfKIpBhNunLmwQJM8MDXpryrTuM" },
  { name: "CRISPY CHICKEN SUBMARINE", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDR37M6IK52bnFnfIdoxcH-61JXEO3X2fUgdn88Y7c5S8fWsmhv3HLF9ljuaphBHlw3HzGtmf9vK5fFLl_qRwY-y0Gi2kjREQ53zwt_jzHyvt3K0_hVvtHj_FYSdHb0xCWIAeTNJwxz_AV4gFGm5jSSF6KmtkK-snx-g1JgY-YVilJ6so5IS6YNlbD2UXC-9x2_eRuQCj9kLvYk0yyl3KipO9Lbcel7Oy2DlVMEjDN5iul29Bi1Iv3qt2VtOp8cqek4RcceABvx1Bs" },
  { name: "TROPICAL FRUIT SMOOTHIE", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHiz2DyKTUJByk5bnb_eDghmpwyZiiUBNAy8XKHi9jVOo8Mk5TaweT193ZGccRedbw-vQMVObe9_z2rB4IK3lfCFtZ0RhhuVi9yYieNeMciBPUbg3fK8-SXvXvUOUPSlPzNs28ULwTvTxK-GsF_AlQAUCqOb-nYIaOExIUF5iyWYvTg7_c8qB_oOt4Ujs6cphI9Wq-8oFmFN5xeKkZHRnKgflaZRNdgkOT3L53y9YEucyM25c8Xvt5Ifev26bi_CS6aa23528K-1Us" },
  { name: "KIT KAT MILKSHAKE", price: "Rs. 950", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5R-vkHyl16HgqkYOuatYPuZIfmjvpLTBh5WIIXECxz5EZYAL1fngKXDOCwUmTmQa-6-QtlZGZLospJcLWuD_O2bYftpHPClOy35vmYovgF9RE787FmRe_LEKULxhJt8ngmuYEvHNG74KuJ04OjO2ubY-iYjp8zSs6UfdQwsLLjaHac-dnLMtB42twwMvP6eEmxdQcjtjIFLkR6e24mh_gCvQdt0fi-ZWu8cKJZ2jaLrBP4l9F50cnNDaxNjYFSKLE3SOdHpA_9p2G" },
];

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 md:pt-16" style={{ scrollMarginTop: "60px" }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#0f0a00", minHeight: "520px" }}>
        {/* Background burger image — right side */}
        <div className="absolute right-0 top-0 h-full w-full md:w-[65%] z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDaFZWbjIQa3lh73HKc8f6t8DGjeium5lhO_CV8vq0w9JM2eX9jcI6Wh7CXGUcFLu_yj-E1IgpfEoO1zZ01xVcZyQPu67pZd8ufTEXce7d-1XAldHKwezSolg_RFyAjDs9jE0NswWCIja-bh4NyA_s79jWD9XmsoYrjmBfY1_uoDnvZ2izvg6igJS87AaKVmOssu8_iI9ugoxKhvj5JDg4kykQ8IE4_J_jTbHShNncZ1Ruy5ZRzmNrTsNj6nN0nZkKzn8WHtQtF9Vf"
            alt="Burger" className="w-full h-full object-cover"
            style={{ opacity: 0.6 }}
          />
          {/* Gradient fade left/bottom for better text readability */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0f0a00 0%, rgba(15,10,0,0.4) 40%, transparent 100%)" }} />
          <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to top, #0f0a00 0%, transparent 50%)" }} />
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5">
          <div className="flex flex-col justify-center" style={{ padding: "3rem 0", minHeight: "520px" }}>
            {/* Tagline */}
            <p className="mb-2" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "12px", fontWeight: 700, color: "#feb700", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Good Food • Great Taste • Good Mood
            </p>

            {/* Script heading */}
            <div className="mb-0" style={{ fontFamily: "Dancing Script, cursive", fontSize: "clamp(24px, 6vw, 42px)", color: "#feb700", lineHeight: 1.1 }}>
              Delicious
            </div>

            {/* BURGERS */}
            <div className="mb-4" style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(48px, 12vw, 96px)", color: "white", lineHeight: 0.9, letterSpacing: "0.02em" }}>
              BURGERS
            </div>

            {/* MADE FRESH stripe */}
            <div className="mb-6" style={{ display: "inline-block", backgroundColor: "#e31837", padding: "6px 20px", width: "fit-content" }}>
              <span style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(20px, 5vw, 36px)", color: "white", letterSpacing: "0.04em", textTransform: "uppercase" }}>MADE FRESH</span>
            </div>

            {/* Description */}
            <p className="mb-8 max-w-[320px]" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
              Serving premium, flame-grilled burgers, crispy sandwiches, and artisanal milkshakes in the heart of Makola.
            </p>

            {/* Gold badge — positioned lower to avoid Navbar conflict */}
            <div className="absolute bottom-8 right-4 z-20 rounded-lg text-center hidden sm:block"
              style={{ backgroundColor: "#feb700", padding: "12px 16px", maxWidth: "140px", boxShadow: "0 8px 24px rgba(254,183,0,0.3)" }}>
              <div style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "11px", fontWeight: 700, color: "#1a0a00", lineHeight: 1.3 }}>
                MAKOLA'S<br />GOLD STANDARD<br />
                <div style={{ backgroundColor: "#e31837", color: "white", padding: "2px 8px", display: "inline-block", borderRadius: "4px", marginTop: "6px", fontSize: "10px" }}>SINCE 2024</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <a href="#menu"
                className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                style={{ backgroundColor: "#feb700", color: "#1a0a00", padding: "14px 28px", borderRadius: "10px", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 4px 16px rgba(254,183,0,0.3)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>restaurant_menu</span>
                EXPLORE MENU
              </a>
              <Link href="https://wa.me/94772019488" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "white", padding: "14px 28px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "15px", textDecoration: "none", backdropFilter: "blur(8px)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chat</span>
                WHATSAPP
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ROW ── */}
      <div style={{ backgroundColor: "#1a0e00", borderTop: "1px solid rgba(255,183,0,0.1)", borderBottom: "1px solid rgba(255,183,0,0.1)" }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ padding: "0" }}>
            {features.map(({ icon, title, desc }, i) => (
              <div key={title} 
                className={`flex flex-col items-center text-center py-6 px-4 border-[#ffb7001a]
                  ${(i % 2 === 0 || i < 3) ? "border-r" : ""} 
                  ${i < 2 ? "border-b" : ""} 
                  md:border-b-0`}
              >
                <span className="material-symbols-outlined mb-2" style={{ fontSize: "28px", color: "#feb700", fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <p style={{ fontFamily: "Anton, sans-serif", fontSize: "12px", fontWeight: 400, color: "white", letterSpacing: "0.05em", lineHeight: 1.2, marginBottom: "4px" }}>{title}</p>
                <p style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.5)", lineHeight: 1.3 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OUR SIGNATURES ── */}
      <div style={{ backgroundColor: "#0f0a00", padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-5">
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div style={{ height: "1px", width: "40px", backgroundColor: "#feb700", opacity: 0.6 }} />
              <span style={{ fontFamily: "Dancing Script, cursive", fontSize: "28px", color: "#feb700" }}>Our</span>
              <div style={{ height: "1px", width: "40px", backgroundColor: "#feb700", opacity: 0.6 }} />
            </div>
            <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(36px, 8vw, 56px)", fontWeight: 400, color: "white", letterSpacing: "0.05em", lineHeight: 1 }}>
              SIGNATURES
            </h2>
            <div className="mx-auto mt-4" style={{ width: "80px", height: "4px", backgroundColor: "#e31837" }} />
          </div>

          {/* 3-col grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {menuItems.map(({ name, price, img }) => (
              <div key={name} className="group rounded-xl overflow-hidden" style={{ backgroundColor: "#1a0e00", border: "1px solid rgba(255,183,0,0.1)" }}>
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="text-center py-4 px-2">
                  <p style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "12px", fontWeight: 700, color: "white", lineHeight: 1.3, marginBottom: "4px" }}>{name}</p>
                  <p style={{ fontFamily: "Anton, sans-serif", fontSize: "16px", fontWeight: 400, color: "#feb700" }}>{price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu button */}
          <div className="flex justify-center mb-12">
            <a href="#menu"
              className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              style={{ backgroundColor: "transparent", color: "#feb700", border: "2px solid #feb700", padding: "14px 40px", borderRadius: "10px", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>restaurant_menu</span>
              VIEW FULL MENU
            </a>
          </div>

          {/* ── COMBO DEAL BANNER ── */}
          <div className="relative rounded-2xl overflow-hidden border shadow-2xl"
            style={{ background: "linear-gradient(135deg, #7a0000 0%, #3d0000 60%, #1a0000 100%)", borderColor: "rgba(255,183,0,0.2)", padding: "3rem 2rem" }}>

            <div className="absolute top-6 right-6 rounded-full text-center"
              style={{ backgroundColor: "#feb700", width: "72px", height: "72px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(254,183,0,0.4)" }}>
              <span style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "11px", fontWeight: 800, color: "#1a0a00", lineHeight: 1.1 }}>BEST<br />VALUE</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, color: "#feb700", letterSpacing: "0.2em", textTransform: "uppercase" }}>Special Offer</span>
                <h3 className="mt-2 mb-4" style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(36px, 6vw, 56px)", color: "white", fontWeight: 400, lineHeight: 1, letterSpacing: "0.05em" }}>
                  THE ULTIMATE <span style={{ color: "#feb700" }}>COMBO</span>
                </h3>
                <p className="mb-6" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                  Signature Burger + Golden Fries + Large Drink
                </p>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                  <span style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(32px, 5vw, 48px)", color: "white" }}>Rs. 1,750</span>
                  <Link href="https://wa.me/94772019488" target="_blank" rel="noopener noreferrer"
                    className="hover:scale-105 active:scale-95 transition-all"
                    style={{ backgroundColor: "white", color: "#e31837", padding: "12px 32px", borderRadius: "8px", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
                    CLAIM NOW
                  </Link>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-[320px] aspect-video md:aspect-square">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6jn5GhFW5AfTWXMDF10tQ5ZUyzprLMcMnltS-IMEXPN6rAodfJanM467bHFL7mA-zl6-9pA_KZ_DPEQ3eky0uioDg39ExGqERGZ3jGxsSKj6jvsa9oeyAG0yMBA5yTJ3gNvHA_8mDvlMc9k6l0pHpsbnMj5qvLAkz0x1WrmWKWy7j4F2OydrepR3S9i_z0tBrhR8S8DykQwHiWjQEEKnNJAcm09dCMbprcbuYz8EwvEn1oQ9W6e7yp23b-qNfAJBnF6MyDhPMjg9l"
                  alt="Combo Deal" className="w-full h-full object-cover rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
