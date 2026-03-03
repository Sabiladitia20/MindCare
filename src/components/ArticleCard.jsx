import { motion } from 'framer-motion'

export default function ArticleCard({ title, category, excerpt, image, readTime, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-sm border border-calm/20
                 cursor-pointer transition-shadow hover:shadow-xl hover:shadow-sage/10
                 group relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage to-calm 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0 mt-1">{image}</div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold text-sage uppercase tracking-widest 
                           bg-sage/10 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-400">⏱ {readTime}</span>
          </div>
          <h3 className="font-heading text-lg md:text-xl text-teal font-semibold mb-2 
                       group-hover:text-sage transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{excerpt}</p>
          <div className="mt-3 text-sage font-semibold text-sm flex items-center gap-1 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Baca selengkapnya 
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
