import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './page.module.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbis Libris",
  description: "Libros de cualquier tiempo y lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
