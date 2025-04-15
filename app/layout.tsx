import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mom's Recipe Organizer",
  description: "A special birthday gift for Mom to organize her favorite recipes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto flex h-16 items-center px-4">
              <h1 className="text-xl font-bold">Mom's Recipe Organizer</h1>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
