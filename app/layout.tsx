import type { Metadata } from "next";
import { Lexend, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do Manager",
  description: "To-Do List and Task Manager for your everyday needs",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="pwa-demo" content="pwa-demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="To-Do App" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
