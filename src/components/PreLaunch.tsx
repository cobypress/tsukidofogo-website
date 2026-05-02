'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      '"An unforgettable evening — the kind of dining experience you tell people about for years."',
    name: 'Sofia M.',
    role: 'Private Event, Marbella',
  },
  {
    quote:
      '"The fusion concept is executed with genuine sophistication. The robata dishes alone are worth the journey."',
    name: 'James R.',
    role: 'Boutique Hotel Partner',
  },
]

export default function PreLaunch() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#F5F4F2',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)',
      }}
    >
      {/* Decorative numeral */}
      <div
        className="absolute right-[-20px] bottom-[-40px] font-sans font-bold text-[#2C2C31] select-none pointer-events-none leading-none z-0"
        style={{ fontSize: 'clamp(160px, 18vw, 260px)', opacity: 0.05 }}
        aria-hidden="true"
      >
        06
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1280px] mx-auto relative z-[1]"
      >
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 6vw, 96px)',
          }}
        >
          {/* Left — copy */}
          <div>
            <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-crimson mb-4">
              06 — Coming Soon
            </div>
            <h2
              className="font-sans font-bold text-[#2C2C31]"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                lineHeight: 1.0,
                letterSpacing: '-0.015em',
                marginBottom: '24px',
              }}
            >
              Something<br />Exceptional<br />Is Arriving.
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-serif text-base leading-[1.8] text-[#5A5A62] mb-4">
              Tsuki do Fogo launches in Málaga this Summer 2026. We are currently accepting
              expressions of interest from private clients, event planners, and boutique hotels on
              the Costa del Sol.
            </p>
            <p className="font-serif text-base leading-[1.8] text-[#5A5A62] mb-10">
              Early enquiries receive priority booking access and a complimentary consultation with
              our head chef.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center justify-center font-sans font-semibold tracking-[0.18em] uppercase text-white bg-gold rounded-sm hover:bg-gold-mid transition-colors duration-300"
              style={{ fontSize: '12px', padding: '18px 44px' }}
            >
              Register Early Interest
            </a>
          </div>

          {/* Right — testimonials + badge */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-sm p-8 bg-white"
                style={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  borderLeft: '3px solid #B79040',
                }}
              >
                <p
                  className="font-serif italic leading-[1.7] text-[#5A5A62] mb-5"
                  style={{ fontSize: '15px' }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold flex-shrink-0" />
                  <div>
                    <div className="font-sans text-xs font-semibold text-[#2C2C31] tracking-[0.06em]">
                      {t.name}
                    </div>
                    <div className="font-sans text-[9px] tracking-[0.18em] uppercase text-[#9A9AA2] mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Launch badge */}
            <div className="rounded-sm p-7 text-center" style={{ background: '#2C2C31' }}>
              <div className="font-sans text-[9px] tracking-[0.28em] uppercase text-gold mb-2">
                Opening
              </div>
              <div
                className="font-sans font-bold text-white"
                style={{ fontSize: '32px', letterSpacing: '-0.01em' }}
              >
                Summer 2026
              </div>
              <div
                className="font-serif italic text-white/45 mt-1.5"
                style={{ fontSize: '13px' }}
              >
                Málaga · Marbella · Costa del Sol
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
