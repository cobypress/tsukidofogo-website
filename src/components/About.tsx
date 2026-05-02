'use client'

import { motion } from 'framer-motion'

const values = [
  {
    num: '01',
    title: 'Conexión',
    desc: 'Guests become part of something lasting — a shared experience, not just a meal.',
  },
  {
    num: '02',
    title: 'Historia',
    desc: 'Every plate tells a story of two cultures, fused with intention and craft.',
  },
  {
    num: '03',
    title: 'Precisión',
    desc: 'Japanese discipline applied to every detail, from sourcing to presentation.',
  },
]

const reveal = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden"
      style={{
        background: '#F5F4F2',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid items-center"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(48px, 6vw, 100px)',
          }}
        >
          {/* Text column */}
          <div>
            <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              02 — Our Story
            </div>
            <h2
              className="font-sans font-bold text-[#2C2C31]"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                lineHeight: 1.0,
                letterSpacing: '-0.015em',
                marginBottom: '24px',
              }}
            >
              Two Cultures.<br />One Flame.
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />

            <p className="font-serif text-base leading-[1.8] text-[#5A5A62] mb-5">
              Tsuki do Fogo was born from a deep passion for two cultures that seem worlds apart —
              yet share an obsession with craft, ritual, and the alchemy of fire.
            </p>
            <p className="font-serif text-base leading-[1.8] text-[#5A5A62] mb-5">
              Japanese precision meets Brazilian warmth. The restraint of a katana cut alongside the
              theatre of live fire. Every event we craft is a story told through flavour, smoke, and
              ceremony.
            </p>
            <p className="font-serif text-base leading-[1.8] text-[#5A5A62] mb-9">
              We don&apos;t simply cater — we create immersive sensory experiences for those who
              expect nothing less than extraordinary.
            </p>

            {/* Brand values */}
            <div className="flex flex-col gap-5">
              {values.map((v) => (
                <div key={v.num} className="flex gap-5 items-start">
                  <div
                    className="font-sans font-bold text-gold leading-none flex-shrink-0"
                    style={{ fontSize: '28px', opacity: 0.25, width: '44px' }}
                  >
                    {v.num}
                  </div>
                  <div>
                    <div className="font-sans text-sm font-semibold text-[#2C2C31] tracking-[0.04em] mb-1">
                      {v.title}
                    </div>
                    <div className="font-serif text-[13px] leading-[1.65] text-[#5A5A62]">
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '240px 240px',
            }}
          >
            {/* Tall left — spans both rows */}
            <div
              className="relative rounded-sm overflow-hidden transition-transform duration-700 hover:scale-[1.02]"
              style={{
                gridRow: '1 / 3',
                background: '#3A3530',
              }}
            >
              {/* Warm overlay */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 40%, rgba(44,44,49,0.7) 100%)',
                }}
              />
              {/* Gold shimmer */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(183,144,64,0.10) 0%, rgba(187,38,33,0.06) 100%)',
                }}
              />
              <div className="absolute bottom-5 left-5 z-[2]">
                <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold">
                  Live Fire
                </div>
              </div>
            </div>

            {/* Top right */}
            <div
              className="rounded-sm overflow-hidden transition-transform duration-700 hover:scale-[1.02] relative"
              style={{ background: '#3A3A3F' }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(183,144,64,0.08) 0%, rgba(44,44,49,0.3) 100%)',
                }}
              />
            </div>

            {/* Bottom right — warm gold tone */}
            <div
              className="rounded-sm overflow-hidden transition-transform duration-700 hover:scale-[1.02] relative"
              style={{ background: '#4A3A22' }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(183,144,64,0.18) 0%, rgba(187,38,33,0.08) 100%)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
