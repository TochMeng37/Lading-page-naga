"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto rounded-full glass bg-black/50 flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
          Naga5 <span className="text-blue-400">Support</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-white/75">
          <Link href="#help" className="hover:text-white transition-colors">Pusat Bantuan</Link>
          <Link href="#steps" className="hover:text-white transition-colors">Cara Login</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Kontak</Link>
          <a
            href="https://situs-5naga.netlify.app/"
            rel="nofollow noopener"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Lanjut ke Login
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
