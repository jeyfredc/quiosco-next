import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
/* Este es un archivo reservado en Next */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Quiosco Next.js con App Router y Prisma",
  description: "Quiosco Next.js con App Router y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
