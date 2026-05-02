'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { InstagramPost } from '@/app/api/instagram/route'

const CELLS = [
  { label: 'Live Fire',     bg: '#3A2A1A', gridArea: '1 / 1 / 3 / 2' },
  { label: 'Plated Art',   bg: '#2C2420', gridArea: '1 / 2 / 2 / 3' },
  { label: 'Event Setup',  bg: '#4A3520', gridArea: '1 / 3 / 2 / 4' },
  { label: 'Details',      bg: '#3A3028', gridArea: '2 / 2 / 3 / 3' },
  { label: 'Ceremony',     bg: '#241C14', gridArea: '2 / 3 / 3 / 4' },
  { label: 'Atmosphere',   bg: '#352820', gridArea: '3 / 1 / 4 / 2' },
  { label: 'Chef at Work', bg: '#2A2218', gridArea: '3 / 2 / 4 / 4' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

interface CellProps {
  cell: (typeof CELLS)[0]
  post?: InstagramPost
  loading: boolean
}

function GalleryCell({ cell, post, loading }: CellProps) {
  const [hovered, setHovered] = useState(false)

  const imgUrl =
    post?.media_type === 'VIDEO' ? post.thumbnail_url : post?.media_url

  return (
    <a
      href={post?.permalink ?? '#gallery'}
      target={post ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="relative overflow-hidden block"
      style={{ gridArea: cell.gridArea }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={!post ? (e) => e.preventDefault() : undefined}
    >
      {/* Image or placeholder */}
      {imgUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgUrl}
          alt={post?.caption?.slice(0, 80) ?? 'Tsuki Do Fogo'}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
      ) : (
        <div
          className="w-full h-full transition-transform duration-700"
          style={{
            background: loading
              ? 'linear-gradient(90deg, #3A3530 25%, #4A4540 50%, #3A3530 75%)'
              : cell.bg,
            backgroundSize: loading ? '400px 100%' : 'auto',
            animation: loading ? 'shimmer 1.6s infinite' : 'none',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      )}

      {/* Persistent warm gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(183,144,64,0.07) 0%, rgba(187,38,33,0.04) 100%)',
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-500"
        style={{
          background: 'rgba(44,44,49,0.65)',
          backdropFilter: 'blur(2px)',
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-gold mb-1">
          {cell.label}
        </div>
        {post?.caption && (
          <p
            className="font-serif text-white/60 overflow-hidden"
            style={{
              fontSize: '11px',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {post.caption}
          </p>
        )}
      </div>

      {/* Instagram badge — appears on hover when real post */}
      {post && (
        <div
          className="absolute top-3 right-3 text-white transition-opacity duration-300"
          style={{ opacity: hovered ? 0.75 : 0 }}
        >
          <InstagramIcon />
        </div>
      )}
    </a>
  )
}

export default function Gallery() {
  const [posts, setPosts]     = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/instagram')
      .then((r) => r.json())
      .then(({ posts: p }) => setPosts(p ?? []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  const handle = process.env.NEXT_PUBLIC_INSTAGRAM ?? 'tsukidofogo'

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
        <div className="flex justify-between items-end flex-wrap gap-6 mb-12">
          <div>
            <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              05 — Gallery
            </div>
            <h2
              className="font-sans font-bold text-white mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              The Visual Experience
            </h2>
            <div className="w-12 h-px bg-gold" />
          </div>

          <div className="flex flex-col items-end gap-3">
            <p
              className="font-serif leading-[1.7] text-white/50 text-right"
              style={{ fontSize: '15px', maxWidth: '340px' }}
            >
              {posts.length > 0
                ? 'Live from our Instagram — fire, craft, and atmosphere in real time.'
                : 'A preview of what awaits — fire, craft, and atmosphere curated for the extraordinary.'}
            </p>
            <a
              href={`https://www.instagram.com/${handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-[9px] tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors duration-300 no-underline"
            >
              <InstagramIcon />
              @{handle}
            </a>
          </div>
        </div>

        {/* Asymmetric grid — desktop */}
        <div
          className="hidden md:grid gap-1"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 220px)',
          }}
        >
          {CELLS.map((cell, i) => (
            <GalleryCell
              key={cell.label}
              cell={cell}
              post={posts[i]}
              loading={loading}
            />
          ))}
        </div>

        {/* Mobile — 2-col grid */}
        <div className="grid grid-cols-2 gap-1 md:hidden">
          {CELLS.map((cell, i) => {
            const post  = posts[i]
            const imgUrl = post?.media_type === 'VIDEO' ? post.thumbnail_url : post?.media_url
            return (
              <a
                key={cell.label}
                href={post?.permalink ?? '#gallery'}
                target={post ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="relative overflow-hidden block"
                style={{ height: '160px', background: cell.bg }}
                onClick={!post ? (e) => e.preventDefault() : undefined}
              >
                {imgUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imgUrl}
                    alt={post?.caption?.slice(0, 60) ?? 'Tsuki Do Fogo'}
                    className="w-full h-full object-cover"
                  />
                )}
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
              </a>
            )
          })}
        </div>
      </motion.div>

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
      `}</style>
    </section>
  )
}
