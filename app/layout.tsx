import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name – Portfolio & Blog",
  description: "Explore the projects and writings of Your Name, a Full Stack Developer.",
  openGraph: {
    title: "Your Name – Portfolio & Blog",
    description: "Explore the projects and writings of Your Name, a Full Stack Developer.",
    url: "https://yourwebsite.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name – Portfolio & Blog",
    description: "Explore the projects and writings of Your Name, a Full Stack Developer.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'