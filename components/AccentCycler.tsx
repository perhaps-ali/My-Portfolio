'use client'
import { useEffect } from 'react'

const ACCENTS = ['#f59e0b', '#a3e635', '#22d3ee']

export default function AccentCycler() {
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-accent')
    if (saved) document.documentElement.style.setProperty('--accent', saved)
  }, [])
  return null
}

export function useAccentCycle() {
  const cycle = () => {
    const current = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
    const idx = ACCENTS.indexOf(current)
    const next = ACCENTS[(idx + 1) % ACCENTS.length]
    document.documentElement.style.setProperty('--accent', next)
    localStorage.setItem('portfolio-accent', next)
  }
  return cycle
}
