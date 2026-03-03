import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek wajib diisi'
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const hotlines = [
    {
      name: "Into The Light Indonesia",
      number: "119 ext 8",
      description: "Hotline pencegahan bunuh diri — 24 jam",
      icon: "🆘",
      urgent: true,
    },
    {
      name: "LSM Jangan Bunuh Diri",
      number: "(021) 9696 9293",
      description: "Konseling krisis — 24 jam",
      icon: "📞",
      urgent: true,
    },
    {
      name: "Yayasan Pulih",
      number: "(021) 788-42580",
      description: "Konseling & trauma recovery",
      icon: "💚",
      urgent: false,
    },
    {
      name: "Sejiwa (Kemenkes RI)",
      number: "119 ext 8",
      description: "Layanan kesehatan jiwa nasional — 24 jam",
      icon: "🏥",
      urgent: true,
    },
  ]

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
              Kontak
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">
              Hubungi Kami
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Ada pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-red-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-teal mb-2">
              🆘 Bantuan Darurat
            </h2>
            <p className="text-gray-500 text-sm">
              Jika kamu atau orang terdekatmu dalam kondisi krisis, segera hubungi:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotlines.map((hotline, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-5 border-2 transition-all duration-300 hover:-translate-y-1 ${
                  hotline.urgent
                    ? 'bg-white border-red-200 hover:border-red-400 hover:shadow-lg hover:shadow-red-100'
                    : 'bg-white border-calm/30 hover:border-sage hover:shadow-lg hover:shadow-sage/10'
                }`}
              >
                <div className="text-3xl mb-3">{hotline.icon}</div>
                <h3 className="font-heading font-semibold text-teal text-sm">{hotline.name}</h3>
                <p className="text-sage font-bold text-lg mt-1">{hotline.number}</p>
                <p className="text-xs text-gray-400 mt-1">{hotline.description}</p>
                <a
                  href={`tel:${hotline.number.replace(/[^0-9]/g, '')}`}
                  className={`mt-3 inline-block text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
                    hotline.urgent
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-sage text-white hover:bg-sage-dark'
                  }`}
                >
                  Hubungi Sekarang
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-teal mb-6">
                Kirim Pesan
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card bg-sage/5 border-sage/20 text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading text-xl font-bold text-teal mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Terima kasih sudah menghubungi kami. Kami akan merespons secepat mungkin.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="btn-secondary text-sm"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-teal mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="Masukkan nama lengkap"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-teal mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="contoh@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-teal mb-1.5">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input-field ${errors.subject ? 'border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="Tentang apa pesan ini?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-teal mb-1.5">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-200' : ''}`}
                      placeholder="Tulis pesanmu di sini..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full" id="submit-contact">
                    Kirim Pesan
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-teal mb-6">
                Pertanyaan Umum
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "Apakah kuis self-check ini bisa mendiagnosis gangguan mental?",
                    a: "Tidak. Kuis ini hanya alat skrining awal dan bukan pengganti diagnosis profesional. Jika memerlukan evaluasi klinis, silakan berkonsultasi dengan psikolog atau psikiater."
                  },
                  {
                    q: "Apakah data saya aman?",
                    a: "MindCare tidak menyimpan data kuis atau informasi pribadi di server. Semua proses berjalan di browser Anda."
                  },
                  {
                    q: "Bagaimana cara mendapatkan bantuan profesional?",
                    a: "Kunjungi halaman Layanan kami untuk menemukan direktori klinik, psikolog, dan rumah sakit jiwa terdekat. Untuk bantuan darurat, hubungi 119 ext 8."
                  },
                  {
                    q: "Siapa yang membuat konten di MindCare?",
                    a: "Konten kami didasarkan pada sumber-sumber terpercaya seperti WHO, Kemenkes RI, dan jurnal ilmiah. Lihat daftar referensi di halaman About."
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card"
                  >
                    <h4 className="font-heading font-semibold text-teal text-sm flex items-start gap-2">
                      <span className="text-sage mt-0.5">Q:</span>
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 ml-6">{faq.a}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 card bg-gradient-to-br from-sage/5 to-calm/5">
                <h3 className="font-heading font-semibold text-teal mb-4">Info Lainnya</h3>
                <div className="space-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📧</span>
                    <span>mindcare.indonesia@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📍</span>
                    <span>Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🕐</span>
                    <span>Respons dalam 1-2 hari kerja</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
