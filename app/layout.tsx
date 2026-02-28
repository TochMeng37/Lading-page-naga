import type { Metadata } from "next"
import { Montserrat } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Naga5 Support | Portal Bantuan Resmi",
  description: "Portal bantuan resmi untuk kendala login akun, reset password, dan dukungan pengguna.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", montserrat.variable)}>
        {children}
      </body>
    </html>
  )
}
