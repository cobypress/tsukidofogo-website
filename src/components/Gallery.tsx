'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const cells = [
  { label: 'Live Fire',    bg: '#3A2A1A', gridArea: '1 / 1 / 3 / 2' },
  { label: 'Plated Art',  bg: '#2C2420', gridArea: '1 / 2 / 2 / 3' },
  { label: 'Event Setup', bg: '#4A3520', gridArea: '1 / 3 / 2 / 4' },
  { label: 'Details',     bg: '#3A3028', gridArea: '2 / 2 / 3 / 3' },
  { label: 'Ceremony',    bg: '#241C14', gridArea: '2 / 3 / 3 / 4' },
  { label: 'Atmosphere',  bg: '#352820', gridArea: '3 / 1 / 4 / 2' },
  { label: 'Chef at Work',bg: '#2A2218', gridArea: '3 / 2 / 4 / 4' },
]

function GalleryCell({ cell }: { cell: (typeof cells)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ gridArea: cell.gridArea }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div
        className="w-full h-full transition-transform duration-700"
        style={{
          background: cell.bg,
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
      />
      {/* Subtle gradient overlay always */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(183,144,64,0.08) 0%, rgba(187,38,33,0.04) 100%)',
        }}
      />
      {/* Hover reveal */}
      <div
        className="absolute inset-0 flex items-end p-5 transition-opacity duration-500"
        style={{
          background: 'rgba(44,44,49,0.62)',
          backdropFilter: 'blur(2px)',
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-gold">
          {cell.label}
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="overflow-hidden"
      style={{
        background: '#2C2C31',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1280px] mx-auto"
      >
        {/* Header */}
        <div
          className="flex justify-between items-end flex-wrap gap-6 mb-12"
        >
          <div>
            <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              05 — Gallery
            </div>
            <h2
              className="font-sans font-bold text-white mb-5"
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              The Visual Experience
            </h2>
            <div className="w-12 h-px bg-gold" />
          </div>
          <p
            className="font-serif leading-[1.7] text-white/50"
            style={{ fontSize: '15px', maxWidth: '340px' }}
          >
            A preview of what awaits — fire, craft, and atmosphere curated for the extraordinary.
          </p>
        </div>

        {/* Asymmetric grid — desktop */}
        <div
          className="hidden md:grid gap-1"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 220px)',
          }}
        >
          {cells.map((cell) => (
            <GalleryCell key={cell.label} cell={cell} />
          ))}
        </div>

        {/* Mobile fallback — 2-col simple grid */}
        <div className="grid grid-cols-2 gap-1 md:hidden">
          {cells.map((cell) => (
            <div
              key={cell.label}
              className="relative overflow-hidden"
              style={{ height: '160px', background: cell.bg }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(183,144,64,0.08) 0%, rgba(187,38,33,0.04) 100%)',
                }}
              />
              <div className="absolute bottom-3 left-3">
                <div className="font-sans text-[8px] tracking-[0.2em] uppercase text-gold/70">
                  {cell.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
