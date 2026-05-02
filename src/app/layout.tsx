import type { Metadata } from 'next'
import { Josefin_Sans, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tsuki Do Fogo — Where Fire Meets Precision',
  description:
    "Japanese–Brazilian fusion catering in Málaga. Exclusive private events, weddings, and chef's table experiences crafted with fire, precision, and soul.",
  keywords:
    'catering Málaga, Japanese Brazilian fusion, luxury catering Costa del Sol, private chef Marbella, wedding catering Spain',
  openGraph: {
    title: 'Tsuki Do Fogo — Where Fire Meets Precision',
    description:
      'Japanese–Brazilian fusion catering for extraordinary private events in Málaga and the Costa del Sol.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${libreBaskerville.variable}`}
    >
      <body className="font-sans antialiased bg-brand-dark">{children}</body>
    </html>
  )
}
