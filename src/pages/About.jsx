import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const teamMembers = [
  {
    name: "Tim MindCare",
    role: "Full-Stack Developer & UI/UX Designer",
    avatar: "👨‍💻",
    description: "Membangun platform edukasi kesehatan mental yang informatif dan empatik.",
  },
]

const references = [
  {
    title: "World Health Organization (WHO)",
    description: "Mental Health Fact Sheet 2023 — Data global tentang prevalensi gangguan mental.",
    url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
  },
  {
    title: "I-NAMHS 2022",
    description: "Indonesia National Adolescent Mental Health Survey — Survei kesehatan mental remaja Indonesia.",
    url: "https://www.kemkes.go.id",
  },
  {
    title: "Riset Kesehatan Dasar (Riskesdas) 2018",
    description: "Data prevalensi gangguan mental emosional di Indonesia oleh Kemenkes RI.",
    url: "https://www.kemkes.go.id",
  },
  {
    title: "Into The Light Indonesia",
    description: "Organisasi pencegahan bunuh diri dan edukasi kesehatan mental di Indonesia.",
    url: "https://www.intothelightid.org",
  },
  {
    title: "PDSKJI",
    description: "Perhimpunan Dokter Spesialis Kedokteran Jiwa Indonesia — Sumber data profesional.",
    url: "https://pdskji.org",
  },
]

const timeline = [
  {
    year: "Masalah",
    title: "Stigma Masih Kuat",
    description: "Banyak orang menganggap masalah mental = 'kurang iman' atau 'lemah'. Stigma ini menghambat orang untuk mencari bantuan.",
    icon: "🚧",
  },
  {
    year: "Data",
    title: "Angka yang Mengkhawatirkan",
    description: "1 dari 3 remaja Indonesia memiliki masalah kesehatan mental, tapi hanya 2.6% yang pernah mengakses layanan profesional.",
    icon: "📊",
  },
  {
    year: "Solusi",
    title: "Edukasi & Akses",
    description: "MindCare hadir untuk menjembatani gap informasi dan akses layanan kesehatan mental di Indonesia.",
    icon: "💡",
  },
  {
    year: "Inovasi",
    title: "Teknologi untuk Kebaikan",
    description: "Dengan teknologi web modern, kita bisa menjangkau lebih banyak orang dan menyediakan tools self-assessment yang interaktif.",
    icon: "🚀",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-sand/50 via-white to-calm/10 relative overflow-hidden">
        <div className="blob w-80 h-80 bg-sage -top-20 -right-20" />
        <div className="blob w-64 h-64 bg-calm bottom-0 left-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-4">
              Tentang MindCare
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-6 leading-tight">
              Membangun Kesadaran,{' '}
              <span className="gradient-text">Menghapus Stigma</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              MindCare Indonesia adalah platform digital yang bertujuan meningkatkan literasi 
              kesehatan mental di kalangan pemuda Indonesia melalui edukasi berbasis fakta, 
              tools interaktif, dan akses ke layanan profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-sage/5 to-transparent"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-heading text-2xl font-bold text-teal mb-4">Visi</h3>
              <p className="text-gray-500 leading-relaxed">
                Menjadi platform edukasi kesehatan mental terdepan di Indonesia yang mudah diakses, 
                empatik, dan berbasis bukti ilmiah. Kami bermimpi tentang Indonesia di mana 
                setiap orang merasa aman untuk membicarakan kesehatan mentalnya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-calm/10 to-transparent"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-heading text-2xl font-bold text-teal mb-4">Misi</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex gap-3">
                  <span className="text-sage mt-1">✦</span>
                  Menyediakan informasi kesehatan mental yang akurat dan mudah dipahami
                </li>
                <li className="flex gap-3">
                  <span className="text-sage mt-1">✦</span>
                  Membantu mengenali tanda-tanda awal gangguan mental melalui tools interaktif
                </li>
                <li className="flex gap-3">
                  <span className="text-sage mt-1">✦</span>
                  Menghubungkan masyarakat dengan layanan kesehatan mental profesional
                </li>
                <li className="flex gap-3">
                  <span className="text-sage mt-1">✦</span>
                  Membangun komunitas yang mendukung dan bebas stigma
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INNOVATE Connection */}
      <section className="py-20 bg-teal relative overflow-hidden">
        <div className="blob w-96 h-96 bg-sage top-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Kaitan dengan Tema INNOVATE
            </h2>
            <p className="text-calm/80 max-w-2xl mx-auto">
              MindCare merupakan inovasi dalam pendekatan edukasi kesehatan mental 
              di Indonesia menggunakan teknologi web modern.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
                         hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  {item.year}
                </span>
                <h3 className="font-heading text-lg text-white font-semibold mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Tim Kami</h2>
          <p className="section-subtitle">
            Dibangun oleh pemuda Indonesia yang peduli pada kesehatan mental.
          </p>

          <div className="flex justify-center">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card max-w-sm text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-sage/20 to-calm/20 
                              rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                  {member.avatar}
                </div>
                <h3 className="font-heading text-xl font-semibold text-teal">{member.name}</h3>
                <p className="text-sage text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-3">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-gradient-to-b from-white to-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Sumber Referensi</h2>
          <p className="section-subtitle text-center">
            Semua konten di MindCare didasarkan pada sumber-sumber ilmiah yang terpercaya.
          </p>

          <div className="space-y-4">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center 
                              flex-shrink-0 text-sage font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-teal">{ref.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{ref.description}</p>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage text-sm hover:underline mt-1 inline-block"
                  >
                    Kunjungi sumber →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
