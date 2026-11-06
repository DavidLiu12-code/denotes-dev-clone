import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interFull = Inter({
  subsets: ["latin"],
  variable: "--font-inter-full",
  display: "swap",
});

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-caveat",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: "%s · Denotes",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: "/",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 2400,
        height: 1260,
        alt: "Denotes：用 AI 做出不廉价的界面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interFull.variable} ${noto.variable} ${caveat.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
