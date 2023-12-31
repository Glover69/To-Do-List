import type { Metadata } from "next";
import { Lexend, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { NextAuthProvider } from "./provider";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do Manager",
  description: "To-Do List and Task Manager for your everyday needs",
  manifest: "/manifest.json",
  icons: { apple: '/icon.png'}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {/* <NextAuthProvider>
          {children}
          </NextAuthProvider> */}
          {children}
          </body>
    </html>
  );
}
