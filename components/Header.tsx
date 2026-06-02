"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

export default function Header() {
  const { t } = useTranslations()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLink =
    "relative text-gray-700 hover:text-[#0f4c81] transition-all font-semibold group"

  const activeLine =
    "absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0f4c81] group-hover:w-full transition-all duration-300"

  return (
    <>
      <header className="sticky top-0 z-[40] bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 max-w-[160px] sm:max-w-[220px] min-w-0">
              <Image
                src="/logo.png"
                alt="Vehicle Health Analysis"
                width={220}
                height={48}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link href="/" className={navLink}>
                {t('nav_home')}
                <span className={activeLine}></span>
              </Link>

              <Link href="/pricing" className={navLink}>
                {t('nav_pricing')}
                <span className={activeLine}></span>
              </Link>

              <Link href="/contact-us" className={navLink}>
                {t('nav_contact')}
                <span className={activeLine}></span>
              </Link>

              <Link href="/about-us" className={navLink}>
                {t('nav_about')}
                <span className={activeLine}></span>
              </Link>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

                {/* MOBILE MENU */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BORDER ACCENT */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0f4c81] to-transparent"></div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-6">
          <div className="flex justify-between items-center mb-8">
            <Image
              src="/logo.png"
              alt="Vehicle Health Analysis"
              width={180}
              height={36}
              className="h-6 sm:h-8 w-auto object-contain"
            />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X />
            </button>
          </div>

          <div className="space-y-4 text-lg font-semibold">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#0f4c81]">Home</Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#0f4c81]">Pricing</Link>
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#0f4c81]">Contact</Link>
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#0f4c81]">About</Link>
          </div>
        </div>
      )}
    </>
  )
}