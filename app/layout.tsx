import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AquaPro Servis - Vodoinstalater Beograd | Hitne Intervencije 0-24",
  description: "AquaPro Servis - profesionalne vodoinstalaterske usluge u Beogradu. Hitne intervencije 0-24, mašinsko odgušenje kanalizacije, adaptacija kupatila, servis bojlera. Pozovite 063/825-7281",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: ["vodoinstalater", "beograd", "hitne intervencije", "odgušenje kanalizacije", "adaptacija kupatila", "servis bojlera", "montaža sanitarija", "zamena bojlera", "vodoinstalaterske usluge", "aquapro", "0-24"],
  alternates: {
    canonical: "https://www.aquaproservis.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
