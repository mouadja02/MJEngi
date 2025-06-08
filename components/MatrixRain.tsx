'use client'

import { useEffect, useState } from 'react'

const MatrixRain = () => {
  const [drops, setDrops] = useState<number[]>([])

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20)
    const initialDrops = Array(columns).fill(1)
    setDrops(initialDrops)

    const interval = setInterval(() => {
      setDrops(prev => 
        prev.map((drop, index) => {
          if (drop * 20 > window.innerHeight && Math.random() > 0.975) {
            return 0
          }
          return drop + 1
        })
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10 z-0">
      {drops.map((drop, index) => (
        <div
          key={index}
          className="absolute text-primary-600 dark:text-primary-400 font-mono text-sm animate-pulse"
          style={{
            left: `${index * 20}px`,
            top: `${drop * 20}px`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </div>
      ))}
    </div>
  )
}

export default MatrixRain 