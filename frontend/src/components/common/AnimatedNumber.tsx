import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useScrollTrigger } from '../../hooks/useScrollTrigger'

interface AnimatedNumberProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function AnimatedNumber({ value, duration = 2, prefix = '', suffix = '' }: AnimatedNumberProps) {
  const [ref, isVisible] = useScrollTrigger()
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  })

  const displayValue = useTransform(springValue, (current) => 
    `${prefix}${Math.floor(current)}${suffix}`
  )

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    }
  }, [isVisible, value, springValue, hasAnimated])

  return (
    <motion.span ref={ref} className="animated-number">
      {displayValue}
    </motion.span>
  )
} 