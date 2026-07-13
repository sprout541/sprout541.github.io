import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sprout541.github.io";
const title = "Ariele Radford — Full-stack developer + Nurse";
const description =
  "Ariele Radford is a full-stack developer, Nurse, and video game fan. Her work includes Haven, Rust Director, and TC Base Repair.";
const socialDescription =
  "Web platforms, subscription flows, and Rust server tools built by Ariele Radford.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: socialDescription,
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
