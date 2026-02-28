import type { Metadata } from "next"
import Script from "next/script"
import { Montserrat } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Naga5 Support | Portal Bantuan",
  description: "Portal bantuan resmi untuk kendala login akun, reset password, dan dukungan pengguna.",
  icons: {
    icon: "/naga5-logo.jpg",
    shortcut: "/naga5-logo.jpg",
    apple: "/naga5-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", montserrat.variable)}>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=d.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=d.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
ttq.load('D6G0JLRC77UFOU5DFQ2G');
ttq.page();
}(window, document, 'ttq');`}
        </Script>
        {children}
      </body>
    </html>
  )
}
