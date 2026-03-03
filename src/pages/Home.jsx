import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const stats = [
  { number: "1 dari 3", label: "Remaja Indonesia memiliki masalah kesehatan mental", source: "I-NAMHS 2022" },
  { number: "301 Juta", label: "Orang di dunia mengalami gangguan kecemasan", source: "WHO 2023" },
  { number: "2.6%", label: "Remaja yang pernah akses layanan kesehatan mental", source: "I-NAMHS 2022" },
  { number: "9.8%", label: "Prevalensi gangguan mental emosional di Indonesia", source: "Riskesdas 2018" },
]

const features = [
  {
    icon: "📚",
    title: "Edukasi Berbasis Fakta",
    description: "Artikel tentang anxiety, depresi, stres, dan self-care dengan data dari WHO dan Kemenkes RI.",
    link: "/artikel",
  },
  {
    icon: "📝",
    title: "Self-Check Interaktif",
    description: "Kuis skrining mandiri untuk mengenali kondisi kesehatan mentalmu. Bukan alat diagnosis klinis.",
    link: "/kuis",
  },
  {
    icon: "🏥",
    title: "Direktori Layanan",
    description: "Temukan rumah sakit jiwa, klinik psikologi, dan hotline krisis terdekat di kotamu.",
    link: "/layanan",
  },
  {
    icon: "🧘",
    title: "Tips & Mindfulness",
    description: "Panduan breathing exercise, teknik relaksasi, dan tips self-care praktis sehari-hari.",
    link: "/artikel",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand/50 via-white to-calm/20" />
        <div className="blob w-96 h-96 bg-sage top-20 -right-20" />
        <div className="blob w-72 h-72 bg-calm bottom-20 -left-10" />
        <div className="blob w-64 h-64 bg-sand top-1/2 left-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-sage/10 text-sage text-sm 
                         font-semibold px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                Platform Edukasi Kesehatan Mental
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal leading-tight mb-6">
                Kamu Tidak{' '}
                <span className="relative">
                  <span className="gradient-text">Sendirian</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="#5bbfa0" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                <br />dalam Perjalanan Ini
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                MindCare hadir untuk menemanimu memahami kesehatan mental. 
                Temukan informasi terpercaya, kenali kondisimu, dan akses bantuan 
                profesional — semuanya di satu tempat.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/artikel" className="btn-primary flex items-center gap-2">
                  Mulai Belajar
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/kuis" className="btn-secondary">
                  🧠 Self-Check Kuis
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Data dari WHO & Kemenkes
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Privasi Terjaga
                </div>
              </div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-sage/20 to-calm/20 rounded-full 
                              flex items-center justify-center animate-breathe">
                  <div className="w-64 h-64 bg-gradient-to-br from-sage/30 to-calm/30 rounded-full 
                                flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl mb-4 animate-float">🧠</div>
                      <p className="font-heading text-teal font-semibold text-lg">Your Mind</p>
                      <p className="text-sage text-sm">Matters</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-6 right-0 bg-white rounded-xl p-3 shadow-lg"
                >
                  <span className="text-2xl">💚</span>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-10 left-0 bg-white rounded-xl p-3 shadow-lg"
                >
                  <span className="text-2xl">🌿</span>
                </motion.div>
                <motion.div
                  animate={{ y: [-8, 12, -8] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute top-1/2 -right-6 bg-white rounded-xl p-3 shadow-lg"
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal relative overflow-hidden">
        <div className="blob w-72 h-72 bg-sage top-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              Data Bicara
            </h2>
            <p className="text-calm/80 max-w-xl mx-auto">
              Kesehatan mental bukan sekadar tren — ini masalah nyata yang perlu perhatian kita semua.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl 
                         border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="font-heading text-2xl md:text-3xl font-bold text-sage mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-white/70 mb-2">{stat.label}</p>
                <span className="text-xs text-calm/60 italic">— {stat.source}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Apa yang Bisa Kamu Temukan?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-subtitle"
            >
              MindCare menyediakan berbagai fitur untuk membantumu memahami 
              dan menjaga kesehatan mental.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={feature.link} className="block h-full">
                  <div className="card h-full group hover:-translate-y-2 transition-all duration-300">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-teal mb-2 
                                 group-hover:text-sage transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sage/10 to-calm/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6">💚</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-teal mb-4">
              Tidak Yakin dengan Kondisimu?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Coba kuis self-check kami untuk mengenali bagaimana perasaanmu akhir-akhir ini. 
              Ingat, ini bukan alat diagnosis — tapi bisa jadi langkah awal untuk lebih memahami dirimu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kuis" className="btn-primary text-lg px-8 py-4">
                🧠 Mulai Self-Check
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🆘</span>
              <div>
                <p className="font-semibold text-teal">Butuh bantuan segera?</p>
                <p className="text-sm text-gray-500">
                  Hubungi hotline Into The Light Indonesia — tersedia 24 jam
                </p>
              </div>
            </div>
            <a
              href="tel:119"
              className="btn-emergency whitespace-nowrap"
            >
              📞 119 ext 8
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
