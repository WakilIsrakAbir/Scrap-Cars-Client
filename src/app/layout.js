import { Inter, Outfit, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], display: "swap" });
const cairo = Cairo({ variable: "--font-cairo", subsets: ["arabic", "latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Home | ScrapCars",
    template: "%s | ScrapCars",
  },
  description: "Dubai's #1 scrap car buyer. Sell any condition car for instant cash. Free towing across UAE. RTA paperwork handled.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cairo.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-accent selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
