export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Syarat Layanan</h1>
        <p className="text-white/75 mb-4">Dengan menggunakan portal dukungan ini, Anda setuju memberikan informasi akun yang akurat dan mematuhi aturan serta hukum yang berlaku.</p>
        <ul className="list-disc list-inside text-white/75 space-y-2">
          <li>Gunakan hanya akun Anda yang sah</li>
          <li>Dilarang menyalahgunakan atau mencoba akses tanpa izin</li>
          <li>Ikuti semua ketentuan hukum lokal dan aturan platform</li>
        </ul>
      </div>
    </main>
  )
}
