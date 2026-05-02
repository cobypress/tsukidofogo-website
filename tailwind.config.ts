import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B79040',
          mid: '#967336',
          dark: '#70572B',
          light: '#D4AE6A',
          pale: '#EDD9A3',
        },
        crimson: {
          DEFAULT: '#BB2621',
          dark: '#6D1616',
          mid: '#991D1D',
        },
        brand: {
          dark: '#2C2C31',
          darker: '#3A3A3F',
          darkest: '#1A1A1E',
          light: '#F5F4F2',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Futura', 'Century Gothic', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '2px',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

export default config
