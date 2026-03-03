import { motion } from 'framer-motion'

export default function HotlineButton() {
  return (
    <motion.a
      href="tel:119"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 
                 bg-gradient-to-r from-red-500 to-red-600 text-white 
                 font-bold px-5 py-3.5 rounded-full shadow-xl shadow-red-500/30 
                 hover:shadow-red-500/50 transition-all duration-300 group"
      title="Butuh bantuan darurat? Hubungi 119 ext 8"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-3 h-3 bg-white rounded-full"
      />
      <span className="hidden sm:inline text-sm">Butuh Bantuan? 119 ext 8</span>
      <span className="sm:hidden text-sm">🆘 119</span>
    </motion.a>
  )
}
