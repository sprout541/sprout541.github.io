import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Ariele Radford — Full-stack developer + Nurse",
    description:
      "Portfolio of Ariele Radford, a full-stack developer and Nurse building clear, dependable systems for people doing real work.",
    openGraph: {
      title: "Ariele Radford — Full-stack developer + Nurse",
      description:
        "Clear interfaces, dependable full-stack systems, and thoughtful tools for real workflows.",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1730,
          height: 909,
          alt: "Ariele Radford — Full-stack developer + Nurse",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ariele Radford — Full-stack developer + Nurse",
      description:
        "Clear interfaces, dependable full-stack systems, and thoughtful tools for real workflows.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
