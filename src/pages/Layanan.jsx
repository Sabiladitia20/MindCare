import { useState } from 'react'
import { motion } from 'framer-motion'
import { layananData } from '../data/layanan'
import PageWrapper from '../components/PageWrapper'

const cities = ["Semua", ...new Set(layananData.map((l) => l.kota))]
const types = ["Semua", ...new Set(layananData.map((l) => l.tipe))]

export default function Layanan() {
  const [selectedCity, setSelectedCity] = useState("Semua")
  const [selectedType, setSelectedType] = useState("Semua")

  const filtered = layananData.filter((l) => {
    const cityMatch = selectedCity === "Semua" || l.kota === selectedCity
    const typeMatch = selectedType === "Semua" || l.tipe === selectedType
    return cityMatch && typeMatch
  })

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-sand/50 via-white to-calm/10 relative overflow-hidden">
        <div className="blob w-72 h-72 bg-sage -top-10 -right-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-3">
              Direktori
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">
              Layanan Kesehatan Mental
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Temukan rumah sakit jiwa, klinik psikologi, hotline krisis, 
              dan layanan kesehatan mental lainnya di Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-calm/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Filter Kota
              </label>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedCity === city
                        ? 'bg-sage text-white shadow-sm'
                        : 'bg-white text-gray-500 border border-calm/30 hover:border-sage'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Filter Tipe
              </label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedType === type
                        ? 'bg-sage text-white shadow-sm'
                        : 'bg-white text-gray-500 border border-calm/30 hover:border-sage'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-6">
            Menampilkan {filtered.length} layanan
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((layanan, i) => (
              <motion.div
                key={layanan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    layanan.tipe === 'Hotline' || layanan.tipe === 'Hotline & Komunitas'
                      ? 'bg-red-100 text-red-600'
                      : layanan.tipe === 'Platform Digital'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-sage/10 text-sage'
                  }`}>
                    {layanan.tipe}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">
                    📍 {layanan.kota}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-teal mb-2">
                  {layanan.nama}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{layanan.alamat}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {layanan.layanan.map((l, j) => (
                    <span key={j} className="text-xs bg-sand/50 text-teal px-2 py-1 rounded-md">
                      {l}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-calm/20">
                  <div className="text-sm">
                    <span className="text-gray-400">📞 </span>
                    <span className="font-semibold text-sage">{layanan.telepon}</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    🕐 {layanan.jam}
                  </div>
                </div>

                <a
                  href={`tel:${layanan.telepon.replace(/[^0-9]/g, '')}`}
                  className="mt-4 block text-center btn-primary text-sm py-2"
                >
                  Hubungi
                </a>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500">Tidak ada layanan yang sesuai filter.</p>
              <button
                onClick={() => { setSelectedCity("Semua"); setSelectedType("Semua") }}
                className="btn-secondary text-sm mt-4"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Note */}
      <section className="py-8 bg-gradient-to-r from-red-50 to-red-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal font-semibold mb-2">
            🆘 Dalam kondisi darurat?
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Hubungi <strong className="text-sage">119 ext 8</strong> (Into The Light Indonesia / Sejiwa) 
            untuk bantuan krisis 24 jam.
          </p>
          <a href="tel:119" className="btn-emergency text-sm">
            📞 Hubungi 119 ext 8 Sekarang
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}
