import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meridian Advisory — Strategic Clarity for Complex Decisions",
  description:
    "Meridian Advisory provides strategic, M&A, financial, and operational consulting to leading organizations across 30 countries. Trusted by the world's most ambitious companies.",
  openGraph: {
    title: "Meridian Advisory",
    description: "Strategic clarity for complex decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
