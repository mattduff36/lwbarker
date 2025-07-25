import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lwbarkertransport.com'),
  title: {
    default: 'L.W. Barker Transport Services LTD | Professional Flatbed Transport',
    template: '%s | L.W. Barker Transport Services LTD'
  },
  description: 'Professional flatbed transport solutions with vehicles from 3.5-ton vans to 44-ton articulated lorries. Local, long distance and specialized transport services across the UK.',
  keywords: ['flatbed transport', 'transport services', 'logistics', 'UK transport', 'local transport', 'long distance transport', 'specialized transport', 'vehicle transportation', 'haulage services', 'delivery services'],
  authors: [{ name: 'L.W. Barker Transport Services LTD' }],
  creator: 'L.W. Barker Transport Services LTD',
  publisher: 'L.W. Barker Transport Services LTD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://lwbarkertransport.com',
    siteName: 'L.W. Barker Transport Services LTD',
    title: 'L.W. Barker Transport Services LTD | Professional Flatbed Transport',
    description: 'Professional flatbed transport solutions with vehicles from 3.5-ton vans to 44-ton articulated lorries. Local, long distance and specialized transport services across the UK.',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services LTD Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L.W. Barker Transport Services LTD | Professional Flatbed Transport',
    description: 'Professional flatbed transport solutions with vehicles from 3.5-ton vans to 44-ton articulated lorries. Local, long distance and specialized transport services across the UK.',
    images: ['/LOGO.png'],
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code when available
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com',
  },
  category: 'Transport Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 