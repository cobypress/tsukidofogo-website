'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay },
})

const stats = [
  { num: 'Summer', label: '2026 Launch' },
  { num: 'Málaga',  label: 'Costa del Sol' },
  { num: 'Bespoke', label: 'Every Event' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden min-h-screen"
      style={{ background: '#2C2C31' }}
    >
      {/* Dark warm background */}
      <div className="absolute inset-0 z-0" style={{ background: '#1A1410' }}>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(105deg, rgba(44,44,49,0.88) 0%, rgba(44,44,49,0.55) 55%, rgba(44,44,49,0.35) 100%)',
          }}
        />
      </div>

      {/* Decorative large numeral */}
      <div
        className="absolute right-[-10px] bottom-[-60px] z-[1] font-sans font-bold text-gold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(200px, 25vw, 400px)', opacity: 0.045 }}
        aria-hidden="true"
      >
        01
      </div>

      {/* Vertical accent line */}
      <div
        className="absolute z-[2] opacity-40"
        style={{
          left: 'clamp(24px, 4vw, 64px)',
          top: '20%',
          bottom: '20%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, #B79040, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className="relative z-[3] max-w-[1280px] mx-auto w-full"
        style={{
          padding: 'clamp(100px, 12vh, 140px) clamp(32px, 6vw, 120px) clamp(60px, 8vh, 80px)',
        }}
      >
        <div style={{ maxWidth: '760px' }}>
          <motion.div {...fadeUp(0)} className="flex flex-col">
            {/* Eyebrow */}
            <div className="font-sans font-light text-[10px] tracking-[0.35em] uppercase text-crimson mb-7">
              J a p a n e s e – B r a z i l i a n &nbsp; F u s i o n &nbsp; · &nbsp; M á l a g a
            </div>

            {/* Headline */}
            <h1
              className="font-sans font-bold text-white mb-8"
              style={{
                fontSize: 'clamp(52px, 8vw, 116px)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
              }}
            >
              Where Fire<br />Meets Precision
            </h1>

            {/* Rule + location */}
            <div className="flex items-center gap-5 mb-7">
              <div className="w-16 h-px bg-gold flex-shrink-0" />
              <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/45">
                Málaga · Marbella · Costa del Sol
              </span>
            </div>

            {/* Description */}
            <p
              className="font-serif mb-12"
              style={{
                fontSize: 'clamp(15px, 1.4vw, 18px)',
                lineHeight: 1.75,
                maxWidth: '480px',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Japanese–Brazilian fusion catering in Málaga. Exclusive private events, weddings,
              and chef&apos;s table experiences crafted with fire, precision, and soul.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#booking"
                className="inline-flex items-center justify-center font-sans font-semibold tracking-[0.18em] uppercase text-white bg-gold rounded-sm hover:bg-gold-mid transition-all duration-300"
                style={{ fontSize: '12px', padding: '18px 44px' }}
              >
                Enquire Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center font-sans font-semibold tracking-[0.18em] uppercase text-white rounded-sm transition-all duration-300 hover:border-gold hover:text-gold"
                style={{
                  fontSize: '12px',
                  padding: '18px 44px',
                  border: '1.5px solid rgba(255,255,255,0.38)',
                }}
              >
                View Experience
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap gap-8 md:gap-16 mt-16 md:mt-28 pt-8"
          style={{ borderTop: '1px solid #44444A' }}
        >
          {stats.map((s) => (
            <div key={s.num}>
              <div
                className="font-sans font-bold text-gold leading-none"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '-0.01em' }}
              >
                {s.num}
              </div>
              <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/40 mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]"
        aria-hidden="true"
      >
        <div
          className="w-px"
          style={{
            height: '48px',
            background: 'linear-gradient(to bottom, transparent, #B79040)',
            opacity: 0.6,
          }}
        />
        <div className="font-sans text-[8px] tracking-[0.28em] uppercase text-white/35">
          Scroll
        </div>
      </div>
    </section>
  )
}
