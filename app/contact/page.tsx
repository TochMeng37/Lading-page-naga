export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold mb-5">Hubungi Tim Support</h1>
        <p className="text-white/75 mb-6">
          Untuk bantuan akses akun, silakan hubungi tim support resmi melalui kontak berikut.
        </p>

        <div className="space-y-3 text-white/85">
          <p><span className="text-white/60">Email:</span> support@naga5support.com</p>
          <p><span className="text-white/60">Jam layanan:</span> Senin–Jumat, 09:00–18:00</p>
        </div>

        <p className="mt-6 text-sm text-white/55">
          Siapkan email/nomor akun terdaftar agar proses bantuan lebih cepat.
        </p>
      </div>
    </main>
  )
}
