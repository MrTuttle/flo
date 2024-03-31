import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const outfit = Outfit({ subsets: ["latin"], display: "swap" });
const space_grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Florent Vincerot",
  description:
    "Développeur Front End, Designer UI/UX, j'imagine et conçois pour vous des sites agréables à consulter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
