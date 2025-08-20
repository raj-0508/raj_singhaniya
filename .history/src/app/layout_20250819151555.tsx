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
  title: "My Resume",
  description: "Portfolio resume project",
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
