import { createContext, useContext, useState, ReactNode } from 'react'

type NavigationItem = 'dashboard' | 'analyze' | 'generate' | 'settings'

interface NavigationContextType {
  activeItem: NavigationItem
  setActiveItem: (item: NavigationItem) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState<NavigationItem>('dashboard')

  return (
    <NavigationContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
} 