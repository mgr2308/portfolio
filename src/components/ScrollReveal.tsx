"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right" | "none"
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  const directionMap = {
    up: { y: 40 },
    left: { x: -40 },
    right: { x: 40 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
