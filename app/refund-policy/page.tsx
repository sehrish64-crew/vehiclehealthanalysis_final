import type { Metadata } from 'next'
import RefundPolicyPageClient from './refund-policy-client'

export const metadata: Metadata = {
  title: 'Refund Policy - Vehicle Health Analysis',
  description: 'Learn about Vehicle Health Analysis refund policy and how to request a refund for your vehicle history report.',
  openGraph: {
    title: 'Refund Policy - Vehicle Health Analysis',
    description: 'Our customer-friendly refund policy details.',
    url: 'https://vehiclehealthanalysis.com/refund-policy',
    type: 'website',
  },
}

export default function RefundPolicyPage() {
  return <RefundPolicyPageClient />
}
