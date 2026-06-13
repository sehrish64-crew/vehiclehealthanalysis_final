import Banner from '@/components/Banner'
import WhyVehicleHealthAnalysis from '@/components/WhyAutoRevealed'
import FeaturesGrid from '@/components/FeaturesGrid'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import VinChecker from '@/components/VinChecker'
import Support from '@/components/Support'
import { MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials />
      <VinChecker />
      <Support />
      <WhyVehicleHealthAnalysis />

      <a
        href="https://wa.me/447555979712"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-green-900/20 transition hover:scale-105 hover:bg-[#1ebe5b] focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="text-sm font-semibold tracking-wide">+44 7555 979712</span>
      </a>
    </>
  );
}
