import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavigationProvider } from './contexts/NavigationContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>,
)
