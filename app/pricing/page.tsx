import { Metadata } from 'next'
import PricingClient from './pricing-client'

export const metadata: Metadata = {
  title: 'Pricing Plans - Vehicle Health Analysis Vehicle History Reports',
  description:
    'Affordable vehicle history report pricing plans. Premium reports starting from $29. Find the perfect plan for your needs.',
  openGraph: {
    title: 'Pricing Plans - Vehicle Health Analysis Vehicle History Reports',
    description:
      'Affordable vehicle history report pricing plans. Premium reports starting from $29. Find the perfect plan for your needs.',
    url: 'https://vehiclehealthanalysis.com/pricing',
    type: 'website',
  },
}

export default function Pricing() {
  return <PricingClient />
}
