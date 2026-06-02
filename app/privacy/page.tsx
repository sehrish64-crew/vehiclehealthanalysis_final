import type { Metadata } from 'next'
import PrivacyPageClient from './privacy-client'

export const metadata: Metadata = {
  title: 'Privacy Policy - Vehicle Health Analysis',
  description: 'Read our privacy policy to understand how Vehicle Health Analysis collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy - Vehicle Health Analysis',
    description: 'Our commitment to protecting your personal information and privacy.',
    url: 'https://vehiclehealthanalysis.com/privacy',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
