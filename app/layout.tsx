import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import './globals.css'

const lexend = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To-Do Manager',
  description: 'To-Do List and Task Manager for your everyday needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
