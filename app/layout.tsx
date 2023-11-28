import type { Metadata } from "next";
import { Lexend, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do Manager",
  description: "To-Do List and Task Manager for your everyday needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
