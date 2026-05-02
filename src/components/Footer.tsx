'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Private Catering',     href: '#services' },
  { label: 'Events & Celebrations',href: '#services' },
  { label: "Chef's Table",         href: '#services' },
  { label: 'Menu Preview',         href: '#menu' },
  { label: 'About',                href: '#about' },
]

const socialLinks = [
  {
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
]

export default function Footer() {
  const [lang, setLang] = useState<'EN' | 'ES'>('EN')

  return (
    <footer
      className="border-t"
      style={{
        background: '#1A1A1E',
        padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 64px) 32px',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Top grid */}
        <div
          className="grid gap-10 mb-14"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div className="flex items-center gap-3.5 mb-5">
              <Image src="/logo-mark.png" alt="Tsuki Do Fogo" width={48} height={49} className="object-contain" />
              <div>
                <div className="font-sans font-bold text-[13px] tracking-[0.22em] uppercase text-gold">
                  Tsuki Do Fogo
                </div>
                <div
                  className="font-sans font-light text-[8px] tracking-[0.12em] uppercase mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  Donde la luna y el fuego se encuentran
                </div>
              </div>
            </div>
            <p
              className="font-serif leading-[1.7]"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', maxWidth: '280px' }}
            >
              Japanese–Brazilian fusion catering for extraordinary private events in Málaga and the
              Costa del Sol.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-gold mb-5">
              Experience
            </div>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block font-sans text-[12px] mb-2.5 tracking-[0.04em] no-underline transition-colors duration-300 hover:text-gold"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-gold mb-5">
              Contact
            </div>
            <div className="font-serif text-[13px] mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Málaga · Marbella
            </div>
            <div className="font-serif text-[13px] mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Costa del Sol, España
            </div>
            <a
              href="mailto:info@tsukidofogo.es"
              className="font-serif text-[13px] text-gold no-underline hover:text-gold-light transition-colors duration-300 block mb-2"
            >
              info@tsukidofogo.es
            </a>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex items-center justify-center rounded transition-colors duration-300 hover:bg-gold"
                  style={{
                    width: '34px',
                    height: '34px',
                    background: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="rgba(255,255,255,0.7)">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex justify-between items-center flex-wrap gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="font-sans text-[9px] tracking-[0.15em] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            © 2026 Tsuki Do Fogo — All Rights Reserved
          </div>

          {/* Language selector */}
          <div className="flex items-center">
            {(['EN', 'ES'] as const).map((code, i) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="font-sans text-[9px] tracking-[0.22em] uppercase cursor-pointer border-0 bg-transparent transition-all duration-300"
                style={{
                  padding: '6px 12px',
                  color: lang === code ? '#B79040' : 'rgba(255,255,255,0.25)',
                  borderBottom: lang === code ? '1px solid #B79040' : '1px solid transparent',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                }}
              >
                {code === 'EN' ? 'English' : 'Español'}
              </button>
            ))}
          </div>

          <div
            className="font-sans text-[9px] tracking-[0.15em] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Launching Summer 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
