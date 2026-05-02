'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#services' },
  { label: 'Menu',       href: '#menu' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Contact',    href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] transition-all duration-500"
        style={{
          padding: '0 clamp(24px, 4vw, 64px)',
          background: scrolled ? 'rgba(44,44,49,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #44444A' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3.5 no-underline">
          <Image src="/logo-mark.png" alt="Tsuki Do Fogo" width={42} height={43} className="object-contain" />
          <span className="font-sans font-bold text-[13px] tracking-[0.22em] uppercase text-gold">
            Tsuki Do Fogo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-9 items-center">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 no-underline hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#booking"
          className="hidden md:inline-flex items-center font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-white bg-gold rounded-sm px-[22px] py-[10px] hover:bg-gold-mid transition-colors duration-300"
        >
          Enquire Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 bg-white transition-all duration-300"
              style={{ height: '1.5px' }}
            />
          ))}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 flex flex-col gap-6 md:hidden"
            style={{
              background: 'rgba(44,44,49,0.98)',
              backdropFilter: 'blur(12px)',
              padding: '32px 24px',
              borderBottom: '1px solid #44444A',
            }}
          >
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="font-sans text-[12px] tracking-[0.2em] uppercase text-white/80 text-left bg-transparent border-0 cursor-pointer hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center font-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-white bg-gold rounded-sm py-3.5 hover:bg-gold-mid transition-colors duration-300"
            >
              Enquire Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
