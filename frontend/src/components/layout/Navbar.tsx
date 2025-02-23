import { motion } from 'framer-motion'

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
          <h1 className="logo">Lawllipop</h1>
        </div>
        
        <div className="nav-center">
          <a href="#" className="nav-item active">Dashboard</a>
          <a href="#" className="nav-item">Analyze Contract</a>
          <a href="#" className="nav-item">Generate Contract</a>
          <a href="#" className="nav-item">Settings</a>
        </div>

        <div className="nav-right">
          <button className="theme-toggle">🌙</button>
          <div className="avatar">👤</div>
        </div>
      </div>
    </motion.nav>
  )
} 