import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="nav-content">
        <div className="nav-left">
          <Link to="/" className="logo">Lawllipop</Link>
        </div>
        
        <div className="nav-center">
          <Link to="/" className="nav-item">Dashboard</Link>
          <Link to="/analyze" className="nav-item">Analyze Contract</Link>
          <Link to="/generate" className="nav-item">Generate Contract</Link>
          <Link to="/settings" className="nav-item">Settings</Link>
        </div>
      </div>
    </motion.nav>
  )
} 