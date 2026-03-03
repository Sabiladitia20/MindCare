import { motion } from 'framer-motion'

export default function QuizStep({ question, options, currentStep, totalSteps, onAnswer }) {
  return (
    <motion.div
      key={currentStep}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Pertanyaan {currentStep + 1} dari {totalSteps}</span>
          <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-sand rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-sage to-calm h-full rounded-full"
            initial={{ width: `${(currentStep / totalSteps) * 100}%` }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="font-heading text-xl md:text-2xl text-teal font-semibold mb-6 leading-relaxed">
        {question}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02, x: 8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(option.point)}
            className="w-full text-left p-4 rounded-xl border-2 border-calm/30 
                     bg-white hover:border-sage hover:bg-sage/5 
                     transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-calm/50 
                            group-hover:border-sage group-hover:bg-sage/10
                            flex items-center justify-center text-sm font-semibold 
                            text-gray-400 group-hover:text-sage transition-all">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-teal font-medium group-hover:text-sage transition-colors">
                {option.text}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
