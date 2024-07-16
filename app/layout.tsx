import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import NavBarGlass from "./components/ui/nav/NavBarGlass";
import NavBarGlassII from "./components/ui/nav/NavBarGlassII";

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
    <html lang="fr" className={space_grotesk.className}>
      <body className="bg-gray-50 dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-gray-50 dark:bg-black">
            <NavBarGlass>{children}</NavBarGlass>
            {/* <NavBarGlassII>{children}</NavBarGlassII> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
