import { motion } from 'framer-motion'
import './AnimatedBackground.css'

export function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="matrix-text">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="text-column"
            initial={{ y: -1000 }}
            animate={{ y: 1000 }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['Indemnification', 'Liability', 'Confidentiality', 'Jurisdiction', 'Termination']
              .sort(() => Math.random() - 0.5)
              .map((text, index) => (
                <span key={index} style={{ opacity: Math.random() * 0.3 + 0.1 }}>
                  {text}
                </span>
              ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
} 