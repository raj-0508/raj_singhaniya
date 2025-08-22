import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";

// Load Quantico
const quantico = Quantico({
  weight: ["400", "700"], // choose available weights
  subsets: ["latin"],
  variable: "--font-quantico",
});

export const metadata: Metadata = {
  title: "Raj Singhaniya – Frontend Developer",
  description:
    "Hi, I'm Raj Singhaniya – a passionate frontend developer crafting modern, responsive, and animated web experiences.",
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/logo.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quantico.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
