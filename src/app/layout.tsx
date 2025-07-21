import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import FooterGlow from "@/components/Footer/Footer";
import { StarBackground } from "@/components/ui/starBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Singhaniya – Frontend Developer",
  description:
    "Hi, I'm Raj Singhaniya – a passionate frontend developer crafting modern, responsive, and animated web experiences.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <StarBackground />
          <Header />

          {children}

          <FooterGlow />
        </ThemeProvider>
      </body>
    </html>
  );
}
