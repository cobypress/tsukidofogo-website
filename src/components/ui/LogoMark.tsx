interface LogoMarkProps {
  size?: number
}

export default function LogoMark({ size = 42 }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      {/* Flame body */}
      <path
        d="M20 3C16 13 9 17 11 27c.9 6.5 6 11 9 13-2.5-8 3-13 2-20 3 5 5 13 3 19 5.5-3.5 7.5-13 5-21C28 25 32 19 30 13 26 19 23 15 20 3z"
        fill="#BB2621"
        opacity="0.92"
      />
      {/* Moon crescent */}
      <path
        d="M14 6C8 13 8 31 14 38 7 33.5 5 19.5 11 9.5z"
        fill="#B79040"
      />
    </svg>
  )
}
