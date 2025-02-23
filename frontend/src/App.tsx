import { useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/layout/Hero'
import { AnimatedBackground } from './components/common/AnimatedBackground'

// Import styles
import './styles/base.css'
import './styles/theme.css'
import './styles/layout/navbar.css'
import './styles/layout/hero.css'
import './styles/dashboard/stats.css'
import './styles/animations.css'

function App() {
  const [isDarkMode] = useState(true)

  return (
    <div className="app-container">
      <AnimatedBackground />
      <Navbar />
      <main className="main-content">
        <Hero />
      </main>
    </div>
  )
}

export default App
