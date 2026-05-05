import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/LandingPage/navbar";


export const metadata: Metadata = {
  title: "GlossiGo Detailing™ | Premium Car Care Studio",
  description:
    "GlossiGo Detailing is a premium car care studio offering exterior wash, paint correction, ceramic coating, PPF, and interior detailing services.",
  keywords: [
    "car detailing",
    "paint correction",
    "ceramic coating",
    "PPF",
    "car care",
    "premium detailing",
    "GlossiGo",
  ],
  openGraph: {
    title: "GlossiGo Detailing™",
    description: "Where Perfection Meets the Road",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Subtle noise texture over the whole site */}
        <div className="noise" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}