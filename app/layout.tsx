import "./globals.css";
import { CursorProvider } from "@app/components/cursor";
import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const spaceMono = Space_Mono({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Portfolio - Alex Voievudko",
  description:
    "Experienced front-end software engineer with a passion for building accessible and user-friendly web products. I'm dedicated to creating elegant solutions that enhance the user experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${spaceMono.variable}`}>
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
