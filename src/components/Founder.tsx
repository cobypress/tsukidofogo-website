'use client'

import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden"
      style={{
        background: '#2C2C31',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)',
      }}
    >
      {/* Vertical line accent */}
      <div
        className="absolute opacity-20 hidden lg:block"
        style={{
          right: 'clamp(24px, 5vw, 80px)',
          top: '15%',
          bottom: '15%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, #B79040, transparent)',
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1280px] mx-auto"
      >
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 7vw, 100px)',
          }}
        >
          {/* Portrait placeholder */}
          <div className="relative">
            <div
              className="rounded-sm relative overflow-hidden"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                maxWidth: '420px',
                background: '#2A2218',
              }}
            >
              {/* Warm overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(183,144,64,0.08) 0%, rgba(187,38,33,0.06) 100%)',
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute rounded-sm"
              style={{
                bottom: '-20px',
                right: '-20px',
                background: '#B79040',
                padding: '24px 28px',
              }}
            >
              <div
                className="font-sans text-[9px] tracking-[0.22em] uppercase mb-1"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Head Chef
              </div>
              <div
                className="font-sans font-bold text-white"
                style={{ fontSize: '18px', lineHeight: 1.1 }}
              >
                Tsuki Do Fogo
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-4">
              07 — The Founder
            </div>
            <h2
              className="font-sans font-bold text-white"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                marginBottom: '24px',
              }}
            >
              A Vision Forged<br />Between Two Worlds
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />

            <p
              className="font-serif leading-[1.85] mb-5"
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}
            >
              Trained across kitchens in Tokyo, São Paulo, and Barcelona, our head chef brings a
              rare confluence of discipline and fire to every plate. Years spent studying Japanese
              washoku philosophy alongside the theatrical cooking traditions of Brazil formed a
              culinary language that is uniquely their own.
            </p>
            <p
              className="font-serif leading-[1.85] mb-5"
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}
            >
              The guiding philosophy: that food at its most powerful is not sustenance but
              ceremony — a bridge between cultures, between strangers, between memory and
              anticipation.
            </p>
            <p
              className="font-serif leading-[1.85] mb-10"
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}
            >
              Tsuki do Fogo is the culmination of that vision — brought to the sun-warmed coast of
              Málaga for those who seek something truly singular.
            </p>

            {/* Signature line */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <div
                className="font-sans text-[10px] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Craftsmanship · Vision · Fusion
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
