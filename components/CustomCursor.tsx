'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', setFromEvent)

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] rounded-full bg-primary-400/50 pointer-events-none"
      style={{
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        border: '1px solid #a5b4fc',
      }}
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  )
}

export default CustomCursor 