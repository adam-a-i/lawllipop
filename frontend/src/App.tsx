import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/layout/Hero'
import { ContractAnalyzer } from './components/contract/ContractAnalyzer'
import { ContractGenerator } from './components/contract/ContractGenerator'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import styles
import './styles/base.css'
import './styles/theme.css'
import './styles/layout/navbar.css'
import './styles/layout/hero.css'
import './styles/dashboard/stats.css'
import './styles/animations.css'
import './styles/contract.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/analyze" element={<ContractAnalyzer />} />
            <Route path="/generate" element={<ContractGenerator />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
