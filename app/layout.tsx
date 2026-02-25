import { Inter, JetBrains_Mono, Crimson_Pro } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SATCORP COMMAND - Tactical Concierge',
  description: 'Private global operations command interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${crimsonPro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
