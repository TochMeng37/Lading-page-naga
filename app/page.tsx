import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />

      <section id="help" className="py-14">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pusat Bantuan Cepat</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Masalah Login",
                desc: "Tidak bisa masuk? Periksa username, password, dan koneksi internet Anda.",
              },
              {
                title: "Reset Password",
                desc: "Gunakan fitur reset password dan selesaikan verifikasi OTP/email dengan aman.",
              },
              {
                title: "Bantuan Akun",
                desc: "Butuh bantuan tim support? Hubungi kami dengan data akun terdaftar.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cara Login</h2>
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-7">
            <ol className="space-y-4 text-white/80 list-decimal list-inside">
              <li>Klik <span className="font-semibold">Lanjut ke Login</span>.</li>
              <li>Masukkan detail akun Anda yang terdaftar.</li>
              <li>Jika perlu, gunakan <span className="font-semibold">Lupa Password</span> lalu verifikasi OTP/email.</li>
              <li>Hubungi support jika masih gagal login.</li>
            </ol>

            <a
              href="https://superliga168cermat.com/"
              rel="nofollow noopener"
              className="mt-7 inline-block px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90"
            >
              Lanjut ke Login
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
