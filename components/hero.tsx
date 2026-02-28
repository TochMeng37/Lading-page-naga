"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[18%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-white/80 uppercase tracking-wider"
        >
          Bantuan Akun Resmi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-6 mb-6 text-gradient"
        >
          Butuh bantuan untuk masuk
          <br />
          ke akun Naga5 Anda?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/65 max-w-2xl mx-auto mb-10"
        >
          Portal dukungan resmi untuk kendala login, reset password, dan panduan akun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
          >
            Hubungi Tim Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://situs-5naga.netlify.app/"
            rel="nofollow noopener"
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Lanjut ke Situs Mitra
          </a>
        </motion.div>

        <p className="mt-4 text-sm text-white/45">
          Anda akan diarahkan ke situs mitra eksternal.
        </p>
      </div>
    </section>
  )
}
