import { motion } from 'framer-motion'

interface HeaderProps {
  greeting: string
  isDarkMode: boolean
  onThemeToggle: () => void
}

export function Header({ greeting, isDarkMode, onThemeToggle }: HeaderProps) {
  return (
    <motion.header 
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h1>{greeting}</h1>
      <div className="header-actions">
        <button 
          className="theme-toggle"
          onClick={onThemeToggle}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div className="avatar">👤</div>
      </div>
    </motion.header>
  )
} 