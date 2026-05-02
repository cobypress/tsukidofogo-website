'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    tag: 'Villa & Yacht',
    title: 'Private Catering',
    desc: 'Bespoke dining experiences for intimate gatherings in luxury villas, private residences, and yacht charters. Every detail — from menu to mise en scène — is crafted exclusively for you.',
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" aria-hidden="true">
        <path
          d="M8 40h32M12 40V24M36 40V24M6 24l18-16 18 16"
          stroke="#B79040"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Weddings & Celebrations',
    title: 'Events & Celebrations',
    desc: 'From intimate weddings to spectacular celebrations, we design culinary journeys that become the heart of your event. Fire cooking, live stations, and theatre dining for up to 200 guests.',
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" aria-hidden="true">
        <path
          d="M24 8c0 0-10 8-10 18a10 10 0 0020 0C34 16 24 8 24 8z"
          stroke="#B79040"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M24 40v4M20 44h8" stroke="#B79040" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Exclusive & Immersive',
    title: "Chef's Table",
    desc: 'A strictly limited, six-to-twelve-seat dining event where our head chef performs a live tasting journey through Japanese and Brazilian flavour. The most intimate expression of our craft.',
    icon: (
      <svg viewBox="0 0 48 48" width="32" height="32" fill="none" aria-hidden="true">
        <circle cx="24" cy="20" r="12" stroke="#B79040" strokeWidth="1.5" />
        <path
          d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12"
          stroke="#B79040"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 14v6l4 3"
          stroke="#B79040"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function ServiceCard({ service: s, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-default"
      style={{
        background: hovered ? '#3A3A3F' : 'rgba(255,255,255,0.04)',
        border: '1px solid #44444A',
        padding: '40px 36px 44px',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.22)' : 'none',
        borderRadius: '2px',
      }}
    >
      {/* Top gold accent bar */}
      <div
        className="absolute top-0 left-0 right-0 transition-all duration-500"
        style={{
          height: '2px',
          background: hovered ? '#B79040' : 'transparent',
        }}
      />

      <div className="flex justify-between items-start mb-7">
        <div>{s.icon}</div>
        <div
          className="font-sans font-bold text-gold leading-none"
          style={{ fontSize: '48px', opacity: 0.15 }}
        >
          {s.num}
        </div>
      </div>

      <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-crimson mb-2.5">
        {s.tag}
      </div>
      <h3
        className="font-sans font-bold text-white mb-4"
        style={{ fontSize: '22px', lineHeight: 1.15, letterSpacing: '-0.01em' }}
      >
        {s.title}
      </h3>
      <div className="w-8 h-px bg-gold mb-4" />
      <p
        className="font-serif leading-[1.75]"
        style={{ fontSize: '14px', color: 'rgba(255,255,255,0.58)' }}
      >
        {s.desc}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        background: '#2C2C31',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)',
      }}
    >
      {/* Decorative numeral */}
      <div
        className="absolute right-[-20px] top-[-40px] font-sans font-bold text-gold select-none pointer-events-none leading-none z-0"
        style={{ fontSize: 'clamp(160px, 20vw, 280px)', opacity: 0.04 }}
        aria-hidden="true"
      >
        03
      </div>

      <div className="max-w-[1280px] mx-auto relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
          style={{ maxWidth: '600px' }}
        >
          <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
            03 — The Experience
          </div>
          <h2
            className="font-sans font-bold text-white mb-5"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Three Paths to the Extraordinary
          </h2>
          <div className="w-12 h-px bg-gold mb-5" />
          <p className="font-serif text-base leading-[1.75] text-white/65">
            Each offering is crafted to feel singular, intentional, and unlike anything else on the
            Costa del Sol.
          </p>
        </motion.div>

        <div
          className="grid gap-px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
