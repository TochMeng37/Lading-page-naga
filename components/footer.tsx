import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="text-xl font-bold mb-3">Naga5 Support</h4>
            <p className="text-white/60">Portal dukungan resmi untuk bantuan login akun dan bantuan umum.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Tautan Bantuan</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/contact" className="hover:text-white">Hubungi Support</a></li>
              <li><Link href="#help" className="hover:text-white">Pusat Bantuan</Link></li>
              <li><Link href="#steps" className="hover:text-white">Langkah Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kontak</h4>
            <p className="text-white/70">support@naga5support.com</p>
            <p className="text-white/50 text-sm mt-2">Senin–Jumat, 09:00–18:00</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-white/45 border-t border-white/10 pt-6">
          <p>© 2026 Naga5 Support. Semua hak dilindungi.</p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-white">Kebijakan Privasi</a>
            <a href="/terms" className="hover:text-white">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
