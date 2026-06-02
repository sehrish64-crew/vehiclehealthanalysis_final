import { Metadata } from 'next'
import AboutUsClient from './about-us-client'

export const metadata: Metadata = {
  title: 'About Vehicle Health Analysis - Vehicle History Transparency',
  description:
    'Learn how Vehicle Health Analysis is driving transparency in the automotive industry with data-powered vehicle history reports from 900+ global databases.',
  openGraph: {
    title: 'About Vehicle Health Analysis - Vehicle History Transparency',
    description:
      'Learn how Vehicle Health Analysis is driving transparency in the automotive industry with data-powered vehicle history reports from 900+ global databases.',
    url: 'https://vehiclehealthanalysis.com/about-us',
    type: 'website',
  },
}

export default function AboutUs() {
  return <AboutUsClient />
}
