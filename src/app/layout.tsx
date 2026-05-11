import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burger Hut Makola - Good Food, Great Taste, Good Mood",
  description:
    "Experience the ultimate flavor explosion with our locally sourced, handcrafted burgers in Makola, Sri Lanka. Visit us or order via WhatsApp.",
  keywords: "burger, Makola, Sri Lanka, street food, burgers, fast food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@700&family=Be+Vietnam+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
