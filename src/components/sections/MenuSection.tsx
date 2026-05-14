import Link from "next/link";

const burgers = [
  { name: "Hut Cheese Burger", desc: "Double cheese, secret hut sauce.", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClmdZa4WCjATChrN9y3IYwoKDCMUcpYm0V9yzpaavmbg7ZzCgQkXubb1qfzPa9KNgewgSEFaM0jgeD-6TA95jWbDkUw9l6CZB0n8WoteXpNuTPJM9q9JNjG-jG7GTWAv3jZpq6glwk3-IIk-J5NzTmde-5_n9VqFe840duIW6xnlx-hEvh9PIMR5q8atujIiRCspAeFEwBP6wavY-2Ly3Amw9VOPq4-ohDeRLyxjetIaV1rv9APQrI1XG3UxhBD33SHsqNeo-8lDBw" },
  { name: "Crispy Chicken Burger", desc: "Golden fry, spicy crunch.", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmuSWB6i6yZo3UmPV9odKSVin92dNX4GypzQm1cOk1vV4zsddpFTdqnHn3qsveeqJrpltYJE9AGH47y3Ve5SXM4y4ivO1QEpHlaaTszfzGaMWAcIj3YDwgqRVBfON7Hw_hnha4yGMrF-DZZPSPfi7v3dQnCC5_9XheHmzKhqLbyTJFQFFGe2e1oNm2x-c1OW7A6z7OpFgVecOK67A7YsagOt_HiXDxbKGQSByOpUZ4OXWuyfnpO0z1VNxugU7PUBtyUXAkD4ARuXHE" },
];

const submarines = [
  { name: "Crispy Chicken Submarine", desc: "Foot-long crispy goodness.", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDR37M6IK52bnFnfIdoxcH-61JXEO3X2fUgdn88Y7c5S8fWsmhv3HLF9ljuaphBHlw3HzGtmf9vK5fFLl_qRwY-y0Gi2kjREQ53zwt_jzHyvt3K0_hVvtHj_FYSdHb0xCWIAeTNJwxz_AV4gFGm5jSSF6KmtkK-snx-g1JgY-YVilJ6so5IS6YNlbD2UXC-9x2_eRuQCj9kLvYk0yyl3KipO9Lbcel7Oy2DlVMEjDN5iul29Bi1Iv3qt2VtOp8cqek4RcceABvx1Bs" },
];

const sandwiches = [
  { name: "Club Sandwich", desc: "Triple layer classic feast.", price: "Rs. 1,050", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQx8G47fVJi-mlUK2WZ78GeFMiMRsqH3YrVI7qm27srq8DaEH3MSrZ-bpLLlK9u9b6_pb_yBU9NyyqMI06mY92jbd1I-VFtvf0bMy8IrfFaN3cTsi298rdbb5d5uQIHZwNatirPVQaddVzTLNrJhmCx5RwD4FIwM321I1FkiIEOIWOgbN37ZyKpd3LxT7TlAq3RfOpB50Xkd4SdWA8dJnbqjRKKQEeX6kW7ivpjUhhr8ffA3JuRvc4rufCu44Z9yEfqYuDfGe1CGTx" },
];

const drinks = [
  { category: "SMOOTHIE", name: "Tropical Fruit", desc: "Pure mango & pineapple blend.", price: "Rs. 850", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHiz2DyKTUJByk5bnb_eDghmpwyZiiUBNAy8XKHi9jVOo8Mk5TaweT193ZGccRedbw-vQMVObe9_z2rB4IK3lfCFtZ0RhhuVi9yYieNeMciBPUbg3fK8-SXvXvUOUPSlPzNs28ULwTvTxK-GsF_AlQAUCqOb-nYIaOExIUF5iyWYvTg7_c8qB_oOt4Ujs6cphI9Wq-8oFmFN5xeKkZHRnKgflaZRNdgkOT3L53y9YEucyM25c8Xvt5Ifev26bi_CS6aa23528K-1Us" },
  { category: "MILKSHAKE", name: "Kit Kat Shake", desc: "Crushed Kit Kat & vanilla cream.", price: "Rs. 950", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5R-vkHyl16HgqkYOuatYPuZIfmjvpLTBh5WIIXECxz5EZYAL1fngKXDOCwUmTmQa-6-QtlZGZLospJcLWuD_O2bYftpHPClOy35vmYovgF9RE787FmRe_LEKULxhJt8ngmuYEvHNG74KuJ04OjO2ubY-iYjp8zSs6UfdQwsLLjaHac-dnLMtB42twwMvP6eEmxdQcjtjIFLkR6e24mh_gCvQdt0fi-ZWu8cKJZ2jaLrBP4l9F50cnNDaxNjYFSKLE3SOdHpA_9p2G" },
];

function MenuCard({ name, price, img }: { name: string; desc: string; price: string; img: string }) {
  return (
    <div className="group rounded-xl overflow-hidden border transition-all duration-300" 
      style={{ backgroundColor: "#1a0e00", borderColor: "rgba(255,183,0,0.1)" }}>
      <div className="overflow-hidden" style={{ height: "clamp(120px, 20vw, 192px)" }}>
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-3 md:p-6 text-center">
        <h4 className="mb-1" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "clamp(12px, 3vw, 18px)", fontWeight: 700, color: "#e5e2e1" }}>{name}</h4>
        <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(14px, 4vw, 20px)", fontWeight: 400, color: "#ffba20" }}>{price}</div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "36px", fontWeight: 400, lineHeight: 1.2, letterSpacing: "0.03em", color: "#ffb3b1", textTransform: "uppercase" }}>{title}</h3>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(255,179,177,0.3), transparent)" }} />
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" style={{ scrollMarginTop: "72px" }}>
      {/* Section header banner */}
      <div className="py-16 flex items-center justify-center text-center" style={{ backgroundColor: "#0e0e0e", padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-5">
          <span className="block mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffb3b1" }}>WHAT WE SERVE</span>
          <h2 style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "0.02em", color: "#ffb3b1" }}>
            The Grill Master&apos;s Choice
          </h2>
          <p style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "18px", fontWeight: 700, color: "#ffdb9d", marginTop: "8px" }}>Good Food, Great Taste, Good Mood.</p>
        </div>
      </div>

      {/* Combo Deal */}
      <div style={{ padding: "3rem 0" }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="relative rounded-2xl overflow-hidden border shadow-2xl flex flex-col md:flex-row items-center gap-8"
            style={{ backgroundColor: "#2a2a2a", borderColor: "rgba(255,255,255,0.1)", padding: "2rem 3rem" }}>
            <div className="absolute top-4 right-4">
              <span className="px-4 py-1 rounded-full" style={{ backgroundColor: "#feb700", color: "#412d00", fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em" }}>BEST VALUE</span>
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 style={{ fontFamily: "Anton, sans-serif", fontSize: "40px", fontWeight: 400, letterSpacing: "0.03em", color: "#ffdb9d" }}>COMBO DEAL</h3>
              <p style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "16px", lineHeight: 1.6, color: "#e6bdbb" }}>The ultimate satisfy-your-hunger pack. Get our signature Burger, crispy golden Fries, and a refreshing Drink.</p>
              <div style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(40px, 7vw, 56px)", color: "#ffb3b1", lineHeight: 1.1, letterSpacing: "0.02em" }}>Rs. 1,750</div>
              <Link href="https://wa.me/94772019488" target="_blank" rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
                style={{ backgroundColor: "#e31837", color: "#fffaf9", padding: "16px 40px", borderRadius: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", boxShadow: "0 6px 0 0 #92001d" }}>
                CLAIM DEAL NOW
              </Link>
            </div>
            <div className="flex-1 w-full" style={{ height: "256px" }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6jn5GhFW5AfTWXMDF10tQ5ZUyzprLMcMnltS-IMEXPN6rAodfJanM467bHFL7mA-zl6-9pA_KZ_DPEQ3eky0uioDg39ExGqERGZ3jGxsSKj6jvsa9oeyAG0yMBA5yTJ3gNvHA_8mDvlMc9k6l0pHpsbnMj5qvLAkz0x1WrmWKWy7j4F2OydrepR3S9i_z0tBrhR8S8DykQwHiWjQEEKnNJAcm09dCMbprcbuYz8EwvEn1oQ9W6e7yp23b-qNfAJBnF6MyDhPMjg9l"
                alt="Combo Deal" className="w-full h-full object-cover rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.05)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Burgers */}
      <div style={{ padding: "0 0 1.5rem" }}>
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeader title="Burgers" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {burgers.map((item) => <MenuCard key={item.name} {...item} />)}
          </div>
        </div>
      </div>

      {/* Submarines */}
      <div style={{ padding: "1.5rem 0" }}>
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeader title="Submarines" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {submarines.map((item) => <MenuCard key={item.name} {...item} />)}
          </div>
        </div>
      </div>

      {/* Sandwiches */}
      <div style={{ padding: "1.5rem 0" }}>
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeader title="Sandwiches" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sandwiches.map((item) => <MenuCard key={item.name} {...item} />)}
          </div>
        </div>
      </div>

      {/* Drinks */}
      <div style={{ padding: "1.5rem 0 3rem" }}>
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeader title="Drinks & Smoothies" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {drinks.map((item) => (
              <div key={item.name} className="group flex rounded-xl overflow-hidden border" style={{ backgroundColor: "#2a2a2a", borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="overflow-hidden" style={{ width: "33%" }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center p-6" style={{ width: "67%" }}>
                  <span className="mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffdb9d" }}>{item.category}</span>
                  <h4 className="mb-1" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "18px", fontWeight: 700, color: "#e5e2e1" }}>{item.name}</h4>
                  <p className="mb-4" style={{ fontFamily: "Be Vietnam Pro, sans-serif", fontSize: "14px", color: "#e6bdbb" }}>{item.desc}</p>
                  <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#ffba20" }}>{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
