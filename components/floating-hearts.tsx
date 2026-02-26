"use client"

import { useEffect, useState } from "react"
import { GoldHeart } from "./doodle-elements"

interface HeartPosition {
  id: number
  top: string
  left: string
  size: number
  delay: number
  duration: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartPosition[]>([])

  useEffect(() => {
    const generated: HeartPosition[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 14,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-pulse"
          style={{
            top: heart.top,
            left: heart.left,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <GoldHeart size={heart.size} />
        </div>
      ))}
    </div>
  )
}
