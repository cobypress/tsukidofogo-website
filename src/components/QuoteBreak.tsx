'use client'

import { motion } from 'framer-motion'

export default function QuoteBreak() {
  return (
    <section
      className="relative overflow-hidden text-center"
      style={{
        background: '#2C2C31',
        padding: 'clamp(60px, 8vw, 120px) clamp(24px, 4vw, 64px)',
      }}
    >
      {/* Giant decorative quote mark */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-bold text-gold select-none pointer-events-none leading-none z-0"
        style={{ fontSize: 'clamp(200px, 30vw, 500px)', opacity: 0.03 }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Flame icon */}
      <div className="flex justify-center mb-8 relative z-[1]">
        <svg viewBox="0 0 32 48" width="20" height="30" aria-hidden="true">
          <path
            d="M16 2C12 12 4 16 6 28c1 7 6 12 10 14C12 36 20 30 18 22c4 6 6 14 4 20 6-4 8-14 6-22C26 28 30 22 28 14 24 20 18 16 16 2z"
            fill="#BB2621"
            opacity="0.7"
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-[1] max-w-[800px] mx-auto"
      >
        <blockquote
          className="font-serif italic mb-7"
          style={{
            fontSize: 'clamp(18px, 2.4vw, 28px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.88)',
          }}
        >
          &ldquo;Entre la precisión japonesa y la pasión brasileña, encontramos el punto perfecto
          donde nace la emoción.&rdquo;
        </blockquote>
        <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold">
          Tsuki Do Fogo — Mission
        </div>
      </motion.div>
    </section>
  )
}
