import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import PageWrapper from '../components/PageWrapper'

const categories = ["Semua", "Anxiety", "Depresi", "Stres", "Self-Care", "Mindfulness"]

export default function Artikel() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [selectedArticle, setSelectedArticle] = useState(null)

  const filteredArticles = activeCategory === "Semua"
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  if (selectedArticle) {
    return (
      <PageWrapper>
        <section className="pt-28 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-sage font-semibold mb-8 
                       hover:gap-3 transition-all group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Artikel
            </motion.button>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block text-xs font-semibold text-sage uppercase tracking-widest 
                             bg-sage/10 px-3 py-1 rounded-full mb-4">
                {selectedArticle.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-teal mb-4 leading-tight">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 
                            border-b border-calm/20">
                <span>⏱ {selectedArticle.readTime}</span>
                <span>📖 Artikel Edukasi</span>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="article-content text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-6 bg-calm/10 rounded-2xl border border-calm/20"
            >
              <div className="flex gap-3">
                <span className="text-2xl">ℹ️</span>
                <div>
                  <p className="font-semibold text-teal text-sm">Disclaimer</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Artikel ini bertujuan untuk edukasi dan informasi. Bukan pengganti 
                    konsultasi dengan profesional kesehatan jiwa. Jika kamu merasa butuh 
                    bantuan, hubungi 119 ext 8 atau kunjungi profesional terdekat.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Share / Navigate */}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-secondary text-sm"
              >
                ← Artikel Lainnya
              </button>
            </div>
          </div>
        </section>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-sand/50 via-white to-calm/10 relative overflow-hidden">
        <div className="blob w-72 h-72 bg-sage -top-10 -right-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-3">
              Edukasi
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">
              Artikel Kesehatan Mental
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Informasi terpercaya tentang berbagai aspek kesehatan mental. 
              Semua artikel didasarkan pada data dan riset ilmiah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-sage text-white shadow-md shadow-sage/20'
                    : 'bg-white text-gray-500 border border-calm/30 hover:border-sage hover:text-sage'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ArticleCard
                    title={article.title}
                    category={article.category}
                    excerpt={article.excerpt}
                    image={article.image}
                    readTime={article.readTime}
                    onClick={() => {
                      setSelectedArticle(article)
                      window.scrollTo(0, 0)
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500">Belum ada artikel untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}
