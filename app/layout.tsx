import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Kwanzasites - Criação de Sites e Soluções Digitais em Angola",
  description:
    "A Kwanzasites cria sites profissionais, lojas online e soluções digitais personalizadas em Angola. Transforme seu negócio com desenvolvimento web de qualidade.",
  generator: "Kwanzasites",
  keywords: [
    "sites",
    "criação de sites",
    "criação de sites Angola",
    "desenvolvimento web Angola",
    "sites profissionais Angola",
    "lojas online Angola",
    "marketing digital Angola",
    "sites modernos Angola",
    "soluções digitais Angola",
    "agência de sites Angola",
    "web design Angola",
    "desenvolvimento de lojas online Angola",
    "criação de lojas online Angola",
    "sites responsivos Angola",
    "sites personalizados Angola",
    "agência digital Angola",
    "criação de sites personalizados Angola",
    "agência de marketing digital Angola",
    "sites para empresas Angola",
    "criação de sites para empresas Angola",
    "desenvolvimento de sites para empresas Angola",
    "sites institucionais Angola",
    "sites comerciais Angola",
    "agência de web design Angola",
    "criação de web design Angola",
    "desenvolvimento de web design Angola",
    "sites de negócios Angola",
    "criação de sites de negócios Angola",
    "desenvolvimento de sites de negócios Angola",
    "agência de criação de sites Angola",
    "agência de desenvolvimento web Angola",
    "agência de criação de lojas online Angola",
    "agência de desenvolvimento de lojas online Angola",
    "sites e soluções digitais Angola",
    "criação de sites e soluções digitais Angola",
    "desenvolvimento de sites e soluções digitais Angola",
    "agência de sites e soluções digitais Angola",
    "web design e desenvolvimento Angola",
    "criação de web design e desenvolvimento Angola",
    "desenvolvimento de web design e desenvolvimento Angola",         
  ],
  openGraph: {
    title: "Kwanzasites - Criação de Sites e Soluções Digitais em Angola",
    description:
      "A Kwanzasites cria sites profissionais, lojas online e soluções digitais personalizadas em Angola. Transforme seu negócio com desenvolvimento web de qualidade.",
    url: "https://kwanza-sites.vercel.app",
    siteName: "Kwanzasites",
    images: [
      {
        url: "https://kwanza-sites.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kwanzasites - Desenvolvimento de Sites em Angola",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwanzasites - Criação de Sites e Soluções Digitais em Angola",
    description:
      "A Kwanzasites cria sites profissionais, lojas online e soluções digitais personalizadas em Angola.",
    images: ["https://kwanza-sites.vercel.app/og-image.png"],
    site: "@kwanzasites",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${playfairDisplay.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
