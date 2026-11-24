import { useEffect, useRef } from 'react'

/** Reveal only on capable, motion-enabled browsers; otherwise all content stays visible. */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const section = ref.current
    if (!section || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const elements = Array.from(section.querySelectorAll('[data-reveal]'))
    // Hide only elements that have not yet entered the viewport. Deep links stay readable.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' })

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight - 35) {
        element.classList.add('reveal-pending')
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-pending'))
    }
  }, [])

  return ref
}
