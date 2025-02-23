import { motion } from 'framer-motion'
import { useNavigation } from '../../contexts/NavigationContext'

interface NavItem {
  id: 'dashboard' | 'analyze' | 'generate' | 'settings'
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'analyze', label: 'Analyze Contract', icon: '📝' },
  { id: 'generate', label: 'Generate Contract', icon: '⚡' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
]

export function Sidebar() {
  const { activeItem, setActiveItem } = useNavigation()

  return (
    <motion.nav 
      className="sidebar"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="logo">
        <h2>Lawllipop</h2>
      </div>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li 
            key={item.id}
            className={activeItem === item.id ? 'active' : ''}
            onClick={() => setActiveItem(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </motion.nav>
  )
} 