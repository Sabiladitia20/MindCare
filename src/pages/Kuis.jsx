import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { quizData } from '../data/quizData'
import QuizStep from '../components/QuizStep'
import PageWrapper from '../components/PageWrapper'

const getResult = (score) => {
  if (score <= 7) {
    return {
      label: "Kondisimu Terlihat Baik 💚",
      color: "from-sage to-sage-dark",
      bgColor: "bg-sage/10 border-sage/20",
      emoji: "😊",
      description:
        "Berdasarkan jawabanmu, kondisi mentalmu saat ini terlihat cukup baik. Kamu tampaknya memiliki coping mechanism yang sehat.",
      tips: [
        "Pertahankan rutinitas positifmu saat ini",
        "Terus jaga pola tidur dan olahraga teratur",
        "Luangkan waktu untuk self-care setiap hari",
        "Jaga hubungan baik dengan orang terdekat",
        "Sesekali praktikkan mindfulness atau meditasi",
      ],
    }
  }
  if (score <= 15) {
    return {
      label: "Perlu Sedikit Perhatian 💛",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 border-yellow-200",
      emoji: "🤔",
      description:
        "Jawabanmu menunjukkan beberapa area yang mungkin perlu perhatian. Ini normal dan banyak orang mengalami hal serupa.",
      tips: [
        "Coba teknik relaksasi seperti deep breathing atau PMR",
        "Bicarakan perasaanmu kepada teman atau keluarga terpercaya",
        "Kurangi aktivitas yang membuatmu overwhelm",
        "Pastikan tidur cukup 7-9 jam per malam",
        "Pertimbangkan untuk berbicara dengan konselor atau psikolog",
        "Baca artikel self-care dan mindfulness di halaman Artikel kami",
      ],
    }
  }
  return {
    label: "Cari Bantuan Profesional 🧡",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 border-red-200",
    emoji: "🫂",
    description:
      "Jawabanmu menunjukkan bahwa kamu mungkin sedang mengalami tekanan yang cukup berat. Ini bukan kesalahanmu dan kamu tidak sendirian.",
    tips: [
      "Segera bicarakan kondisimu dengan orang yang kamu percaya",
      "Hubungi hotline kesehatan mental: 119 ext 8 (24 jam)",
      "Pertimbangkan konsultasi dengan psikolog atau psikiater",
      "Jangan ragu mencari bantuan — itu tanda keberanian, bukan kelemahan",
      "Kunjungi halaman Layanan kami untuk direktori bantuan terdekat",
      "Ingat: kondisi ini bisa membaik dengan dukungan yang tepat",
    ],
  }
}

export default function Kuis() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)

  const handleAnswer = (point) => {
    const newScore = score + point
    if (step + 1 >= quizData.length) {
      setScore(newScore)
      setDone(true)
    } else {
      setScore(newScore)
      setStep(step + 1)
    }
  }

  const resetQuiz = () => {
    setStep(0)
    setScore(0)
    setDone(false)
    setStarted(false)
  }

  const result = done ? getResult(score) : null

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-sand/50 via-white to-calm/10 relative overflow-hidden">
        <div className="blob w-72 h-72 bg-sage -top-10 -right-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-3">
              Self-Check
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">
              Kuis Kesehatan Mental
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kenali bagaimana perasaanmu akhir-akhir ini melalui kuis singkat ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Content */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-calm/10 rounded-xl border border-calm/20"
          >
            <div className="flex gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-semibold text-teal text-sm">Disclaimer Penting</p>
                <p className="text-xs text-gray-500 mt-1">
                  Kuis ini <strong>bukan alat diagnosis klinis</strong>. Hasil kuis hanya bersifat 
                  indikatif dan tidak menggantikan penilaian profesional kesehatan jiwa. 
                  Jika kamu merasa membutuhkan bantuan, silakan konsultasi ke psikolog atau psikiater.
                </p>
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {!started ? (
              /* Start Screen */
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="card text-center py-12"
              >
                <div className="text-6xl mb-6">🧠</div>
                <h2 className="font-heading text-2xl font-bold text-teal mb-4">
                  Siap untuk Self-Check?
                </h2>
                <p className="text-gray-500 mb-2">
                  Kuis ini terdiri dari <strong>{quizData.length} pertanyaan</strong> tentang 
                  perasaan dan pengalamanmu dalam 2 minggu terakhir.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  Waktu pengerjaan: ± 3-5 menit. Jawab dengan jujur — tidak ada jawaban benar atau salah.
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="btn-primary text-lg px-8 py-4"
                  id="start-quiz"
                >
                  Mulai Kuis →
                </button>
              </motion.div>
            ) : done ? (
              /* Result Screen */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Score Card */}
                <div className={`card ${result.bgColor} border-2 text-center py-8`}>
                  <div className="text-6xl mb-4">{result.emoji}</div>
                  <div className={`inline-block bg-gradient-to-r ${result.color} 
                                text-white font-bold px-6 py-2 rounded-full text-sm mb-4`}>
                    Skor: {score} / {quizData.length * 3}
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-teal mb-3">
                    {result.label}
                  </h2>
                  <p className="text-gray-500 max-w-lg mx-auto">
                    {result.description}
                  </p>
                </div>

                {/* Tips */}
                <div className="card">
                  <h3 className="font-heading text-lg font-semibold text-teal mb-4 flex items-center gap-2">
                    💡 Rekomendasi untuk Kamu
                  </h3>
                  <ul className="space-y-3">
                    {result.tips.map((tip, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-6 h-6 bg-sage/10 rounded-full flex items-center 
                                       justify-center flex-shrink-0 text-sage text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-600">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={resetQuiz} className="btn-secondary flex-1">
                    🔄 Ulangi Kuis
                  </button>
                  <Link to="/layanan" className="btn-primary flex-1 text-center">
                    🏥 Cari Layanan
                  </Link>
                  <Link to="/artikel" className="btn-secondary flex-1 text-center">
                    📚 Baca Artikel
                  </Link>
                </div>

                {/* Reminder */}
                <div className="p-4 bg-calm/10 rounded-xl border border-calm/20 text-center">
                  <p className="text-sm text-gray-500">
                    Ingat: Hasil ini <strong>bukan diagnosis klinis</strong>. 
                    Untuk evaluasi yang lebih akurat, konsultasikan dengan profesional 
                    kesehatan jiwa. Hubungi <strong className="text-sage">119 ext 8</strong> untuk 
                    bantuan 24 jam.
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Quiz Steps */
              <motion.div key="quiz" className="card">
                <QuizStep
                  question={quizData[step].question}
                  options={quizData[step].options}
                  currentStep={step}
                  totalSteps={quizData.length}
                  onAnswer={handleAnswer}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  )
}
