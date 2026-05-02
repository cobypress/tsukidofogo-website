interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  dark?: boolean
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  dark = false,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div
      className={`${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {label && (
        <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
          {label}
        </div>
      )}
      <h2
        className={`font-sans font-bold leading-[1.05] mb-5 ${
          dark ? 'text-white' : 'text-[#2C2C31]'
        }`}
        style={{
          fontSize: 'clamp(32px, 4vw, 56px)',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      <div
        className={`h-px bg-gold mb-5 ${centered ? 'mx-auto' : ''}`}
        style={{ width: '48px' }}
      />
      {subtitle && (
        <p
          className={`font-serif text-base leading-[1.75] ${
            dark ? 'text-white/65' : 'text-[#5A5A62]'
          } ${centered ? 'mx-auto' : ''}`}
          style={{ maxWidth: '560px' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
