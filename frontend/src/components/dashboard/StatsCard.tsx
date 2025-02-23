import { motion } from 'framer-motion'

interface StatsCardProps {
  title: string
  value: string
  subtitle: string
  icon: string
}

export function StatsCard({ title, value, subtitle, icon }: StatsCardProps) {
  return (
    <motion.div 
      className="stats-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="stats-icon">{icon}</div>
      <div className="stats-content">
        <p className="stats-subtitle">{subtitle}</p>
        <h2 className="stats-value">{value}</h2>
        <h3 className="stats-title">{title}</h3>
      </div>
    </motion.div>
  )
} 