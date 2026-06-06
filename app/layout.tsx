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
  title: "Kola — Premium Hand-Coded Websites for Australian Businesses",
  description: "Get a custom, conversion-focused website for your Australian business. Delivered in 48 hours, fully optimized, and built to scale. From just A$99.",
  icons: {
    icon: "https://kolacommunications.com/KolaFavicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
