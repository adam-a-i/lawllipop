import { motion } from 'framer-motion'

export function FloatingActionButton() {
  return (
    <motion.button 
      className="fab"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      + New Contract
    </motion.button>
  )
} 