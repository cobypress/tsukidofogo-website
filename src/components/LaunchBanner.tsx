export default function LaunchBanner() {
  return (
    <div
      className="flex items-center justify-center gap-6 flex-wrap bg-crimson"
      style={{ padding: '14px clamp(24px, 4vw, 64px)' }}
    >
      <div className="font-sans font-semibold text-[10px] tracking-[0.22em] uppercase text-white">
        Launching Summer 2026 in Málaga — Now Accepting Early Bookings
      </div>
      <a
        href="#booking"
        className="inline-flex items-center justify-center font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-white rounded-sm transition-all duration-300 hover:border-white/80 hover:text-white"
        style={{
          padding: '10px 22px',
          border: '1.5px solid rgba(255,255,255,0.5)',
        }}
      >
        Reserve Your Date
      </a>
    </div>
  )
}
