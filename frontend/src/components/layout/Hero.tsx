import { motion } from 'framer-motion'
import { StatsCard } from '../dashboard/StatsCard'

export function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">AI-Powered</span> Legal Assistant
        </h1>
        <p className="hero-subtitle">
          Transform your legal workflow with AI-driven contract analysis and generation
        </p>
      </div>
      <div className="hero-stats">
        <StatsCard 
          title="Processing Time" 
          value="4 mins" 
          subtitle="From 300 hours to"
          icon="⚡"
          numericValue={4}
          suffix=" mins"
        />
        <StatsCard 
          title="Development Time" 
          value="30 mins" 
          subtitle="From 14-30 days to"
          icon="🚀"
          numericValue={30}
          suffix=" mins"
        />
        <StatsCard 
          title="Cost Reduction" 
          value="77%" 
          subtitle="Average savings of"
          icon="💰"
          numericValue={77}
          suffix="%"
        />
      </div>
    </div>
  )
} 