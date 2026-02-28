export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Kebijakan Privasi</h1>
        <p className="text-white/75 mb-4">Kami hanya mengumpulkan dan memproses informasi terkait akun untuk memberikan dukungan, akses aman, dan komunikasi layanan.</p>
        <ul className="list-disc list-inside text-white/75 space-y-2">
          <li>Informasi permintaan dukungan dan detail kontak</li>
          <li>Log teknis untuk keamanan dan pemecahan masalah</li>
          <li>Detail verifikasi saat diperlukan untuk pemulihan akun</li>
        </ul>
      </div>
    </main>
  )
}
