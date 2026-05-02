import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LaunchBanner from '@/components/LaunchBanner'
import About from '@/components/About'
import Services from '@/components/Services'
import MenuPreview from '@/components/MenuPreview'
import QuoteBreak from '@/components/QuoteBreak'
import Gallery from '@/components/Gallery'
import PreLaunch from '@/components/PreLaunch'
import Founder from '@/components/Founder'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LaunchBanner />
        <About />
        <Services />
        <MenuPreview />
        <QuoteBreak />
        <Gallery />
        <PreLaunch />
        <Founder />
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}
