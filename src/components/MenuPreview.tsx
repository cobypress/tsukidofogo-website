'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const dishes = [
  {
    num: '01',
    tag: 'Signature',
    name: 'Wagyu A5 with Japanese-Brazilian Glaze',
    desc: 'Marble-grade wagyu, yuzu kosho butter, tucupi reduction, koshihikari rice cake.',
  },
  {
    num: '02',
    tag: 'From the Robata',
    name: 'Grilled King Prawn, Dashi Broth & Hearts of Palm',
    desc: 'Live-fire robata prawns, light dashi consommé, palmito espuma, crispy nori.',
  },
  {
    num: '03',
    tag: 'Small Plates',
    name: 'Tuna Tataki, Mango & Ají Amarillo Ponzu',
    desc: 'Seared bluefin tuna, tiger-milk ponzu, charred mango, sesame oil, microgreens.',
  },
  {
    num: '04',
    tag: 'Small Plates',
    name: 'Crispy Pork Belly, Miso Caramel & Farofa',
    desc: 'Slow-cooked pork belly lacquered in shiro miso caramel, toasted farofa, pickled daikon.',
  },
  {
    num: '05',
    tag: 'Signature',
    name: 'Robata Octopus, Chimichurri & Black Sesame',
    desc: 'Whole tentacle, open-fire char, Japanese chimichurri, black sesame purée, lemon gel.',
  },
  {
    num: '06',
    tag: 'From the Sea',
    name: 'Seabass Ceviche, Coconut Leche de Tigre & Yuzu',
    desc: 'Line-caught seabass, coconut tiger milk, yuzu zest, crispy cancha, shiso leaf.',
  },
]

function DishRow({ dish: d }: { dish: (typeof dishes)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-5 cursor-default transition-all duration-300"
      style={{
        padding: '24px 0',
        borderBottom: '1px solid #D8D7D4',
        paddingLeft: hovered ? '8px' : '0',
      }}
    >
      <div
        className="font-sans text-[11px] tracking-[0.18em] text-gold flex-shrink-0 pt-1"
        style={{ opacity: 0.5, width: '28px' }}
      >
        {d.num}
      </div>
      <div className="flex-1">
        <div className="font-sans text-[8px] tracking-[0.22em] uppercase text-crimson mb-1.5">
          {d.tag}
        </div>
        <div
          className="font-sans font-semibold transition-colors duration-300 mb-2"
          style={{
            fontSize: '16px',
            lineHeight: 1.25,
            color: hovered ? '#B79040' : '#2C2C31',
          }}
        >
          {d.name}
        </div>
        <div
          className="font-serif italic leading-[1.65] text-[#5A5A62]"
          style={{ fontSize: '13px' }}
        >
          {d.desc}
        </div>
      </div>
    </div>
  )
}

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden"
      style={{
        background: '#F5F4F2',
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
        <div
          className="grid items-start"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
          }}
        >
          {/* Sticky left header */}
          <div className="lg:sticky lg:top-[100px]">
            <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              04 — Tasting Notes
            </div>
            <h2
              className="font-sans font-bold text-[#2C2C31] mb-5"
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              A Glimpse of the Menu
            </h2>
            <div className="w-12 h-px bg-gold mb-5" />
            <p className="font-serif text-base leading-[1.75] text-[#5A5A62] mb-10">
              Each dish is composed to tell a story — a meeting point between two culinary
              traditions that don&apos;t usually share the same fire.
            </p>

            {/* Info card */}
            <div className="rounded-sm p-8" style={{ background: '#2C2C31' }}>
              <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-gold mb-3">
                Bespoke menus only
              </div>
              <p
                className="font-serif leading-[1.7] mb-6"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}
              >
                Every menu is composed around your event, season, and guests. What you see here is a
                taste of what&apos;s possible.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center justify-center font-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-white bg-gold rounded-sm px-8 py-3.5 hover:bg-gold-mid transition-colors duration-300"
              >
                Request Full Menu
              </a>
            </div>
          </div>

          {/* Dish list */}
          <div>
            {dishes.map((d) => (
              <DishRow key={d.num} dish={d} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
