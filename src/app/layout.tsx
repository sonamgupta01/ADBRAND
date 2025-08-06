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
  title: "ADmyBRAND AI Suite | AI-Powered Marketing Tools",
  description: "Supercharge your brand's growth with our cutting-edge AI marketing suite. Create compelling content, optimize campaigns, and engage your audience like never before.",
  keywords: "AI marketing, content generation, campaign optimization, social media management, email marketing",
  authors: [{ name: "ADmyBRAND" }],
  creator: "ADmyBRAND",
  publisher: "ADmyBRAND",
  openGraph: {
    title: "ADmyBRAND AI Suite | AI-Powered Marketing Tools",
    description: "Supercharge your brand's growth with our cutting-edge AI marketing suite.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite | AI-Powered Marketing Tools",
    description: "Supercharge your brand's growth with our cutting-edge AI marketing suite.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
