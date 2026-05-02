import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost' | 'outline' | 'dark' | 'crimson'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  className?: string
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary:  { background: '#B79040', color: '#fff', border: 'none' },
  ghost:    { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.38)' },
  outline:  { background: 'transparent', color: '#B79040', border: '1.5px solid #B79040' },
  dark:     { background: '#2C2C31', color: '#fff', border: 'none' },
  crimson:  { background: '#BB2621', color: '#fff', border: 'none' },
}

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { fontSize: '10px', padding: '10px 22px' },
  md: { fontSize: '11px', padding: '14px 32px' },
  lg: { fontSize: '12px', padding: '18px 44px' },
}

const hoverMap: Record<Variant, string> = {
  primary: 'hover:bg-gold-mid',
  ghost:   'hover:border-gold hover:text-gold',
  outline: 'hover:bg-gold hover:text-white',
  dark:    'hover:bg-brand-darker',
  crimson: 'hover:bg-crimson-dark',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans), Futura, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ...sizeStyles[size],
    ...variantStyles[variant],
  }

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        className={`${hoverMap[variant]} transition-all duration-300 ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      style={baseStyle}
      className={`${hoverMap[variant]} transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
