'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  name: string
  email: string
  type: string
  date: string
  guests: string
  message: string
}

interface FormErrors {
  name?: boolean
  email?: boolean
  type?: boolean
}

const inputBase: React.CSSProperties = {
  fontFamily: 'var(--font-serif), Georgia, serif',
  fontSize: '14px',
  padding: '14px 16px',
  background: 'rgba(255,255,255,0.05)',
  color: '#fff',
  borderRadius: '2px',
  width: '100%',
  transition: 'border-color 0.3s ease',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans), Futura, sans-serif',
  fontSize: '9px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  display: 'block',
  marginBottom: '8px',
}

export default function BookingForm() {
  const [form, setForm]     = useState<FormData>({ name: '', email: '', type: '', date: '', guests: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim())        e.name = true
    if (!form.email.includes('@')) e.email = true
    if (!form.type)               e.type = true
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
    setSent(true)
  }

  const borderColor = (hasError?: boolean) => hasError ? '#BB2621' : '#44444A'

  return (
    <section
      id="booking"
      className="relative overflow-hidden"
      style={{
        background: '#2C2C31',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 64px)',
      }}
    >
      {/* Decorative numeral */}
      <div
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 font-sans font-bold text-gold select-none pointer-events-none leading-none z-0"
        style={{ fontSize: 'clamp(160px, 18vw, 260px)', opacity: 0.035 }}
        aria-hidden="true"
      >
        08
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[880px] mx-auto relative z-[1]"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
            08 — Enquiries
          </div>
          <h2
            className="font-sans font-bold text-white mb-5"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Request a Bespoke Experience
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-5" />
          <p className="font-serif text-base leading-[1.75] text-white/65 mx-auto" style={{ maxWidth: '560px' }}>
            Tell us about your event. We respond to all enquiries within 24 hours and offer a
            complimentary consultation with our head chef.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center rounded-sm"
              style={{
                padding: '60px 40px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid #44444A',
              }}
            >
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
                  <circle cx="24" cy="24" r="20" stroke="#B79040" strokeWidth="1.5" />
                  <path
                    d="M16 24l6 6 10-12"
                    stroke="#B79040"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="font-sans text-[12px] tracking-[0.22em] uppercase text-gold mb-4">
                Enquiry Received
              </div>
              <p className="font-serif text-base leading-[1.7] text-white/65">
                Thank you for reaching out. We will be in touch within 24 hours to begin crafting
                your experience.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Row 1 — Name + Email */}
              <div
                className="grid gap-5 mb-5"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
              >
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    className="tdf-input"
                    style={{ ...inputBase, border: `1px solid ${borderColor(errors.name)}` }}
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your full name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    className="tdf-input"
                    style={{ ...inputBase, border: `1px solid ${borderColor(errors.email)}` }}
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@email.com"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Row 2 — Type + Date + Guests */}
              <div
                className="grid gap-5 mb-5"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
              >
                <div>
                  <label style={labelStyle}>Event Type *</label>
                  <select
                    className="tdf-input"
                    style={{ ...inputBase, border: `1px solid ${borderColor(errors.type)}` }}
                    value={form.type}
                    onChange={set('type')}
                    aria-required="true"
                  >
                    <option value="">Select...</option>
                    <option>Private Villa Dinner</option>
                    <option>Wedding</option>
                    <option>Yacht Charter</option>
                    <option>Corporate Event</option>
                    <option>Chef&apos;s Table</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    className="tdf-input"
                    style={{ ...inputBase, border: `1px solid #44444A` }}
                    type="date"
                    value={form.date}
                    onChange={set('date')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Guest Count</label>
                  <input
                    className="tdf-input"
                    style={{ ...inputBase, border: `1px solid #44444A` }}
                    type="number"
                    value={form.guests}
                    onChange={set('guests')}
                    placeholder="Approx. guests"
                    min="2"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label style={labelStyle}>Tell us about your event</label>
                <textarea
                  className="tdf-input"
                  style={{
                    ...inputBase,
                    border: `1px solid #44444A`,
                    height: '140px',
                    resize: 'vertical',
                  }}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Occasion, location, special requirements, dietary needs..."
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center font-sans font-semibold tracking-[0.18em] uppercase text-white bg-gold rounded-sm hover:bg-gold-mid transition-all duration-300 disabled:opacity-60"
                  style={{
                    fontSize: '12px',
                    padding: '18px 44px',
                    width: '100%',
                    maxWidth: '360px',
                  }}
                >
                  {loading ? 'Sending...' : 'Request a Bespoke Experience'}
                </button>
                <p
                  className="font-sans text-[9px] tracking-[0.18em] uppercase mt-4"
                  style={{ color: 'rgba(255,255,255,0.28)' }}
                >
                  We respond within 24 hours · Complimentary consultation included
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
